"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[7615],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var i=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,i,a=function(t,e){if(null==t)return{};var r,i,a={},n=Object.keys(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=i.createContext({}),h=function(t){var e=i.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=h(t.components);return i.createElement(l.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=h(r),u=a,m=c["".concat(l,".").concat(u)]||c[u]||g[u]||n;return r?i.createElement(m,o(o({ref:e},p),{},{components:r})):i.createElement(m,o({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:a,o[1]=s;for(var h=2;h<n;h++)o[h]=r[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76142:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var i=r(87462),a=(r(67294),r(3905));const n={sidebar_position:2,sidebar_label:"Mithril aggregator"},o="Mithril aggregator node",s={unversionedId:"mithril/mithril-network/aggregator",id:"mithril/mithril-network/aggregator",title:"Mithril aggregator node",description:"A Mithril aggregator is a trustless node responsible for coordinating the activities of Mithril signer nodes. It gathers the individual signatures from the signer nodes to generate Mithril multi-signatures along with their corresponding certificates. Additionally, the aggregator is in charge of creating and maintaining the archive for the ledger state snapshot.",source:"@site/root/mithril/mithril-network/aggregator.md",sourceDirName:"mithril/mithril-network",slug:"/mithril/mithril-network/aggregator",permalink:"/doc/next/mithril/mithril-network/aggregator",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/mithril/mithril-network/aggregator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Mithril aggregator"},sidebar:"mithrilSideBar",previous:{title:"Architecture",permalink:"/doc/next/mithril/mithril-network/architecture"},next:{title:"Mithril signer",permalink:"/doc/next/mithril/mithril-network/signer"}},l={},h=[{value:"Trustless orchestration",id:"trustless-orchestration",level:2},{value:"Multi-signature and certificate production",id:"multi-signature-and-certificate-production",level:2},{value:"Snapshot artifacts production",id:"snapshot-artifacts-production",level:2},{value:"Distribution of snapshot artifacts and certificates",id:"distribution-of-snapshot-artifacts-and-certificates",level:2},{value:"Under the hood",id:"under-the-hood",level:2}],p={toc:h},c="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mithril-aggregator-node"},"Mithril aggregator node"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A ",(0,a.kt)("strong",{parentName:"p"},"Mithril aggregator")," is a trustless node responsible for coordinating the activities of ",(0,a.kt)("strong",{parentName:"p"},"Mithril signer")," nodes. It gathers the individual signatures from the signer nodes to generate Mithril multi-signatures along with their corresponding certificates. Additionally, the aggregator is in charge of creating and maintaining the archive for the ledger state snapshot.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For more information about the ",(0,a.kt)("strong",{parentName:"p"},"Mithril protocol"),", see the ",(0,a.kt)("a",{parentName:"p",href:"/doc/next/mithril/mithril-protocol/protocol"},"protocol in depth")," overview.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For more information about the ",(0,a.kt)("strong",{parentName:"p"},"Mithril aggregator"),", see the ",(0,a.kt)("a",{parentName:"p",href:"/doc/next/manual/developer-docs/nodes/mithril-aggregator"},"developer manual"),".")))),(0,a.kt)("h2",{id:"trustless-orchestration"},"Trustless orchestration"),(0,a.kt)("p",null,"The primary objective of the Mithril aggregator is to coordinate and synchronize the production of Mithril multi-signatures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a new snapshot is ready to be produced (and certified), the Mithril aggregator generates and broadcasts a fresh ",(0,a.kt)("strong",{parentName:"p"},"beacon")," to inform Mithril signers of the specific time reference to employ in computing the message (or digest) for signing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is also responsible for advertising the ",(0,a.kt)("strong",{parentName:"p"},"verification keys")," (Mithril public keys) of all the registered Mithril signers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The beacon, the current protocol parameters, and the available verification keys are compiled and shared in a ",(0,a.kt)("strong",{parentName:"p"},"pending certificate"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mithril signers can register with it to participate in the signature process later on."))),(0,a.kt)("p",null,"An important point to note is that the Mithril aggregator operates in a trustless manner:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Anyone on the network can run an aggregator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The aggregator doesn't broadcast any ",(0,a.kt)("em",{parentName:"p"},"sensitive")," information, such as the ",(0,a.kt)("em",{parentName:"p"},"message")," requiring signing. The signer nodes handle the direct computation of this information from a ",(0,a.kt)("strong",{parentName:"p"},"Cardano node")," on which they operate."))),(0,a.kt)("p",null,"Additionally, when it comes to aggregating individual signatures into Mithril multi-signatures, the aggregator doesn't need to represent a portion of the total stake within the Cardano network."),(0,a.kt)("h2",{id:"multi-signature-and-certificate-production"},"Multi-signature and certificate production"),(0,a.kt)("p",null,"The Mithril aggregator oversees the creation of Mithril multi-signatures along with their associated certificates for a part and/or the entirety of the ledger state (snapshots):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Previously registered Mithril signers generate individual signatures. These signatures are then sent to the Mithril aggregator for validation and storage.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once the ",(0,a.kt)("strong",{parentName:"p"},"quorum")," of individual signatures has been reached, the Mithril aggregator can generate a multi-signature.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Subsequently, the Mithril aggregator combines the multi-signature with relevant metadata to create a ",(0,a.kt)("strong",{parentName:"p"},"Mithril certificate"),". This certificate will later be utilized by the ",(0,a.kt)("strong",{parentName:"p"},"Mithril client")," to authenticate a snapshot's legitimacy."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more information about the ",(0,a.kt)("strong",{parentName:"p"},"Mithril certificate chain"),", see the ",(0,a.kt)("a",{parentName:"p",href:"/doc/next/mithril/mithril-protocol/certificates"},"certificate chain")," overview.")),(0,a.kt)("h2",{id:"snapshot-artifacts-production"},"Snapshot artifacts production"),(0,a.kt)("p",null,"In its initial version, the Mithril aggregator also handles the production of artifacts associated with the snapshot (such as the snapshot archive, which will be used later by a Mithril client)."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It's important to note that this role is presently undertaken for the sake of convenience. However, it's planned that in the long run, the production of artifacts will be assigned to a distinct ",(0,a.kt)("strong",{parentName:"p"},"Mithril snapshotter")," node.")),(0,a.kt)("p",null,"Once the snapshot artifact is created, it can be synchronized on various locations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On the Mithril aggregator itself"),(0,a.kt)("li",{parentName:"ul"},"On any cloud platform that offers a CDN"),(0,a.kt)("li",{parentName:"ul"},"On a distinct peer-to-peer network, such as ",(0,a.kt)("strong",{parentName:"li"},"IPFS")," or ",(0,a.kt)("strong",{parentName:"li"},"BitTorrent"),".")),(0,a.kt)("p",null,"The Mithril certificate is part of a chain of certificates that are essential for snapshot authenticity verification and is stored in either of the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On the Mithril aggregator itself"),(0,a.kt)("li",{parentName:"ul"},"On any accessible storage, such as cloud storage, for instance.")),(0,a.kt)("h2",{id:"distribution-of-snapshot-artifacts-and-certificates"},"Distribution of snapshot artifacts and certificates"),(0,a.kt)("p",null,"If the Mithril aggregator stores the snapshot artifacts and/or the certificates, it can function as a distribution point for this data to remote clients. The clients can then use the artifacts as needed and verify their authenticity."),(0,a.kt)("h2",{id:"under-the-hood"},"Under the hood"),(0,a.kt)("p",null,"In its initial version, the Mithril aggregator comprises two main components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A REST API that allows Mithril signers to:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Retrieve ",(0,a.kt)("strong",{parentName:"li"},"verification keys")," of other registered signers"),(0,a.kt)("li",{parentName:"ul"},"Register their own verification keys"),(0,a.kt)("li",{parentName:"ul"},"Register their ",(0,a.kt)("strong",{parentName:"li"},"individual signatures"),".")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The Mithril aggregator's ",(0,a.kt)("strong",{parentName:"p"},"REST API")," documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"/aggregator-api"},"here"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A runtime powered by a state machine:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The runtime operates synchronously and is scheduled to execute at regular intervals"),(0,a.kt)("li",{parentName:"ul"},"It encompasses three potential states: ",(0,a.kt)("strong",{parentName:"li"},"IDLE"),", ",(0,a.kt)("strong",{parentName:"li"},"READY"),", and ",(0,a.kt)("strong",{parentName:"li"},"SIGNING")),(0,a.kt)("li",{parentName:"ul"},"The runtime effectively manages state transitions"),(0,a.kt)("li",{parentName:"ul"},"The runtime structure is illustrated in the diagram below:")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Aggregator Runtime",src:r(23204).Z,width:"627",height:"1593"})))}g.isMDXComponent=!0},23204:(t,e,r)=>{r.d(e,{Z:()=>i});const i=r.p+"assets/images/aggregator-runtime-1dbf1f0259f9e9b6b42ef2cf4f3724d5.jpg"}}]);