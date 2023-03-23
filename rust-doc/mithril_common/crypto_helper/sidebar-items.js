window.SIDEBAR_ITEMS = {"constant":[["PROTOCOL_VERSION","The current protocol version"]],"enum":[["EraMarkersVerifierError","[EraMarkersSigner] and [EraMarkersVerifier] related errors."],["ProtocolGenesisError","[ProtocolGenesisSigner] and [ProtocolGenesisVerifier] related errors."]],"fn":[["key_decode_hex","Decode key from hex helper"],["key_encode_hex","Encode key to hex helper"]],"struct":[["EraMarkersSigner","A cryptographic signer that is responsible for signing the EreMarkers"],["EraMarkersVerifier","An era markers verifier that checks the authenticity of era markers stored on the chain"],["OpCert","Parsed Operational Certificate"],["ProtocolGenesisSigner","A protocol Genesis Signer that is responsible for signing the Genesis Certificate"],["ProtocolGenesisVerifier","A protocol Genesis Verifier that is responsible for verifying the Genesis Certificate"],["Sum6KesBytes","We need to create this struct because the design of Sum6Kes takes a reference to a mutable pointer. It is therefore not possible to implement Ser/Deser using serde."]],"trait":[["SerDeShelleyFileFormat","Trait that allows any structure that implements Serialize and DeserializeOwned to be serialized and deserialized following the Shelly json format."]],"type":[["EraMarkersVerifierSecretKey","Alias of Ed25519:SecretKey."],["EraMarkersVerifierSignature","Alias of Ed25519:Signature."],["EraMarkersVerifierVerificationKey","Alias of Ed25519:PublicKey."],["KESPeriod","The KES period that is used to check if the KES keys is expired"],["ProtocolAggregateVerificationKey","Alias of MithrilStm:StmAggrVerificationKey."],["ProtocolAggregationError","Alias of MithrilStm:AggregationError."],["ProtocolClerk","Alias of MithrilStm:StmClerk."],["ProtocolGenesisSecretKey","Alias of Ed25519:SecretKey."],["ProtocolGenesisSignature","Alias of Ed25519:Signature."],["ProtocolGenesisVerificationKey","Alias of Ed25519:PublicKey."],["ProtocolInitializer","Alias of a wrapper of MithrilStm:StmInitializer."],["ProtocolInitializerError","Alias of a wrapper of MithrilCommon:ProtocolInitializerErrorWrapper."],["ProtocolKeyRegistration","Alias of a wrapper of MithrilStm:KeyReg."],["ProtocolLotteryIndex","Alias of MithrilStm::Index."],["ProtocolMultiSignature","Alias of MithrilStm:StmAggrSig."],["ProtocolParameters","Alias of MithrilStm::StmParameters."],["ProtocolPartyId","The id of a mithril party."],["ProtocolRegistrationError","Alias of a wrapper of MithrilCommon:ProtocolRegistrationErrorWrapper."],["ProtocolSigner","Alias of MithrilStm:StmSigner."],["ProtocolSignerVerificationKey","Alias of MithrilStm:StmVerificationKeyPoP."],["ProtocolSignerVerificationKeySignature","Alias of KES:Sum6KesSig."],["ProtocolSingleSignature","Alias of MithrilStm:StmSig."],["ProtocolStake","Alias of MithrilStm:Stake."],["ProtocolStakeDistribution","A list of [Party Id][ProtocolPartyId] associated with its [Stake][ProtocolStake]."],["ProtocolVersion","A protocol version"]]};