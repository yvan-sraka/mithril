//! Stake Pool manager for the Runners
//!

use std::{fmt::Display, sync::Arc};

use async_trait::async_trait;
use mithril_common::{
    chain_observer::ChainObserver,
    entities::{Epoch, StakeDistribution},
    store::StakeStorer,
    StdError,
};

use crate::database::provider::StakePoolStore;

/// Errors related to the [StakePoolDistributionService].
#[derive(Debug)]
pub enum StakePoolDistributionServiceError {
    /// Critical errors cannot be recovered.
    Technical {
        /// Error message
        message: String,
        /// Eventual nested error
        error: Option<StdError>,
    },
    /// Could not get the current Epoch
    UndefinedCurrentEpoch,
    /// The system is in the process of retrieving this stake distribution.
    NotReadyYet(Epoch),
    /// The stake distribution for the given Epoch is not available anymore.
    Pruned(Epoch),
    /// Cannot get stake distribution Epochs away from the futur.
    EpochAhead(Epoch),
}

impl StakePoolDistributionServiceError {
    /// Simple way to nest technical errors
    pub fn technical_susbystem(error: StdError) -> Box<Self> {
        Box::new(Self::Technical {
            message: "Stake pool service subsystem error occured.".to_string(),
            error: Some(error),
        })
    }
}

impl TryFrom<StdError> for StakePoolDistributionServiceError {
    type Error = Box<Self>;

    fn try_from(value: StdError) -> Result<Self, Self::Error> {
        Err(Box::new(Self::Technical {
            message: "subsystem error".to_string(),
            error: Some(value),
        }))
    }
}

impl Display for StakePoolDistributionServiceError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Technical { message, error } => {
                if let Some(nested_error) = error {
                    write!(
                        f,
                        "Critical error: {message} (nested error: '{nested_error}')"
                    )
                } else {
                    write!(f, "Critical error: {message}")
                }
            }
            Self::NotReadyYet(epoch) => {
                write!(f, "The stake distribution for epoch {epoch:?} is still in process and is not available yet.")
            }
            Self::Pruned(epoch) => {
                write!(f, "The stake distribution for epoch {epoch:?} is not available anymore, it has been removed from the archives.")
            }
            Self::UndefinedCurrentEpoch => {
                write!(f, "Could not read the current Epoch from chain.")
            }
            Self::EpochAhead(epoch) => {
                write!(
                    f,
                    "Can not compute stake distribution {epoch:?} epochs from now."
                )
            }
        }
    }
}

impl std::error::Error for StakePoolDistributionServiceError {}

/// Responsible of synchronizing with Cardano stake distribution.
#[async_trait]
pub trait StakeDistributionService {
    /// Return the stake distribution fot the given epoch.
    async fn get_stake_distribution(
        &self,
        epoch: Epoch,
    ) -> Result<StakeDistribution, Box<StakePoolDistributionServiceError>>;
}

/// Implementation of the stake distribution service.
pub struct MithrilStakeDistributionService {
    /// internal stake persistent layer
    stake_store: Arc<StakePoolStore>,
    /// Chain interaction subsystem
    chain_observer: Arc<dyn ChainObserver>,
}

impl MithrilStakeDistributionService {
    /// Create a new service instance
    pub fn new(stake_store: Arc<StakePoolStore>, chain_observer: Arc<dyn ChainObserver>) -> Self {
        Self {
            stake_store,
            chain_observer,
        }
    }
}

#[async_trait]
impl StakeDistributionService for MithrilStakeDistributionService {
    async fn get_stake_distribution(
        &self,
        epoch: Epoch,
    ) -> Result<StakeDistribution, Box<StakePoolDistributionServiceError>> {
        let current_epoch = self
            .chain_observer
            .get_current_epoch()
            .await
            .map_err(|e| StakePoolDistributionServiceError::technical_susbystem(e.into()))?
            .ok_or_else(|| StakePoolDistributionServiceError::UndefinedCurrentEpoch)?;

        if epoch > current_epoch {
            return Err(
                StakePoolDistributionServiceError::EpochAhead(epoch - current_epoch).into(),
            );
        }
        let stake_distribution = self
            .stake_store
            .get_stakes(epoch)
            .await
            .map_err(|e| StakePoolDistributionServiceError::technical_susbystem(e.into()))?
            .ok_or_else(|| StakePoolDistributionServiceError::Technical {
                message: "The stake distribution should be at least an empty list.".to_string(),
                error: None,
            })?;

        if !stake_distribution.is_empty() {
            Ok(stake_distribution)
        } else if epoch == current_epoch {
            Err(StakePoolDistributionServiceError::NotReadyYet(epoch).into())
        } else {
            Err(StakePoolDistributionServiceError::Pruned(epoch).into())
        }
    }
}

#[cfg(test)]
mod tests {
    use std::sync::Mutex;

    use crate::database::provider::setup_stake_db;

    use super::*;
    use mithril_common::chain_observer::MockChainObserver;
    use sqlite::Connection;

    fn get_service(chain_observer: MockChainObserver) -> MithrilStakeDistributionService {
        let connection = Connection::open(":memory:").unwrap();
        setup_stake_db(&connection).unwrap();
        let stake_store = StakePoolStore::new(Arc::new(Mutex::new(connection)));

        MithrilStakeDistributionService::new(Arc::new(stake_store), Arc::new(chain_observer))
    }

    #[tokio::test]
    async fn get_current_stake_distribution() {
        let mut chain_observer = MockChainObserver::new();
        chain_observer
            .expect_get_current_epoch()
            .return_once(|| Ok(Some(Epoch(3))));
        let service = get_service(chain_observer);
        let expected_stake_distribution: StakeDistribution =
            [("pool2", 1370), ("pool3", 1300), ("pool1", 1250)]
                .into_iter()
                .map(|(pool_id, stake)| (pool_id.to_string(), stake as u64))
                .collect();

        assert_eq!(
            expected_stake_distribution,
            service.get_stake_distribution(Epoch(3)).await.unwrap()
        );
    }

    #[tokio::test]
    async fn get_futur_stake_distribution() {
        let mut chain_observer = MockChainObserver::new();
        chain_observer
            .expect_get_current_epoch()
            .return_once(|| Ok(Some(Epoch(3))));
        let service = get_service(chain_observer);
        let result = service.get_stake_distribution(Epoch(5)).await.unwrap_err();

        assert!(matches!(
            *result,
            StakePoolDistributionServiceError::EpochAhead(Epoch(x)) if x == 2
        ));
    }

    #[tokio::test]
    async fn get_pruned_stake_distribution() {
        let mut chain_observer = MockChainObserver::new();
        chain_observer
            .expect_get_current_epoch()
            .return_once(|| Ok(Some(Epoch(3))));
        let service = get_service(chain_observer);
        let result = service.get_stake_distribution(Epoch(0)).await.unwrap_err();
        eprintln!("result = {result}");

        assert!(matches!(
            *result,
            StakePoolDistributionServiceError::Pruned(Epoch(x)) if x == 0
        ));
    }

    #[tokio::test]
    async fn get_ongoing_stake_distribution() {
        let mut chain_observer = MockChainObserver::new();
        chain_observer
            .expect_get_current_epoch()
            .return_once(|| Ok(Some(Epoch(4))));
        let service = get_service(chain_observer);
        let result = service.get_stake_distribution(Epoch(4)).await.unwrap_err();
        eprintln!("result = {result}");

        assert!(matches!(
            *result,
            StakePoolDistributionServiceError::NotReadyYet(Epoch(x)) if x == 4
        ));
    }
}
