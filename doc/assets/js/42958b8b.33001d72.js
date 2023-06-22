"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[1761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(a),m=r,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const o={slug:4,title:"4. Mithril Network Upgrade Strategy\n",authors:[{name:"Mithril Team"}],tags:["Draft"],date:new Date("2023-01-05T00:00:00.000Z")},i=void 0,s={permalink:"/doc/adr/4",source:"@site/adr/004-mithril-network-update-strategy.md",title:"4. Mithril Network Upgrade Strategy\n",description:"Status",date:"2023-01-05T00:00:00.000Z",formattedDate:"January 5, 2023",tags:[{label:"Draft",permalink:"/doc/adr/tags/draft"}],readingTime:3.97,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{slug:"4",title:"4. Mithril Network Upgrade Strategy\n",authors:[{name:"Mithril Team"}],tags:["Draft"],date:"2023-01-05T00:00:00.000Z"},prevItem:{title:"5. Use rfc3339 for date formatting \n",permalink:"/doc/adr/5"},nextItem:{title:"3. Release process and versioning\n",permalink:"/doc/adr/3"}},l={authorsImageUrls:[void 0]},h=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Release Team",id:"release-team",level:3},{value:"Version monitoring",id:"version-monitoring",level:3},{value:"Era Activation Marker",id:"era-activation-marker",level:3},{value:"Behavior Switch",id:"behavior-switch",level:3}],c={toc:h},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Draft")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"When we will run Mithril on mainnet there will be thousands of signers running. Upgrading the version of the nodes has an impact as different versions of API, messages, signature may lead to loss of a significant part of the signers population over one epoch or more. In any case we must prevent a gap in the certificate chain while upgrading critical parts."),(0,r.kt)("p",null,"We need to be able to keep enough of signer nodes and the aggregator able to work together in order to produce at least one certificate per epoch."),(0,r.kt)("p",null,"Examples of such changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"change in the message structure"),(0,r.kt)("li",{parentName:"ul"},"change in the cryptographic algorithm"),(0,r.kt)("li",{parentName:"ul"},"change in communication channels")),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"In order to synchronize all nodes behavior transition, the Release Team will define Eras that start at a given Cardano Epoch and lasts until the next Era begins. When nodes detect an Era change, they switch from old to new behavior hence all transitioning at almost the same time."),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("h3",{id:"release-team"},"Release Team"),(0,r.kt)("p",null,"The release team is the team responsible of releasing new versions of Mithril software. The ",(0,r.kt)("strong",{parentName:"p"},"Release Team")," will be responsible to set the Epoch at which ",(0,r.kt)("strong",{parentName:"p"},"Eras")," change using an ",(0,r.kt)("strong",{parentName:"p"},"Era Activation Marker"),". In order to be able to determine when the new Era will begin, the Release Team has to know what is the share of the total Mithril stake that can run the new behavior. Signer node software versions has to be ",(0,r.kt)("strong",{parentName:"p"},"monitored"),"."),(0,r.kt)("h3",{id:"version-monitoring"},"Version monitoring"),(0,r.kt)("p",null,"The Release Team must be aware of the software version run by the Signer nodes and their associated stake. The version is going to be added to all HTTP headers in inter-node communication. In a first step, the Aggregator nodes will record this information, and provide the mapping of stakes to Signer nodes."),(0,r.kt)("p",null,"This configuration works in the case where there is a centralized Aggregator Node (as it is today). In the future, there may be several Aggregator nodes working in a decentralized manner. This would mean having a separate monitoring service, and also monitor the aggregators node versions."),(0,r.kt)("h3",{id:"era-activation-marker"},"Era Activation Marker"),(0,r.kt)("p",null,"An Era Activation Marker is an information shared among all the nodes. For every upgrade, there are two phases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a first marker is set on the blockchain that just indicates a new Era will start soon and softwares shall be updated."),(0,r.kt)("li",{parentName:"ul"},"a second marker is set that specifies the Epoch when they must switch from old to new behavior.")),(0,r.kt)("p",null,"Every Era Activation Marker will be a transaction in the Cardano blockchain. This implies the nodes must be able to read transactions of the blockchain. Era Activation Markers can be of the same type, the first maker does not hold any Epoch information whereas the second does."),(0,r.kt)("p",null,"Node will check the blockchain for Markers at startup and for every new Epoch. When a node detects a Marker, it will warn the user if it does not support the incoming Era that he must upgrade his node. If the node detects it does not support the current Era, it will stop working with an explicit error message. To ease that operation, Era Activation Marker will be made sortable."),(0,r.kt)("h3",{id:"behavior-switch"},"Behavior Switch"),(0,r.kt)("p",null,"The nodes must be able to switch from one behavior to another when the Era Epoch is reached. This means the software must embed both behaviors. The switch is developed as a one time operation, there is no rollback mechanism available. Once the Epoch is transitioned and the switch has occurred, a new software release can remove the old behavior from the codebase."),(0,r.kt)("mermaid",{value:"sequenceDiagram\n    actor Release Team\n    actor User\n    Release Team--xChain: New Era coming soon.\n    Note over Chain: new Epoch\n    Old Node->>Chain: What is the latest marker?\n    Chain->>Old Node: Era change soon\n    New Node->>Chain: What is the last marker?\n    Chain->>New Node: Era change soon\n    Note over New Node: upgrade\n    Loop every Epoch\n        Note over Chain: new Epoch\n        Old Node->>Chain: What is the last marker?\n        Chain->>Old Node: Era change soon\n        Old Node->>User: \u26a0\ufe0f new Era incoming, please update node\n        New Node->>Chain: What is the last marker?\n        Chain->>New Node: Era change soon\n    end\n    Release Team--xChain: New Era start at Epoch XX.\n    Loop every Epoch\n        Note over Chain: new Epoch\n        Old Node->>Chain: What is the last marker?\n        Chain->>Old Node: Era change at Epoch XX\n        Old Node->>User: \u26a0\ufe0f new Era incoming, please update node\n        New Node->>Chain: What is the last marker?\n        Chain->>New Node: Era change at Epoch XX\n    end\n    Note over Chain: Epoch XX\n    Note over Old Node,New Node: new Era\n    New Node->>Chain: What is the last marker?\n    Chain->>New Node: Era change at Epoch XX\n    Note over New Node: switch behavior\n    Old Node->>Chain: What is the last marker?\n    Chain->>Old Node: Era change at Epoch XX\n    Old Node->>User: \ud83d\udc80 unsupported Era, quit."}))}p.isMDXComponent=!0}}]);