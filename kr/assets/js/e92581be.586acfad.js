"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const s={title:"Manual Upgrades",weight:10},l=void 0,o={unversionedId:"upgrades/manual",id:"upgrades/manual",title:"Manual Upgrades",description:"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/upgrades/manual.md",sourceDirName:"upgrades",slug:"/upgrades/manual",permalink:"/docs-k3s/kr/upgrades/manual",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/manual.md",tags:[],version:"current",lastUpdatedAt:1692998550,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{title:"Manual Upgrades",weight:10},sidebar:"mySidebar",previous:{title:"Stopping K3s",permalink:"/docs-k3s/kr/upgrades/killall"},next:{title:"Automated Upgrades",permalink:"/docs-k3s/kr/upgrades/automated"}},i={},p=[{value:"Release Channels",id:"release-channels",level:3},{value:"Upgrade K3s Using the Installation Script",id:"upgrade-k3s-using-the-installation-script",level:3},{value:"Manually Upgrade K3s Using the Binary",id:"manually-upgrade-k3s-using-the-binary",level:3},{value:"Restarting K3s",id:"restarting-k3s",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When upgrading, upgrade server nodes first one at a time, then any agent nodes.")),(0,r.kt)("h3",{id:"release-channels"},"Release Channels"),(0,r.kt)("p",null,"Upgrades performed via the installation script or using our ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/kr/upgrades/automated"},"automated upgrades")," feature can be tied to different release channels. The following channels are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Channel"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stable"),(0,r.kt)("td",{parentName:"tr",align:null},"(Default) Stable is recommended for production environments. These releases have been through a period of community hardening.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latest"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest is recommended for trying out the latest features.  These releases have not yet been through a period of community hardening.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v1.26 (example)"),(0,r.kt)("td",{parentName:"tr",align:null},"There is a release channel tied to each Kubernetes minor version, including versions that are end-of-life. These channels will select the latest patch available, not necessarily a stable release.")))),(0,r.kt)("p",null,"For an exhaustive and up-to-date list of channels, you can visit the ",(0,r.kt)("a",{parentName:"p",href:"https://update.k3s.io/v1-release/channels"},"k3s channel service API"),". For more technical details on how channels work, you see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/channelserver"},"channelserver project"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When attempting to upgrade to a new version of K3s, the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/release/version-skew-policy/"},"Kubernetes version skew policy")," applies. Ensure that your plan does not skip intermediate minor versions when upgrading. The system-upgrade-controller itself will not protect against unsupported changes to the Kubernetes version.")),(0,r.kt)("h3",{id:"upgrade-k3s-using-the-installation-script"},"Upgrade K3s Using the Installation Script"),(0,r.kt)("p",null,"To upgrade K3s from an older version you can re-run the installation script using the same flags, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | sh -\n")),(0,r.kt)("p",null,"This will upgrade to a newer version in the stable channel by default."),(0,r.kt)("p",null,"If you want to upgrade to a newer version in a specific channel (such as latest) you can specify the channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n")),(0,r.kt)("p",null,"If you want to upgrade to a specific version you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=vX.Y.Z-rc1 sh -\n")),(0,r.kt)("h3",{id:"manually-upgrade-k3s-using-the-binary"},"Manually Upgrade K3s Using the Binary"),(0,r.kt)("p",null,"Or to manually upgrade K3s:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the desired version of the K3s binary from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"releases")),(0,r.kt)("li",{parentName:"ol"},"Copy the downloaded binary to ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/k3s")," (or your desired location)"),(0,r.kt)("li",{parentName:"ol"},"Stop the old k3s binary"),(0,r.kt)("li",{parentName:"ol"},"Launch the new k3s binary")),(0,r.kt)("h3",{id:"restarting-k3s"},"Restarting K3s"),(0,r.kt)("p",null,"Restarting K3s is supported by the installation script for systemd and OpenRC."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"systemd")),(0,r.kt)("p",null,"To restart servers manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart k3s\n")),(0,r.kt)("p",null,"To restart agents manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart k3s-agent\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OpenRC")),(0,r.kt)("p",null,"To restart servers manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service k3s restart\n")),(0,r.kt)("p",null,"To restart agents manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service k3s-agent restart\n")))}c.isMDXComponent=!0}}]);