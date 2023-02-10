"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[4322],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>p});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=h(i),c=n,p=d["".concat(s,".").concat(c)]||d[c]||g[c]||a;return i?r.createElement(p,o(o({ref:t},m),{},{components:i})):r.createElement(p,o({ref:t},m))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var h=2;h<a;h++)o[h]=i[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7670:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=i(7462),n=(i(7294),i(3905));const a={title:"Mithril internal stores switch to SQLite.",authors:[{name:"Mithril Team"}],tags:["store","sqlite","breaking-change"]},o=void 0,l={permalink:"/doc/dev-blog/2022/09/14/sqlite-stores",source:"@site/blog/2022-09-14-sqlite-stores.md",title:"Mithril internal stores switch to SQLite.",description:"What is that?",date:"2022-09-14T00:00:00.000Z",formattedDate:"September 14, 2022",tags:[{label:"store",permalink:"/doc/dev-blog/tags/store"},{label:"sqlite",permalink:"/doc/dev-blog/tags/sqlite"},{label:"breaking-change",permalink:"/doc/dev-blog/tags/breaking-change"}],readingTime:3.005,hasTruncateMarker:!1,authors:[{name:"Mithril Team"}],frontMatter:{title:"Mithril internal stores switch to SQLite.",authors:[{name:"Mithril Team"}],tags:["store","sqlite","breaking-change"]},prevItem:{title:"Mithril Keys Certification",permalink:"/doc/dev-blog/2022/10/11/keys-certification-badge"},nextItem:{title:"Stake Distribution retrieval fixed",permalink:"/doc/dev-blog/2022/09/13/stake-distribution-retrieval"}},s={authorsImageUrls:[void 0]},h=[{value:"What is that?",id:"what-is-that",level:2},{value:"How to migrate data from old storage system to SQLite stores?",id:"how-to-migrate-data-from-old-storage-system-to-sqlite-stores",level:2},{value:"Downloading",id:"downloading",level:3},{value:"Compiling",id:"compiling",level:3},{value:"Running the migration",id:"running-the-migration",level:3},{value:"Manual migration process",id:"manual-migration-process",level:3}],m={toc:h},d="wrapper";function g(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-that"},"What is that?"),(0,n.kt)("p",null,"Since almost the beginning of the Mithril project, the software used to rely on a store mechanism to save its different states allowing Signers and Aggregators to resume on correct state when switched on and off. This internal store mechanism used to be a bunch of JSON files saved in a given directory. Even though this does the job it still presents flaws: data are hard to query when debugging especially when crossing data (which signers have participated in this multi-signature?). Also, data are stored in different places which can be a problem when moving these files from one place to another. We also had to imagine what would be a migration scenario in case of a structure change. Switching to a file based SQL database solves these issues."),(0,n.kt)("p",null,"The new release now uses SQLite stores in place of JSON file storage. This means that to continue running a Signer or an Aggregator node it is necessary to migrate from the old storage system to SQLite. This release comes with a tool to perform the migration which should be as straightforward as launching a command line (read below). The migration tool will be available only for a limited time in order to make Mithril beta testers able to migrate their existing data."),(0,n.kt)("h2",{id:"how-to-migrate-data-from-old-storage-system-to-sqlite-stores"},"How to migrate data from old storage system to SQLite stores?"),(0,n.kt)("p",null,"There are 2 ways of getting the new version and the associated migration tool. Either downloading binaries from GitHub or compiling them yourself."),(0,n.kt)("h3",{id:"downloading"},"Downloading"),(0,n.kt)("p",null,"Download the new ",(0,n.kt)("inlineCode",{parentName:"p"},"mithril-signer")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"mithril-signer-migrate")," files from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/nightly"},"nightly builds page"),". Make them executable:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$> chmod +x mithril-signer*\n$> ls -1F mithril-signer*\nmithril-signer*\nmithril-signer-migrate*\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"note"),": the suffix ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," appended to the the entries output above indicates the file is executable. If it is not present, ensure the ",(0,n.kt)("inlineCode",{parentName:"p"},"chmod")," command does not produce any error."),(0,n.kt)("h3",{id:"compiling"},"Compiling"),(0,n.kt)("p",null,"If you used to compile your node as stated in the ",(0,n.kt)("a",{parentName:"p",href:"https://mithril.network/doc/manual/getting-started/run-signer-node"},"guide"),", you have to compile the migration tool as well:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$> cd mithril-signer\n$> cargo build --all-targets --release\n  Compiling mithril-signer v0.1.0 (/home/somebody/shared/mithril/mithril-signer)\n    Finished release [optimized] target(s) in 4.56s\n$> ls -1F ../target/release/mithril-signer*\n../target/release/mithril-signer*\n../target/release/mithril-signer.d\n../target/release/mithril-signer-migrate*\n../target/release/mithril-signer-migrate.d\n")),(0,n.kt)("h3",{id:"running-the-migration"},"Running the migration"),(0,n.kt)("p",null,"The first step is to stop the running Mithril node if any. The ",(0,n.kt)("inlineCode",{parentName:"p"},"mithril-signer-migrate")," executable can perform the migration automatically once you know where your actual JSON files are located. Have a look in your configuration file (default ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt/mithril/mithril-signer/service.env"),"), check the value associated with the ",(0,n.kt)("inlineCode",{parentName:"p"},"DATA_STORES_DIRECTORY")," key (default to ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt/mithril/mithril-signer/stores"),") and copy the path indicated here. Copy this path after the ",(0,n.kt)("inlineCode",{parentName:"p"},"--db-dir")," option on the following command line:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$> ./mithril-signer-migrate automatic --db-dir /paste/the/data/stores/directory/here\nMithril Aggregator JSON \u2192 SQLite migration tool.\nMigrating protocol_initializer_store data\u2026\nOK \u2713\nMigrating stake_store data\u2026\nOK \u2713\n")),(0,n.kt)("p",null,"At the end of this command, a file ",(0,n.kt)("inlineCode",{parentName:"p"},"signer.sqlite3")," (or ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregator.sqlite3")," if you run an Aggregator) should be present in the specified base directory. "),(0,n.kt)("p",null,"That should be enough, launch your upgraded mithril node."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," The migration executable does not remove the old JSON files from the disk. "),(0,n.kt)("h3",{id:"manual-migration-process"},"Manual migration process"),(0,n.kt)("p",null,"The executable also provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"manual")," switch for migrating Mithril JSON store directories placed in custom directories. This is mainly intended for developers who work on tweaked environments. Each internal store has its own data structure. In order to correctly migrate and process data, the type of the store has to be given on the command line."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$> ./mithril-signer-migrate manual --help\n")),(0,n.kt)("p",null,"The command above should give you all informations needed to run a custom store migration. "),(0,n.kt)("p",null,"Feel free to reach out to us on the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/5kaErDKDRq"},"Discord channel")," for questions and/or help."))}g.isMDXComponent=!0}}]);