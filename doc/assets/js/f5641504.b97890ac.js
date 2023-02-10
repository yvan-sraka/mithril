"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[8665],{3905:(t,e,r)=>{r.d(e,{Zo:()=>h,kt:()=>u});var a=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},h=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},g="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),g=p(r),c=i,u=g["".concat(l,".").concat(c)]||g[c]||m[c]||n;return r?a.createElement(u,o(o({ref:e},h),{},{components:r})):a.createElement(u,o({ref:e},h))}));function u(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,o=new Array(n);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[g]="string"==typeof t?t:i,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4694:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:2,sidebar_label:"Mithril Aggregator"},o="Mithril Aggregator Node",s={unversionedId:"mithril/mithril-network/aggregator",id:"version-maintained/mithril/mithril-network/aggregator",title:"Mithril Aggregator Node",description:"Welcome to the Mithril Aggregator Node guide!",source:"@site/versioned_docs/version-maintained/mithril/mithril-network/aggregator.md",sourceDirName:"mithril/mithril-network",slug:"/mithril/mithril-network/aggregator",permalink:"/doc/mithril/mithril-network/aggregator",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/mithril/mithril-network/aggregator.md",tags:[],version:"maintained",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Mithril Aggregator"},sidebar:"mithrilSideBar",previous:{title:"Architecture",permalink:"/doc/mithril/mithril-network/architecture"},next:{title:"Mithril Signer",permalink:"/doc/mithril/mithril-network/signer"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Trustless Orchestration",id:"trustless-orchestration",level:2},{value:"Multi Signature and Certificate Production",id:"multi-signature-and-certificate-production",level:2},{value:"Snapshot Artifacts Production",id:"snapshot-artifacts-production",level:2},{value:"Snapshot Artifacts and Certificate Distribution",id:"snapshot-artifacts-and-certificate-distribution",level:2},{value:"Under the hood",id:"under-the-hood",level:2}],h={toc:p},g="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(g,(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mithril-aggregator-node"},"Mithril Aggregator Node"),(0,i.kt)("p",null,"Welcome to the Mithril Aggregator Node guide!"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," is a trustless node that orchestrates the work of the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Signer")," nodes and that gathers their individual signatures to produce ",(0,i.kt)("strong",{parentName:"p"},"Mithril")," multi signatures and their associated certificates. It is also in charge of creating and storing the ledger state snapshot archive.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For more information about the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Protocol"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-protocol/protocol"},"Protocol in depth")," page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For more information about the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/doc/manual/developer-docs/nodes/mithril-aggregator"},"Developer Documentation")," page.")))),(0,i.kt)("h2",{id:"trustless-orchestration"},"Trustless Orchestration"),(0,i.kt)("p",null,"The primary goal of the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," is to orchestrate and synchronize the ",(0,i.kt)("strong",{parentName:"p"},"Mithril multi signatures")," production:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When a new snapshot is ready to be produced (and certified), the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," creates and broadcasts a new ",(0,i.kt)("strong",{parentName:"p"},"Beacon")," that indicates to the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Signers")," which point in time they should use to compute the message (or digest) to sign.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is also responsible for advertising the ",(0,i.kt)("strong",{parentName:"p"},"Verification Keys")," (Mithril public keys) of all the registered ",(0,i.kt)("strong",{parentName:"p"},"Mithril Signers"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Beacon"),", the current ",(0,i.kt)("strong",{parentName:"p"},"Protocol Parameters")," and the available ",(0,i.kt)("strong",{parentName:"p"},"Verification Keys")," are gathered and advertised in a ",(0,i.kt)("strong",{parentName:"p"},"Pending Certificate"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Mithril Signers")," can register with it, in order to be able to later participate in the signature process."))),(0,i.kt)("p",null,"An important fact is that the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," is trustless:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Anyone could run an aggregator on the network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It does not broadcast any ",(0,i.kt)("em",{parentName:"p"},"sensitive")," information (such as the ",(0,i.kt)("em",{parentName:"p"},"message")," that needs to be signed). The signer nodes are responsible for computing these information directy from a ",(0,i.kt)("strong",{parentName:"p"},"Cardano Node")," on top of which they run."))),(0,i.kt)("p",null,"Also, in order to aggregate single signatures into ",(0,i.kt)("strong",{parentName:"p"},"Mithril multi signatures"),", the *",(0,i.kt)("em",{parentName:"p"},"Mithril Aggregator")," does not need to represent any share of the total stakes of the ",(0,i.kt)("strong",{parentName:"p"},"Cardano Network"),"."),(0,i.kt)("h2",{id:"multi-signature-and-certificate-production"},"Multi Signature and Certificate Production"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," is in charge of producing the ",(0,i.kt)("strong",{parentName:"p"},"Mithril multi signatures")," and their associated certificates for a part and/or all of the ledger state (the snapshots):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The previously registered ",(0,i.kt)("strong",{parentName:"p"},"Mithril Signers")," are able to produce individual signatures. They send these individual signatures to the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," that checks their validity and then store them.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once the ",(0,i.kt)("strong",{parentName:"p"},"quorum")," of individual signatures has been reached, the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," is able to produce a multi signature.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," combines the multi signature and some metadata into a ",(0,i.kt)("strong",{parentName:"p"},"Mithril Certificate")," that will be later used by the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Client")," to verify the authenticity of a snapshot."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For more information about the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Certificate Chain"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/doc/mithril/mithril-protocol/certificates"},"Certificate Chain")," page.")),(0,i.kt)("h2",{id:"snapshot-artifacts-production"},"Snapshot Artifacts Production"),(0,i.kt)("p",null,"In its first version, the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," also takes care of producing the artifacts associated to the snapshot (e.g. the snapshot archive that will be later used by a ",(0,i.kt)("strong",{parentName:"p"},"Mithril Client"),")."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is worthy to mention that this role is endorsed only for convenience at the moment, and that on the long run the artifacts production will be delegated to a separate ",(0,i.kt)("strong",{parentName:"p"},"Mithril Snapshotter")," node.")),(0,i.kt)("p",null,"Once the snapshot artifact is created, it can be synchronized anywhere:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On any cloud platform that provides a CDN.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On a separate peer to peer network (such as ",(0,i.kt)("strong",{parentName:"p"},"IPFS")," or ",(0,i.kt)("strong",{parentName:"p"},"Bittorrent"),")."))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Mithril Certificate")," is part of a chain of certificates that are involved in the snapshot authenticity verification and is stored:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," itself")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Or on any accessible storage (as a cloud storage for example)"))),(0,i.kt)("h2",{id:"snapshot-artifacts-and-certificate-distribution"},"Snapshot Artifacts and Certificate Distribution"),(0,i.kt)("p",null,"In case the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," stores the snapshot artifacts and/or the certificates, it can be used to distribute these data to remote clients. These clients can use them according to their need and verify that are genuine."),(0,i.kt)("h2",{id:"under-the-hood"},"Under the hood"),(0,i.kt)("p",null,"In its first version, the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," is composed of two main components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A REST API, that enables the ",(0,i.kt)("strong",{parentName:"li"},"Mithril Signers")," to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Retrieve other registered signers ",(0,i.kt)("strong",{parentName:"li"},"Verification Keys"),"."),(0,i.kt)("li",{parentName:"ul"},"Register their ",(0,i.kt)("strong",{parentName:"li"},"Verification Keys"),"."),(0,i.kt)("li",{parentName:"ul"},"Register their ",(0,i.kt)("strong",{parentName:"li"},"Individual Signatures"),".")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The documentation of the REST API of the ",(0,i.kt)("strong",{parentName:"p"},"Mithril Aggregator")," is available ",(0,i.kt)("a",{parentName:"p",href:"/aggregator-api"},"here"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A runtime that is powered by a state machine:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The runtime is synchronous and is scheduled to execute at regular intervals."),(0,i.kt)("li",{parentName:"ul"},"There are three possible states: ",(0,i.kt)("strong",{parentName:"li"},"IDLE")," , ",(0,i.kt)("strong",{parentName:"li"},"READY")," and ",(0,i.kt)("strong",{parentName:"li"},"SIGNING"),"."),(0,i.kt)("li",{parentName:"ul"},"The runtime handles state transitions."),(0,i.kt)("li",{parentName:"ul"},"The runtime is summarized in the diagram below:")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Aggregator Runtime",src:r(1664).Z,width:"543",height:"1838"})))}m.isMDXComponent=!0},1664:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/aggregator-runtime-ae091bd6ad5578b503fffd3a0b704148.jpg"}}]);