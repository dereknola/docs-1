"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[484],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9093:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Installation Options",weight:20},s=void 0,p={unversionedId:"installation/install-options/install-options",id:"installation/install-options/install-options",title:"Installation Options",description:"This page focuses on the options that can be used when you set up K3s for the first time:",source:"@site/docs/installation/install-options/install-options.md",sourceDirName:"installation/install-options",slug:"/installation/install-options/",permalink:"/installation/install-options/",draft:!1,editUrl:"https://github.com/k3s-io/k3s/docs/edit/main/docs/installation/install-options/install-options.md",tags:[],version:"current",lastUpdatedAt:1657220395,formattedLastUpdatedAt:"7/7/2022",frontMatter:{title:"Installation Options",weight:20},sidebar:"mySidebar",previous:{title:"K3s Resource Profiling",permalink:"/installation/installation-requirements/resource-profiling"},next:{title:"K3s Server Configuration Reference",permalink:"/installation/install-options/server-config"}},d={},u=[{value:"Options for Installation with Script",id:"options-for-installation-with-script",level:3},{value:"Options for installation from binary",id:"options-for-installation-from-binary",level:3},{value:"Registration Options for the K3s Server",id:"registration-options-for-the-k3s-server",level:3},{value:"Registration Options for the K3s Agent",id:"registration-options-for-the-k3s-agent",level:3},{value:"Configuration File",id:"configuration-file",level:3}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page focuses on the options that can be used when you set up K3s for the first time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#options-for-installation-with-script"},"Options for installation with script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#options-for-installation-from-binary"},"Options for installation from binary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#registration-options-for-the-k3s-server"},"Registration options for the K3s server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#registration-options-for-the-k3s-agent"},"Registration options for the K3s agent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-file"},"Configuration File"))),(0,i.kt)("p",null,"In addition to configuring K3s with environment variables and CLI arguments, K3s can also use a ",(0,i.kt)("a",{parentName:"p",href:"#configuration-file"},"config file.")),(0,i.kt)("p",null,"For more advanced options, refer to ",(0,i.kt)("a",{parentName:"p",href:"/advanced"},"this page"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Throughout the K3s documentation, you will see some options that can be passed in as both command flags and environment variables. For help with passing in options, refer to ",(0,i.kt)("a",{parentName:"p",href:"/installation/install-options/how-to-flags"},"How to Use Flags and Environment Variables."))),(0,i.kt)("h3",{id:"options-for-installation-with-script"},"Options for Installation with Script"),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/quick-start"},"Quick-Start Guide"),", you can use the installation script available at ",(0,i.kt)("a",{parentName:"p",href:"https://get.k3s.io"},"https://get.k3s.io")," to install K3s as a service on systemd and openrc based systems."),(0,i.kt)("p",null,"The simplest form of this command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | sh -\n")),(0,i.kt)("p",null,"When using this method to install K3s, the following environment variables can be used to configure the installation:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_DOWNLOAD")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will not download K3s hash or binary.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SYMLINK")),(0,i.kt)("td",{parentName:"tr",align:null},"By default will create symlinks for the kubectl, crictl, and ctr binaries if the commands do not already exist in path. If set to 'skip' will not create symlinks and 'force' will overwrite.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_ENABLE")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will not enable or start K3s service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_START")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will not start K3s service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},"Version of K3s to download from Github. Will attempt to download from the stable channel if not specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_BIN_DIR")),(0,i.kt)("td",{parentName:"tr",align:null},"Directory to install K3s binary, links, and uninstall script to, or use ",(0,i.kt)("inlineCode",{parentName:"td"},"/usr/local/bin")," as the default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_BIN_DIR_READ_ONLY")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will not write files to ",(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_BIN_DIR"),", forces setting ",(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_DOWNLOAD=true"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SYSTEMD_DIR")),(0,i.kt)("td",{parentName:"tr",align:null},"Directory to install systemd service and environment files to, or use ",(0,i.kt)("inlineCode",{parentName:"td"},"/etc/systemd/system")," as the default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_EXEC")),(0,i.kt)("td",{parentName:"tr",align:null},"Command with flags to use for launching K3s in the service. If the command is not specified, and the ",(0,i.kt)("inlineCode",{parentName:"td"},"K3S_URL"),' is set, it will default to "agent." If ',(0,i.kt)("inlineCode",{parentName:"td"},"K3S_URL"),' not set, it will default to "server." For help, refer to ',(0,i.kt)("a",{parentName:"td",href:"/installation/install-options/how-to-flags#example-b-install-k3s-exec"},"this example."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_NAME")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of systemd service to create, will default to 'k3s' if running k3s as a server and 'k3s-agent' if running k3s as an agent. If specified the name will be prefixed with 'k3s-'.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_TYPE")),(0,i.kt)("td",{parentName:"tr",align:null},"Type of systemd service to create, will default from the K3s exec command if not specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SELINUX_WARN")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will continue if k3s-selinux policy is not found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_SELINUX_RPM")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will skip automatic installation of the k3s RPM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_CHANNEL_URL")),(0,i.kt)("td",{parentName:"tr",align:null},"Channel URL for fetching K3s download URL. Defaults to ",(0,i.kt)("a",{parentName:"td",href:"https://update.k3s.io/v1-release/channels"},"https://update.k3s.io/v1-release/channels"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_CHANNEL")),(0,i.kt)("td",{parentName:"tr",align:null},'Channel to use for fetching K3s download URL. Defaults to "stable". Options include: ',(0,i.kt)("inlineCode",{parentName:"td"},"stable"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"testing"),".")))),(0,i.kt)("p",null,"This example shows where to place aforementioned environment variables as options (after the pipe):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n")),(0,i.kt)("p",null,"Environment variables which begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_")," will be preserved for the systemd and openrc services to use."),(0,i.kt)("p",null,"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_URL"),' without explicitly setting an exec command will default the command to "agent".'),(0,i.kt)("p",null,"When running the agent ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_TOKEN")," must also be set."),(0,i.kt)("h3",{id:"options-for-installation-from-binary"},"Options for installation from binary"),(0,i.kt)("p",null,"As stated, the installation script is primarily concerned with configuring K3s to run as a service. If you choose to not use the script, you can run K3s simply by downloading the binary from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/releases/latest"},"release page"),", placing it on your path, and executing it. The K3s binary supports the following commands:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"nowrap"},(0,i.kt)("inlineCode",{parentName:"td"},"k3s server"))),(0,i.kt)("td",{parentName:"tr",align:null},"Run the K3s management server, which will also launch Kubernetes control plane components such as the API server, controller-manager, and scheduler.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"nowrap"},(0,i.kt)("inlineCode",{parentName:"td"},"k3s agent"))),(0,i.kt)("td",{parentName:"tr",align:null},"Run the K3s node agent. This will cause K3s to run as a worker node, launching the Kubernetes node services ",(0,i.kt)("inlineCode",{parentName:"td"},"kubelet")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-proxy"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"nowrap"},(0,i.kt)("inlineCode",{parentName:"td"},"k3s kubectl"))),(0,i.kt)("td",{parentName:"tr",align:null},"Run an embedded ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"kubectl")," CLI. If the ",(0,i.kt)("inlineCode",{parentName:"td"},"KUBECONFIG")," environment variable is not set, this will automatically attempt to use the config file that is created at ",(0,i.kt)("inlineCode",{parentName:"td"},"/etc/rancher/k3s/k3s.yaml")," when launching a K3s server node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"nowrap"},(0,i.kt)("inlineCode",{parentName:"td"},"k3s crictl"))),(0,i.kt)("td",{parentName:"tr",align:null},"Run an embedded ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md"},"crictl"),". This is a CLI for interacting with Kubernetes's container runtime interface (CRI). Useful for debugging.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"nowrap"},(0,i.kt)("inlineCode",{parentName:"td"},"k3s ctr"))),(0,i.kt)("td",{parentName:"tr",align:null},"Run an embedded ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/projectatomic/containerd/blob/master/docs/cli.md"},"ctr"),". This is a CLI for containerd, the container daemon used by K3s. Useful for debugging.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"nowrap"},(0,i.kt)("inlineCode",{parentName:"td"},"k3s help"))),(0,i.kt)("td",{parentName:"tr",align:null},"Shows a list of commands or help for one command")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s agent")," commands have additional configuration options that can be viewed with ",(0,i.kt)("span",{class:"nowrap"},(0,i.kt)("inlineCode",{parentName:"p"},"k3s server --help"))," or ",(0,i.kt)("span",{class:"nowrap"},(0,i.kt)("inlineCode",{parentName:"p"},"k3s agent --help")),"."),(0,i.kt)("h3",{id:"registration-options-for-the-k3s-server"},"Registration Options for the K3s Server"),(0,i.kt)("p",null,"For details on configuring the K3s server, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/installation/install-options/server-config"},"server configuration reference.")),(0,i.kt)("h3",{id:"registration-options-for-the-k3s-agent"},"Registration Options for the K3s Agent"),(0,i.kt)("p",null,"For details on configuring the K3s agent, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/installation/install-options/agent-config"},"agent configuration reference.")),(0,i.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.19.1+k3s1")),(0,i.kt)("p",null,"In addition to configuring K3s with environment variables and CLI arguments, K3s can also use a config file."),(0,i.kt)("p",null,"By default, values present in a YAML file located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," will be used on install."),(0,i.kt)("p",null,"An example of a basic ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," config file is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'write-kubeconfig-mode: "0644"\ntls-san:\n  - "foo.local"\nnode-label:\n  - "foo=bar"\n  - "something=amazing"\n')),(0,i.kt)("p",null,"In general, CLI arguments map to their respective YAML key, with repeatable CLI arguments being represented as YAML lists."),(0,i.kt)("p",null,"An identical configuration using solely CLI arguments is shown below to demonstrate this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'k3s server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"\n')),(0,i.kt)("p",null,"It is also possible to use both a configuration file and CLI arguments.  In these situations, values will be loaded from both sources, but CLI arguments will take precedence.  For repeatable arguments such as ",(0,i.kt)("inlineCode",{parentName:"p"},"--node-label"),", the CLI arguments will overwrite all values in the list."),(0,i.kt)("p",null,"Finally, the location of the config file can be changed either through the cli argument ",(0,i.kt)("inlineCode",{parentName:"p"},"--config FILE, -c FILE"),", or the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"$K3S_CONFIG_FILE"),"."))}c.isMDXComponent=!0}}]);