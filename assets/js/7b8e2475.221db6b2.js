"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[79],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=a(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var a=2;a<o;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2678:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),s=["components"],c={title:"Security",weight:90},u=void 0,a={unversionedId:"security/security",id:"security/security",title:"Security",description:"This section describes the methodology and means of securing a K3s cluster. It's broken into 2 sections. These guides assume k3s is running with embedded etcd.",source:"@site/docs/security/security.md",sourceDirName:"security",slug:"/security/",permalink:"/docs-k3s/security/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/security/security.md",tags:[],version:"current",lastUpdatedAt:1673482048,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"Security",weight:90},sidebar:"mySidebar",previous:{title:"Known Issues",permalink:"/docs-k3s/known-issues/"},next:{title:"Secrets Encryption",permalink:"/docs-k3s/security/secrets-encryption"}},l={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes the methodology and means of securing a K3s cluster. It's broken into 2 sections. These guides assume k3s is running with embedded etcd."),(0,o.kt)("p",null,"The documents below apply to CIS Kubernetes Benchmark v1.23."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs-k3s/security/hardening-guide"},"Hardening Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs-k3s/security/self-assessment"},"CIS Benchmark Self-Assessment Guide"))))}f.isMDXComponent=!0}}]);