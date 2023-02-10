"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[4687],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(r),d=n,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(y,o(o({ref:e},u),{},{components:r})):a.createElement(y,o({ref:e},u))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5084:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3,sidebar_label:"Simulation"},o="Mithril Protocol Simulation",l={unversionedId:"mithril/mithril-protocol/simulation",id:"mithril/mithril-protocol/simulation",title:"Mithril Protocol Simulation",description:"Thanks to this demo you will get a better understanding of the Mithril Protocol*. You will hopefully visualize how the participants interact to create a multi signature and what's the impact of the protocol parameters.",source:"@site/root/mithril/mithril-protocol/simulation.md",sourceDirName:"mithril/mithril-protocol",slug:"/mithril/mithril-protocol/simulation",permalink:"/doc/next/mithril/mithril-protocol/simulation",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/mithril/mithril-protocol/simulation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Simulation"},sidebar:"mithrilSideBar",previous:{title:"Certificate Chain in depth",permalink:"/doc/next/mithril/mithril-protocol/certificates"},next:{title:"Mithril Network",permalink:"/doc/next/category/mithril-network"}},s={},p=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Download source",id:"download-source",level:2},{value:"Build Mithril Protocol demo binary",id:"build-mithril-protocol-demo-binary",level:2},{value:"Verify build",id:"verify-build",level:2},{value:"Run the simulation",id:"run-the-simulation",level:2},{value:"Case 1: Produce a multi signature",id:"case-1-produce-a-multi-signature",level:3},{value:"Case 2: Does not produce a multi signature",id:"case-2-does-not-produce-a-multi-signature",level:3}],u={toc:p},m="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mithril-protocol-simulation"},"Mithril Protocol Simulation"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Thanks to this demo you will get a better understanding of the ",(0,n.kt)("strong",{parentName:"p"},"Mithril Protocol"),". You will hopefully visualize how the participants interact to create a multi signature and what's the impact of the protocol parameters.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This simulation is ran by a CLI that you will build and run, and that will ultimately generate ",(0,n.kt)("strong",{parentName:"p"},"real")," Mithril multi signatures!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the purpose of reproducibility of the results, the simulation uses a deterministic source of randomness.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"During the simulation some artifacts will be written to an ",(0,n.kt)("inlineCode",{parentName:"p"},"artifacts")," folder, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"verification keys"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"individual signatures")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"multi signatures"),".")))),(0,n.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Linux (preferred) or a macOS computer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"correctly configured")," Rust toolchain (latest stable version)."))),(0,n.kt)("h2",{id:"download-source"},"Download source"),(0,n.kt)("p",null,"Download from GitHub (HTTPS)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/input-output-hk/mithril.git\n")),(0,n.kt)("p",null,"Or (SSH)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:input-output-hk/mithril.git\n")),(0,n.kt)("h2",{id:"build-mithril-protocol-demo-binary"},"Build Mithril Protocol demo binary"),(0,n.kt)("p",null,"Change directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd mithril/demo/protocol-demo\n")),(0,n.kt)("p",null,"Run tests (Optional)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,n.kt)("p",null,"Build executable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,n.kt)("h2",{id:"verify-build"},"Verify build"),(0,n.kt)("p",null,"Check that the Mithril Client binary is working fine by running its help"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./mithrildemo -h\n")),(0,n.kt)("p",null,"You should see"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mithrildemo \nSimple demonstration of the Mithril protocol\n\nUSAGE:\n    mithrildemo [OPTIONS]\n\nOPTIONS:\n    -h, --help                     Print help information\n    -k, --k <K>                    Quorum parameter [default: 5]\n    -m, --m <M>                    Security parameter, upper bound on indices [default: 200]\n        --nmessages <NMESSAGES>    Number of messages to sign [default: 1]\n        --nparties <NPARTIES>      Number of parties [default: 5]\n        --phi-f <PHI_F>            f in phi(w) = 1 - (1 - f)^w, where w is the stake of a\n                                   participant [default: 0.2]\n")),(0,n.kt)("h2",{id:"run-the-simulation"},"Run the simulation"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"A friendly reminder about the protocol parameters:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"k"),": the ",(0,n.kt)("inlineCode",{parentName:"li"},"Quorum")," parameter represents the minimum number of individual signatures (gathered from multiple participants) required to be aggregated in a multi signature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"m"),": the ",(0,n.kt)("inlineCode",{parentName:"li"},"Security")," parameter represents the total number of ",(0,n.kt)("inlineCode",{parentName:"li"},"lotteries")," in which each participant can participate in order to individually sign the message."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"phi-f"),": the parameter on which depends the probability of a particpant to win a ",(0,n.kt)("inlineCode",{parentName:"li"},"lottery"),". It variates between ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0")," (less chance) and ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0")," (more chance)."))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"security level")," of the protocol is highly dependent on the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"protocol parameters"),"."),(0,n.kt)("p",{parentName:"admonition"},"Therefore they will be carefully selected by the Mithril cryptographers and researchers in order to guarantee that only legit stakeholders representing a sufficient threshold of the total stakes can combine their individual signatures in a valid multi signature.")),(0,n.kt)("h3",{id:"case-1-produce-a-multi-signature"},"Case 1: Produce a multi signature"),(0,n.kt)("p",null,"Run the simulation wih ",(0,n.kt)("inlineCode",{parentName:"p"},"5")," participants"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./mithrildemo -k 5 -m 50 --phi-f 0.65 --nparties 5\n")),(0,n.kt)("p",null,"The simulation should succeed and produce (or aggregate) a multi signature!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'>> Launch Mithril protocol demonstrator with configuration: \nConfig {\n    m: 50,\n    k: 5,\n    phi_f: 0.65,\n    nparties: 5,\n    nmessages: 1,\n}\n\n>> Protocol establish phase\nParty #0: party created with 826 stakes\nParty #1: party created with 741 stakes\nParty #2: party created with 144 stakes\nParty #3: party created with 734 stakes\nParty #4: party created with 41 stakes\nProtocol established to StmParameters { m: 50, k: 5, phi_f: 0.65 }\n\n>> Protocol initialize phase:\nVerifier: verifier created\nVerifier: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #0: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #1: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #2: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #3: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nParty #4: protocol params updated to StmParameters { m: 50, k: 5, phi_f: 0.65 }\nVerifier: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #0: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #1: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #2: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #3: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #4: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nArtifacts written to artifacts/parties-keys.json\n\n>> Protocol issue certificates phase:\nMessage #0 to sign: [119, 36, 224, 63, 184, 216, 74, 55, 106, 67, 184, 244, 21, 24, 161, 28]\nParty #0: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #0: lottery #2 won\nParty #0: lottery #3 won\nParty #0: lottery #8 won\nParty #0: lottery #13 won\nParty #0: lottery #16 won\nParty #0: lottery #17 won\nParty #0: lottery #19 won\nParty #0: lottery #23 won\nParty #0: lottery #25 won\nParty #0: lottery #28 won\nParty #0: lottery #29 won\nParty #0: lottery #31 won\nParty #0: lottery #42 won\nParty #0: lottery #43 won\nParty #0: lottery #46 won\nParty #1: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #1: lottery #2 won\nParty #1: lottery #3 won\nParty #1: lottery #8 won\nParty #1: lottery #13 won\nParty #1: lottery #16 won\nParty #1: lottery #17 won\nParty #1: lottery #19 won\nParty #1: lottery #23 won\nParty #1: lottery #25 won\nParty #1: lottery #29 won\nParty #1: lottery #31 won\nParty #1: lottery #42 won\nParty #1: lottery #43 won\nParty #1: lottery #46 won\nParty #2: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #2: lottery #19 won\nParty #2: lottery #43 won\nParty #2: lottery #46 won\nParty #3: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #3: lottery #2 won\nParty #3: lottery #3 won\nParty #3: lottery #8 won\nParty #3: lottery #13 won\nParty #3: lottery #16 won\nParty #3: lottery #17 won\nParty #3: lottery #19 won\nParty #3: lottery #23 won\nParty #3: lottery #25 won\nParty #3: lottery #29 won\nParty #3: lottery #31 won\nParty #3: lottery #42 won\nParty #3: lottery #43 won\nParty #3: lottery #46 won\nParty #4: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #4: lottery #19 won\nParty #0: aggregate signature computed\nParty #1: aggregate signature computed\nParty #2: aggregate signature computed\nParty #3: aggregate signature computed\nParty #4: aggregate signature computed\nArtifacts written to artifacts/single-signatures.json\nArtifacts written to artifacts/multi-signatures.json\n\n>> Protocol verify certificates phase:\nMessage #0 to verify: 7724e03fb8d84a376a43b8f41518a11c\nParty #0: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nParty #1: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nParty #2: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nParty #3: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nParty #4: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\nVerifier: aggregate signature successfully verified for 7724e03fb8d84a376a43b8f41518a11c!\n\n>> Congrats, protocol terminated with success!\n')),(0,n.kt)("h3",{id:"case-2-does-not-produce-a-multi-signature"},"Case 2: Does not produce a multi signature"),(0,n.kt)("p",null,"Run the simulation wih ",(0,n.kt)("inlineCode",{parentName:"p"},"5")," participants"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./mithrildemo -k 5 -m 5 --phi-f 0.25 --nparties 5\n")),(0,n.kt)("p",null,"The simulation should fail and not produce (or aggregate) any multi signature!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'>> Launch Mithril protocol demonstrator with configuration: \nConfig {\n    m: 5,\n    k: 5,\n    phi_f: 0.25,\n    nparties: 5,\n    nmessages: 1,\n}\n\n>> Protocol establish phase\nParty #0: party created with 826 stakes\nParty #1: party created with 741 stakes\nParty #2: party created with 144 stakes\nParty #3: party created with 734 stakes\nParty #4: party created with 41 stakes\nProtocol established to StmParameters { m: 5, k: 5, phi_f: 0.25 }\n\n>> Protocol initialize phase:\nVerifier: verifier created\nVerifier: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #0: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #1: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #2: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #3: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nParty #4: protocol params updated to StmParameters { m: 5, k: 5, phi_f: 0.25 }\nVerifier: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #0: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #1: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #2: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #3: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nParty #4: protocol keys registration from [("0", 826), ("1", 741), ("2", 144), ("3", 734), ("4", 41)]\nArtifacts written to artifacts/parties-keys.json\n\n>> Protocol issue certificates phase:\nMessage #0 to sign: [119, 36, 224, 63, 184, 216, 74, 55, 106, 67, 184, 244, 21, 24, 161, 28]\nParty #0: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #1: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #2: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #3: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #4: sign message 7724e03fb8d84a376a43b8f41518a11c\nParty #0: not enough signatures to compute aggregate\nParty #1: not enough signatures to compute aggregate\nParty #2: not enough signatures to compute aggregate\nParty #3: not enough signatures to compute aggregate\nParty #4: not enough signatures to compute aggregate\nArtifacts written to artifacts/single-signatures.json\nArtifacts written to artifacts/multi-signatures.json\n\n>> Protocol verify certificates phase:\nMessage #0 to verify: 7724e03fb8d84a376a43b8f41518a11c\nParty #0: aggregate signature not found 7724e03fb8d84a376a43b8f41518a11c\n\n>> Certificate verification failed: aggregate signature not found\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information about the ",(0,n.kt)("strong",{parentName:"p"},"Mithril Protocol"),", please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/doc/next/mithril/mithril-protocol/protocol"},"About Mithril")," section.")))}c.isMDXComponent=!0}}]);