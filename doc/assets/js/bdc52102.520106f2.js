"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[8159,9531,2379],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,g=k["".concat(d,".").concat(s)]||k[s]||u[s]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[k]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1494:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={unlisted:!0,hide_title:!0,hide_table_of_contents:!0},l=void 0,o={unversionedId:"compiled-binaries",id:"compiled-binaries",title:"compiled-binaries",description:"Download compiled binary",source:"@site/root/compiled-binaries.md",sourceDirName:".",slug:"/compiled-binaries",permalink:"/doc/next/compiled-binaries",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/compiled-binaries.md",tags:[],version:"current",frontMatter:{unlisted:!0,hide_title:!0,hide_table_of_contents:!0}},d={},p=[{value:"Download compiled binary",id:"download-compiled-binary",level:2}],m={toc:p},k="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"download-compiled-binary"},"Download compiled binary"),(0,r.kt)("p",null,"Each Release / Pre-Release distribution comes with pre compiled binaries ready to use or wrapped in a debian package."),(0,r.kt)("p",null,"You can download them from the Release / Pre-Release distribution page that depends on the Mithril Network you are targeting."),(0,r.kt)("p",null,"These links are available in the ",(0,r.kt)("strong",{parentName:"p"},"Build From")," column of the above ",(0,r.kt)("strong",{parentName:"p"},"Mithril Networks")," table."))}u.isMDXComponent=!0},6342:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>k});var a=n(7462),r=(n(7294),n(3905)),i=n(1900),l=n(1494);const o={sidebar_position:2},d="Mithril Signer Node",p={unversionedId:"manual/developer-docs/nodes/mithril-signer",id:"manual/developer-docs/nodes/mithril-signer",title:"Mithril Signer Node",description:"This is the node of the Mithril Network responsible for producing individual signatures that are collected and aggregated by the Mithril Aggregator.",source:"@site/root/manual/developer-docs/nodes/mithril-signer.md",sourceDirName:"manual/developer-docs/nodes",slug:"/manual/developer-docs/nodes/mithril-signer",permalink:"/doc/next/manual/developer-docs/nodes/mithril-signer",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/manual/developer-docs/nodes/mithril-signer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSideBar",previous:{title:"Mithril Aggregator Node",permalink:"/doc/next/manual/developer-docs/nodes/mithril-aggregator"},next:{title:"Mithril Client Node",permalink:"/doc/next/manual/developer-docs/nodes/mithril-client"}},m={},k=[{value:"Resources",id:"resources",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Download source",id:"download-source",level:2},{value:"Development test and build",id:"development-test-and-build",level:2},{value:"Release build and run binary",id:"release-build-and-run-binary",level:2},{value:"Build and run Docker container",id:"build-and-run-docker-container",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:2}],u={toc:k},s="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mithril-signer-node"},"Mithril Signer Node"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is the node of the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Network")," responsible for producing individual signatures that are collected and aggregated by the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Aggregator"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more information about the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Network"),", please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/doc/next/mithril/mithril-network/architecture"},"Architecture")," page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more information about the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Signer"),", please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/doc/next/mithril/mithril-network/signer"},"Signer Node")," page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checkout the ",(0,r.kt)("a",{parentName:"p",href:"/doc/next/manual/getting-started/run-mithril-devnet"},(0,r.kt)("inlineCode",{parentName:"a"},"Run a Mithril Signer node (SPO)"))," guide.")))),(0,r.kt)("admonition",{title:"Mithril Networks",type:"note"},(0,r.kt)(i.default,{mdxType:"NetworksMatrix"})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Node"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Source Repository"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Rust Documentation"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Docker Packages"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Mithril Signer")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/input-output-hk/mithril/tree/main/mithril-signer"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://mithril.network/mithril-signer/doc/mithril_signer/index.html"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/input-output-hk/mithril/pkgs/container/mithril-signer"},"\u2197\ufe0f"))))),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"correctly configured")," Rust toolchain (latest stable version)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install OpenSSL development libraries, for example on Ubuntu/Debian/Mint run ",(0,r.kt)("inlineCode",{parentName:"p"},"apt install libssl-dev"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure SQLite3 library is installed on your system and its version is at least ",(0,r.kt)("inlineCode",{parentName:"p"},"3.35")," (released Apr. 2021) on Debian/Ubuntu: ",(0,r.kt)("inlineCode",{parentName:"p"},"apt install libsqlite3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite3 --version"),"."))),(0,r.kt)("h2",{id:"download-source"},"Download source"),(0,r.kt)("p",null,"Download from GitHub (HTTPS)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/input-output-hk/mithril.git\n")),(0,r.kt)("p",null,"Or (SSH)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:input-output-hk/mithril.git\n")),(0,r.kt)("p",null,"Switch to build branch / tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# **YOUR_BUILD_BRANCH_OR_TAG** depends on the Mithril network you target, \n# please refer to the **Build From** column of the above **Mithril Networks** table\ngit switch **YOUR_BUILD_BRANCH_OR_TAG**\n")),(0,r.kt)("p",null,"Change directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd mithril/mithril-signer\n")),(0,r.kt)("h2",{id:"development-test-and-build"},"Development test and build"),(0,r.kt)("p",null,"Run tests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,r.kt)("p",null,"Create the help menu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make help\n")),(0,r.kt)("p",null,"Generate the Rust documentation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make doc\n")),(0,r.kt)("p",null,"Run in debug mode with default configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make debug\n")),(0,r.kt)("h2",{id:"release-build-and-run-binary"},"Release build and run binary"),(0,r.kt)("p",null,"Build and run in release with default configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make run\n")),(0,r.kt)("p",null,"Or, build only in release"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,r.kt)("p",null,"Display the help menu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mithril-signer --help\n")),(0,r.kt)("p",null,"You should see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"An implementation of a Mithril Signer\n\nUsage: mithril-signer [OPTIONS]\n\nOptions:\n  -r, --run-mode <RUN_MODE>\n          Run Mode [env: RUN_MODE=] [default: dev]\n  -v, --verbose...\n          Verbosity level, add more v to increase\n  -c, --configuration-dir <CONFIGURATION_DIR>\n          Directory where the configuration file is located [default: ./config]\n      --disable-digests-cache\n          Disable immutables digests cache\n      --reset-digests-cache\n          If set the existing immutables digests cache will be reset\n  -h, --help\n          Print help information (use `--help` for more detail)\n  -V, --version\n          Print version information\n")),(0,r.kt)("p",null,"Run in release with default configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mithril-signer\n")),(0,r.kt)("p",null,"Run in release with a specific mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mithril-signer -r preview\n")),(0,r.kt)("p",null,"Run in release with a custom configuration via env vars"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK=**YOUR_CARDANO_NETWORK** AGGREGATOR_ENDPOINT=**YOUR_AGGREGATOR_ENDPOINT** ./mithril-signer\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to dig deeper, you can get access to several level of logs from the Mithril Signer:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"-v")," for some logs (WARN)"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"-vv")," for more logs (INFO)"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"-vvv")," for even more logs (DEBUG)"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"-vvvv")," for all logs (TRACE)"))),(0,r.kt)(l.default,{mdxType:"CompiledBinaries"}),(0,r.kt)("h2",{id:"build-and-run-docker-container"},"Build and run Docker container"),(0,r.kt)("p",null,"Build a local Docker image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-build\n")),(0,r.kt)("p",null,"Run a local Docker container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-run\n")),(0,r.kt)("h2",{id:"configuration-parameters"},"Configuration parameters"),(0,r.kt)("p",null,"The configuration parameters are set either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In a configuration file (depending on the ",(0,r.kt)("inlineCode",{parentName:"li"},"--run-mode")," parameter). If runtime mode is ",(0,r.kt)("inlineCode",{parentName:"li"},"testnet")," the file is located in ",(0,r.kt)("inlineCode",{parentName:"li"},"./conf/testnet.json"),"."),(0,r.kt)("li",{parentName:"ul"},"The value can be overridden by an environment variable whose name is the parameter name uppercased.")),(0,r.kt)("p",null,"Here is a list of the available parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Command Line (long)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Command Line (short)"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbose")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-v")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VERBOSE")),(0,r.kt)("td",{parentName:"tr",align:null},"Verbosity level"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Parsed from number of occurrences: ",(0,r.kt)("inlineCode",{parentName:"td"},"-v")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"Warning"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"-vv")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"Info"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"-vvv")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"Debug")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"-vvvv")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"Trace")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"run_mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--run-mode")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-r")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RUN_MODE")),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dev")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"db_directory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--db-directory")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_DIRECTORY")),(0,r.kt)("td",{parentName:"tr",align:null},"Directory to snapshot from the ",(0,r.kt)("strong",{parentName:"td"},"Cardano Node")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/db")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"network")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NETWORK")),(0,r.kt)("td",{parentName:"tr",align:null},"Cardano network"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testnet")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"mainnet")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"devnet")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"network_magic")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NETWORK_MAGIC")),(0,r.kt)("td",{parentName:"tr",align:null},"Cardano Network Magic number (for ",(0,r.kt)("inlineCode",{parentName:"td"},"testnet")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"devnet"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1097911063")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"42")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"party_id")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PARTY_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Party Id of the signer, usually the ",(0,r.kt)("inlineCode",{parentName:"td"},"Pool Id")," of the SPO"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pool1pxaqe80sqpde7902er5kf6v0c7y0sv6d5g676766v2h829fvs3x")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"run_interval")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RUN_INTERVAL")),(0,r.kt)("td",{parentName:"tr",align:null},"Interval between two runtime cycles in ms"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60000")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aggregator_endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AGGREGATOR_ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregator node endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://aggregator.pre-release-preview.api.mithril.network/aggregator")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data_stores_directory")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATA_STORES_DIRECTORY")),(0,r.kt)("td",{parentName:"tr",align:null},"Directory to store signer data (Stakes, Protocol initializers, ...)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./mithril-signer/stores")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"store_retention_limit")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STORE_RETENTION_LIMIT")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of records in stores. If not set, no limit is set."),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kes_secret_key_path")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KES_SECRET_KEY_PATH")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Cardano KES Secret Key")," file. Mandatory in ",(0,r.kt)("inlineCode",{parentName:"td"},"Pool Id Certification Mode")," where the owner is verified (experimental, soon to be stable & preferred mode)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"operational_certificate_path")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OPERATIONAL_CERTIFICATE_PATH")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Cardano Operational Certificate")," file. Mandatory in ",(0,r.kt)("inlineCode",{parentName:"td"},"Pool Id Certification Mode")," where the owner is verified (experimental, soon to be stable & preferred mode)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")))))}g.isMDXComponent=!0},1900:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={unlisted:!0,hide_title:!0,hide_table_of_contents:!0},l=void 0,o={unversionedId:"networks-matrix",id:"networks-matrix",title:"networks-matrix",description:"Here is an up to date list of all the Mithril Networks, their configurations and their status:",source:"@site/root/networks-matrix.md",sourceDirName:".",slug:"/networks-matrix",permalink:"/doc/next/networks-matrix",draft:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/root/networks-matrix.md",tags:[],version:"current",frontMatter:{unlisted:!0,hide_title:!0,hide_table_of_contents:!0}},d={},p=[],m={toc:p},k="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is an up to date list of all the ",(0,r.kt)("strong",{parentName:"p"},"Mithril Networks"),", their configurations and their status:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Last update: 01/12/2023")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mithril Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Cardano Network"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Magic Id"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Supported"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Aggregator Endpoint"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Genesis Verification Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Build From"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release-mainnet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mainnet")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Not supported yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release-preprod")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preprod")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://aggregator.release-preprod.api.mithril.network/aggregator",title:"https://aggregator.release-preprod.api.mithril.network/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey",title:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udfe2",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Latest Stable Release")," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/input-output-hk/mithril/releases/latest"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stable Release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pre-release-preview")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preview")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://aggregator.pre-release-preview.api.mithril.network/aggregator",title:"https://aggregator.pre-release-preview.api.mithril.network/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey",title:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udfe0",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Latest Stable Pre-Release")," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/input-output-hk/mithril/releases?q=pre-release"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unstable Pre-Release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testing-preview")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preview")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://aggregator.testing-preview.api.mithril.network/aggregator",title:"https://aggregator.testing-preview.api.mithril.network/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey",title:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udd34",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Main Branch")," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/input-output-hk/mithril/tree/main"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unstable Testing (devs only)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dev-devnet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devnet")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"42")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8080/aggregator",title:"http://localhost:8080/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Any Branch / Release")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Supported on the ",(0,r.kt)("inlineCode",{parentName:"td"},"devnet")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testnet")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1097911063")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://aggregator.api.mithril.network/aggregator",title:"https://aggregator.api.mithril.network/aggregator"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey",title:"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"},"\u2197\ufe0f")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Decommissioned, not supported anymore")))),(0,r.kt)("p",null,"\u26a0\ufe0f In this documentation, we use the generic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*",(0,r.kt)("strong",{parentName:"li"},"*YOUR_CARDANO_NETWORK**")," identifier, but you need to replace it with the name of the network that runs on your Cardano node (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"preprod"),")"),(0,r.kt)("li",{parentName:"ul"},"*",(0,r.kt)("strong",{parentName:"li"},"*YOUR_AGGREGATOR_ENDPOINT**")," identifier, but you need to replace it with the endpoint of an aggregator that runs on the Cardano network you target (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://aggregator.release-preprod.api.mithril.network/aggregator"),")"),(0,r.kt)("li",{parentName:"ul"},"*",(0,r.kt)("strong",{parentName:"li"},"*YOUR_GENESIS_VERIFICATION_KEY**")," identifier, but you need to replace it with the genesis verification key url that runs on the Cardano network you target (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/input-output-hk/mithril/main/TEST_ONLY_genesis.vkey"),")")))}u.isMDXComponent=!0}}]);