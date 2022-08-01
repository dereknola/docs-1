"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[595],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1332:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"Upgrades",weight:25},l=void 0,u={unversionedId:"upgrades/upgrades",id:"upgrades/upgrades",title:"Upgrades",description:"Upgrading your K3s cluster",source:"@site/docs/upgrades/upgrades.md",sourceDirName:"upgrades",slug:"/upgrades/",permalink:"/docs/docs/upgrades/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/upgrades.md",tags:[],version:"current",lastUpdatedAt:1659130394,formattedLastUpdatedAt:"7/29/2022",frontMatter:{title:"Upgrades",weight:25},sidebar:"mySidebar",previous:{title:"Cluster Access",permalink:"/docs/docs/cluster-access/"},next:{title:"Stopping K3s",permalink:"/docs/docs/upgrades/killall"}},p={},c=[{value:"Upgrading your K3s cluster",id:"upgrading-your-k3s-cluster",level:3},{value:"Version-specific caveats",id:"version-specific-caveats",level:3}],d={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"upgrading-your-k3s-cluster"},"Upgrading your K3s cluster"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/docs/upgrades/manual"},"Manual Upgrades")," describes several techniques for upgrading your cluster manually. It can also be used as a basis for upgrading through third-party Infrastructure-as-Code tools like ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/docs/upgrades/automated"},"Automated Upgrades")," describes how to perform Kubernetes-native automated upgrades using Rancher's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller"},"system-upgrade-controller"),"."),(0,o.kt)("h3",{id:"version-specific-caveats"},"Version-specific caveats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Traefik:")," If Traefik is not disabled, K3s versions 1.20 and earlier will install Traefik v1, while K3s versions 1.21 and later will install Traefik v2, if v1 is not already present. To upgrade from the older Traefik v1 to Traefik v2, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/migration/v1-to-v2/"},"Traefik documentation")," and use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-migration-tool"},"migration tool"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"K3s bootstrap data:")," If you are using K3s in an HA configuration with an external SQL datastore, and your server (control-plane) nodes were not started with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--token")," CLI flag, you will no longer be able to add additional K3s servers to the cluster without specifying the token. Ensure that you retain a copy of this token, as it is required when restoring from backup. Previously, K3s did not enforce the use of a token when using external SQL datastores. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The affected versions are <= v1.19.12+k3s1, v1.20.8+k3s1, v1.21.2+k3s1; the patched versions are v1.19.13+k3s1, v1.20.9+k3s1, v1.21.3+k3s1.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You may retrieve the token value from any server already joined to the cluster as follows:"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/lib/rancher/k3s/server/token\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Experimental Dqlite:")," The experimental embedded Dqlite data store was deprecated in K3s v1.19.1. Please note that upgrades from experimental Dqlite to experimental embedded etcd are not supported. If you attempt an upgrade, it will not succeed, and data will be lost.")))}f.isMDXComponent=!0}}]);