"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[614],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4686:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"Installation",weight:20},s=void 0,u={unversionedId:"installation/installation",id:"installation/installation",title:"Installation",description:"This section contains instructions for installing K3s in various environments. Please ensure you have met the Installation Requirements before you begin installing K3s.",source:"@site/docs/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/docs/installation/",draft:!1,editUrl:"https://github.com/k3s-io/k3s/docs/edit/main/docs/installation/installation.md",tags:[],version:"current",lastUpdatedAt:1657730406,formattedLastUpdatedAt:"7/13/2022",frontMatter:{title:"Installation",weight:20},sidebar:"mySidebar",previous:{title:"Quick-Start Guide",permalink:"/docs/quick-start/"},next:{title:"Installation Requirements",permalink:"/docs/installation/installation-requirements/"}},c={},p=[{value:"Uninstalling",id:"uninstalling",level:3}],d={toc:p};function f(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section contains instructions for installing K3s in various environments. Please ensure you have met the ",(0,r.kt)("a",{parentName:"p",href:"/installation/installation-requirements/"},"Installation Requirements")," before you begin installing K3s."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/installation/install-options/"},"Installation and Configuration Options")," provides guidance on the options available to you when installing K3s."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/installation/ha/"},"High Availability with an External DB")," details how to set up an HA K3s cluster backed by an external datastore such as MySQL, PostgreSQL, or etcd."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/installation/ha-embedded/"},"High Availability with Embedded DB")," details how to set up an HA K3s cluster that leverages a built-in distributed database."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/installation/airgap/"},"Air-Gap Installation")," details how to set up K3s in environments that do not have direct access to the Internet."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/installation/disable-flags/"},"Disable Components Flags")," details how to set up K3s with etcd only nodes and controlplane only nodes"),(0,r.kt)("h3",{id:"uninstalling"},"Uninstalling"),(0,r.kt)("p",null,"If you installed K3s with the help of the ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," script, an uninstall script is generated during installation. The script is created on your node at ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/k3s-uninstall.sh")," (or as ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s-agent-uninstall.sh"),")."))}f.isMDXComponent=!0}}]);