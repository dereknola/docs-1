"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const l={title:"Uninstalling K3s",weight:61},i=void 0,o={unversionedId:"installation/uninstall",id:"installation/uninstall",title:"Uninstalling K3s",description:"Uninstalling K3s deletes the local cluster data, configuration, and all of the scripts and CLI tools.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/uninstall.md",sourceDirName:"installation",slug:"/installation/uninstall",permalink:"/docs-k3s/kr/installation/uninstall",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/uninstall.md",tags:[],version:"current",lastUpdatedAt:1689875912,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{title:"Uninstalling K3s",weight:61},sidebar:"mySidebar",previous:{title:"Kubernetes Dashboard",permalink:"/docs-k3s/kr/installation/kube-dashboard"},next:{title:"\ud074\ub7ec\uc2a4\ud130 \ub370\uc774\ud130 \uc800\uc7a5\uc18c",permalink:"/docs-k3s/kr/datastore/"}},s={},u=[{value:"Uninstalling Servers",id:"uninstalling-servers",level:3},{value:"Uninstalling Agents",id:"uninstalling-agents",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Uninstalling K3s deletes the local cluster data, configuration, and all of the scripts and CLI tools.",(0,a.kt)("br",{parentName:"p"}),"\n","It does not remove any data from external datastores, or created by pods using external Kubernetes storage volumes.")),(0,a.kt)("p",null,"If you installed K3s using the installation script, a script to uninstall K3s was generated during installation."),(0,a.kt)("p",null,"If you are planning on rejoining a node to an existing cluster after uninstalling and reinstalling, be sure to delete the node from the cluster to ensure that the node password secret is removed. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs-k3s/kr/architecture/#how-agent-node-registration-works"},"Node Registration")," documentation for more information."),(0,a.kt)("h3",{id:"uninstalling-servers"},"Uninstalling Servers"),(0,a.kt)("p",null,"To uninstall K3s from a server node, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/k3s-uninstall.sh\n")),(0,a.kt)("h3",{id:"uninstalling-agents"},"Uninstalling Agents"),(0,a.kt)("p",null,"To uninstall K3s from an agent node, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/k3s-agent-uninstall.sh\n")))}d.isMDXComponent=!0}}]);