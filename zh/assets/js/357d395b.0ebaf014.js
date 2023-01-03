"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[251],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9049:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],p={title:"\u5347\u7ea7",weight:25},s=void 0,l={unversionedId:"upgrades/upgrades",id:"upgrades/upgrades",title:"\u5347\u7ea7",description:"\u5347\u7ea7 K3s \u96c6\u7fa4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrades/upgrades.md",sourceDirName:"upgrades",slug:"/upgrades/",permalink:"/docs-k3s/zh/upgrades/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/upgrades.md",tags:[],version:"current",lastUpdatedAt:1672781311,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u5347\u7ea7",weight:25},sidebar:"mySidebar",previous:{title:"\u96c6\u7fa4\u8bbf\u95ee",permalink:"/docs-k3s/zh/cluster-access/"},next:{title:"\u505c\u6b62 K3s",permalink:"/docs-k3s/zh/upgrades/killall"}},u={},c=[{value:"\u5347\u7ea7 K3s \u96c6\u7fa4",id:"\u5347\u7ea7-k3s-\u96c6\u7fa4",level:3},{value:"\u7279\u5b9a\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u7279\u5b9a\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879",level:3}],f={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5347\u7ea7-k3s-\u96c6\u7fa4"},"\u5347\u7ea7 K3s \u96c6\u7fa4"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs-k3s/zh/upgrades/manual"},"\u624b\u52a8\u5347\u7ea7"),"\u63cf\u8ff0\u4e86\u624b\u52a8\u5347\u7ea7\u96c6\u7fa4\u7684\u51e0\u79cd\u65b9\u6cd5\u3002\u5b83\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u901a\u8fc7\u7b2c\u4e09\u65b9\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\u5de5\u5177\uff08\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform"),"\uff09\u8fdb\u884c\u5347\u7ea7\u7684\u57fa\u7840\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs-k3s/zh/upgrades/automated"},"\u81ea\u52a8\u5347\u7ea7"),"\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528 Rancher \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller"},"system-upgrade-controller")," \u6267\u884c Kubernetes \u539f\u751f\u7684\u81ea\u52a8\u5347\u7ea7\u3002"),(0,o.kt)("h3",{id:"\u7279\u5b9a\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879"},"\u7279\u5b9a\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Traefik"),"\uff1a\u5982\u679c\u6ca1\u6709\u7981\u7528 Traefik\uff0cK3s 1.20 \u53ca\u4ee5\u524d\u7684\u7248\u672c\u5c06\u5b89\u88c5 Traefik v1\uff0c\u800c K3s 1.21 \u53ca\u4ee5\u540e\u7684\u7248\u672c\u5c06\u5b89\u88c5 Traefik v2\u3002\u8981\u5c06\u65e7\u7248 Traefik v1 \u5347\u7ea7\u5230 Traefik v2\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/migration/v1-to-v2/"},"Traefik \u6587\u6863"),"\u5e76\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-migration-tool"},"\u8fc1\u79fb\u5de5\u5177"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"K3s \u5f15\u5bfc\u6570\u636e"),"\uff1a\u5982\u679c\u4f60\u5728 HA \u914d\u7f6e\u4e2d\u4f7f\u7528 K3s \u548c\u5916\u90e8 SQL \u6570\u636e\u5b58\u50a8\uff0c\u5e76\u4e14\u4f60\u7684 Server\uff08control plane\uff09\u8282\u70b9\u6ca1\u6709\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--token")," CLI \u6807\u5fd7\u542f\u52a8\uff0c\u4f60\u5c06\u4e0d\u518d\u80fd\u591f\u5728\u4e0d\u6307\u5b9a\u4ee4\u724c\u7684\u60c5\u51b5\u4e0b\u5c06\u5176\u4ed6 K3s Server \u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002\u8bf7\u4fdd\u7559\u6b64\u4ee4\u724c\u7684\u526f\u672c\uff0c\u56e0\u4e3a\u6062\u590d\u5907\u4efd\u65f6\u9700\u8981\u5b83\u3002\u4ee5\u524d\uff0cK3s \u5728\u4f7f\u7528\u5916\u90e8 SQL \u6570\u636e\u5b58\u50a8\u65f6\u4e0d\u5f3a\u5236\u4f7f\u7528 token\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53d7\u5f71\u54cd\u7684\u7248\u672c\u662f <= v1.19.12+k3s1, v1.20.8+k3s1, v1.21.2+k3s1\uff1b\u4fee\u8865\u540e\u7684\u7248\u672c\u4e3a v1.19.13+k3s1\u3001v1.20.9+k3s1\u3001v1.21.3+k3s1\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u4ece\u5df2\u52a0\u5165\u96c6\u7fa4\u7684\u4efb\u4f55 server \u4e2d\u68c0\u7d22\u4ee4\u724c\u503c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/lib/rancher/k3s/server/token\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5b9e\u9a8c\u6027 Dqlite"),"\uff1a\u5b9e\u9a8c\u6027\u5d4c\u5165\u5f0f Dqlite \u6570\u636e\u5b58\u50a8\u5728 K3s v1.19.1 \u4e2d\u5df2\u88ab\u5f03\u7528\u3002\u8bf7\u6ce8\u610f\uff0c\u4e0d\u652f\u6301\u4ece\u5b9e\u9a8c\u6027 Dqlite \u5347\u7ea7\u5230\u5b9e\u9a8c\u6027\u5d4c\u5165\u5f0f etcd\u3002\u5982\u679c\u4f60\u5c1d\u8bd5\u5347\u7ea7\uff0c\u5347\u7ea7\u5c06\u4e0d\u4f1a\u6210\u529f\uff0c\u5e76\u4e14\u6570\u636e\u5c06\u4f1a\u4e22\u5931\u3002")))}d.isMDXComponent=!0}}]);