"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[388],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,N=m["".concat(o,".").concat(g)]||m[g]||k[g]||l;return n?a.createElement(N,i(i({ref:t},p),{},{components:n})):a.createElement(N,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return k}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],d={title:"K3s Agent \u914d\u7f6e",weight:2},o=void 0,u={unversionedId:"reference/agent-config",id:"reference/agent-config",title:"K3s Agent \u914d\u7f6e",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Agent\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/agent-config.md",sourceDirName:"reference",slug:"/reference/agent-config",permalink:"/docs-k3s/zh/reference/agent-config",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/agent-config.md",tags:[],version:"current",lastUpdatedAt:1673482048,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{title:"K3s Agent \u914d\u7f6e",weight:2},sidebar:"mySidebar",previous:{title:"K3s Server \u914d\u7f6e",permalink:"/docs-k3s/zh/reference/server-config"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/docs-k3s/zh/reference/env-variables"}},p={},k=[{value:"Logging",id:"logging",level:3},{value:"\u96c6\u7fa4\u9009\u9879",id:"\u96c6\u7fa4\u9009\u9879",level:3},{value:"\u6570\u636e",id:"\u6570\u636e",level:3},{value:"\u8282\u70b9",id:"\u8282\u70b9",level:3},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u81ea\u5b9a\u4e49\u6807\u5fd7",id:"\u81ea\u5b9a\u4e49\u6807\u5fd7",level:3},{value:"\u5b9e\u9a8c\u529f\u80fd",id:"\u5b9e\u9a8c\u529f\u80fd",level:3},{value:"\u5df2\u5f03\u7528",id:"\u5df2\u5f03\u7528",level:3},{value:"Agent \u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",id:"agent-\u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",level:3},{value:"K3s Agent CLI \u5e2e\u52a9",id:"k3s-agent-cli-\u5e2e\u52a9",level:3}],m={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Agent\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#logging"},"Logging")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%9B%86%E7%BE%A4%E9%80%89%E9%A1%B9"},"\u96c6\u7fa4\u9009\u9879")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%95%B0%E6%8D%AE"},"\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%8A%82%E7%82%B9"},"\u8282\u70b9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%BF%90%E8%A1%8C%E6%97%B6"},"\u8fd0\u884c\u65f6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%BD%91%E7%BB%9C"},"\u7f51\u7edc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E5%BF%97"},"\u81ea\u5b9a\u4e49\u6807\u5fd7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AE%9E%E9%AA%8C%E5%8A%9F%E8%83%BD"},"\u5b9e\u9a8c\u529f\u80fd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B7%B2%E5%BC%83%E7%94%A8"},"\u5df2\u5f03\u7528")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#agent-%E7%9A%84%E8%8A%82%E7%82%B9%E6%A0%87%E7%AD%BE%E5%92%8C%E6%B1%A1%E7%82%B9"},"Agent \u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#k3s-agent-cli-%E5%B8%AE%E5%8A%A9"},"K3s Agent CLI \u5e2e\u52a9"))),(0,l.kt)("h3",{id:"logging"},"Logging"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-v")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u65e5\u5fd7\u7ea7\u522b\u8be6\u7ec6\u7a0b\u5ea6\u7684\u6570\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--vmodule")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"pattern=N \u683c\u5f0f\uff0c\u7528\u9017\u53f7\u5206\u9694\u7684\u5217\u8868\uff0c\u7528\u4e8e\u6587\u4ef6\u8fc7\u6ee4\u65e5\u5fd7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--log value, -l")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5230\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--alsologtostderr")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5230\u6807\u51c6\u9519\u8bef\u4ee5\u53ca\u6587\u4ef6\uff08\u5982\u679c\u8bbe\u7f6e\uff09")))),(0,l.kt)("h3",{id:"\u96c6\u7fa4\u9009\u9879"},"\u96c6\u7fa4\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--token value, -t")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_TOKEN")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u4ee4\u724c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--token-file")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_TOKEN_FILE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u4ee4\u724c\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--server value, -s")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_URL")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u8fde\u63a5\u7684 server")))),(0,l.kt)("h3",{id:"\u6570\u636e"},"\u6570\u636e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data-dir value, -d")," value"),(0,l.kt)("td",{parentName:"tr",align:null},'"/var/lib/rancher/k3s"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u72b6\u6001\u7684\u6587\u4ef6\u5939")))),(0,l.kt)("h3",{id:"\u8282\u70b9"},"\u8282\u70b9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-name")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_NODE_NAME")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--with-node-id")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06 ID \u5c3e\u9644\u5230\u8282\u70b9\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-label")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4e00\u7ec4\u6807\u7b7e\u6ce8\u518c\u548c\u542f\u52a8 kubelet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-taint")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4e00\u7ec4\u6c61\u70b9\u6ce8\u518c kubelet")))),(0,l.kt)("h3",{id:"\u8fd0\u884c\u65f6"},"\u8fd0\u884c\u65f6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--container-runtime-endpoint")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u5d4c\u5165\u5f0f containerd \u5e76\u4f7f\u7528\u66ff\u4ee3\u7684 CRI \u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--pause-image")," value"),(0,l.kt)("td",{parentName:"tr",align:null},'"docker.io/rancher/pause:3.1"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a containerd \u6216 Docker \u6c99\u76d2\u5b9a\u5236\u7684 pause \u955c\u50cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--private-registry")," value"),(0,l.kt)("td",{parentName:"tr",align:null},'"/etc/rancher/k3s/registries.yaml"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6")))),(0,l.kt)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-ip value, -i")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u7684 IP \u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-external-ip")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u7684\u5916\u90e8 IP \u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--resolv-conf")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_RESOLV_CONF")),(0,l.kt)("td",{parentName:"tr",align:null},"Kubelet resolv.conf \u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-iface")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-conf")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel \u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-cni-conf")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel CNI \u914d\u7f6e\u6587\u4ef6")))),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6807\u5fd7"},"\u81ea\u5b9a\u4e49\u6807\u5fd7"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kubelet-arg")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"kubelet \u8fdb\u7a0b\u7684\u81ea\u5b9a\u4e49\u6807\u5fd7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kube-proxy-arg")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"kube-proxy \u8fdb\u7a0b\u7684\u81ea\u5b9a\u4e49\u6807\u5fd7")))),(0,l.kt)("h3",{id:"\u5b9e\u9a8c\u529f\u80fd"},"\u5b9e\u9a8c\u529f\u80fd"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--rootless")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6839\u8fd0\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--docker")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 cri-dockerd \u800c\u4e0d\u662f containerd")))),(0,l.kt)("h3",{id:"\u5df2\u5f03\u7528"},"\u5df2\u5f03\u7528"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--no-flannel")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cluster-secret")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_CLUSTER_SECRET")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"--token"))))),(0,l.kt)("h3",{id:"agent-\u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9"},"Agent \u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9"),(0,l.kt)("p",null,"K3s Agent \u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--node-label")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"--node-taint")," \u9009\u9879\u6765\u914d\u7f6e\uff0c\u5b83\u4eec\u4f1a\u4e3a kubelet \u6dfb\u52a0\u6807\u7b7e\u548c\u6c61\u70b9\u3002\u8fd9\u4e24\u4e2a\u9009\u9879\u53ea\u80fd\u5728\u6ce8\u518c\u65f6\u6dfb\u52a0\u6807\u7b7e\u548c/\u6216\u6c61\u70b9\uff0c\u56e0\u6b64\u5b83\u4eec\u53ea\u80fd\u88ab\u6dfb\u52a0\u4e00\u6b21\uff0c\u4e4b\u540e\u4e0d\u80fd\u518d\u901a\u8fc7\u8fd0\u884c K3s \u547d\u4ee4\u6765\u6539\u53d8\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u663e\u793a\u5982\u4f55\u6dfb\u52a0\u6807\u7b7e\u548c\u6c61\u70b9\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"     --node-label foo=bar \\\n     --node-label hello=world \\\n     --node-taint key1=value1:NoExecute\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u8282\u70b9\u6ce8\u518c\u540e\u66f4\u6539\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3002\u5173\u4e8e\u5982\u4f55\u6dfb\u52a0",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"\u6c61\u70b9"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node"},"\u8282\u70b9\u6807\u7b7e"),"\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 Kubernetes \u6587\u6863\u3002"),(0,l.kt)("h3",{id:"k3s-agent-cli-\u5e2e\u52a9"},"K3s Agent CLI \u5e2e\u52a9"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u67d0\u4e2a\u9009\u9879\u51fa\u73b0\u5728\u62ec\u53f7\u4e2d\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"[$K3S_URL]"),"\uff09\uff0c\u8be5\u9009\u9879\u53ef\u4ee5\u4f5c\u4e3a\u8be5\u540d\u79f0\u7684\u73af\u5883\u53d8\u91cf\u4f20\u5165\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'NAME:\n   k3s agent - Run node agent\n\nUSAGE:\n   k3s agent [OPTIONS]\n\nOPTIONS:\n   --config FILE, -c FILE                     (config) Load configuration from FILE (default: "/etc/rancher/k3s/config.yaml") [$K3S_CONFIG_FILE]\n   --debug                                    (logging) Turn on debug logs [$K3S_DEBUG]\n   -v value                                   (logging) Number for the log level verbosity (default: 0)\n   --vmodule value                            (logging) Comma-separated list of pattern=N settings for file-filtered logging\n   --log value, -l value                      (logging) Log to file\n   --alsologtostderr                          (logging) Log to standard error as well as file (if set)\n   --token value, -t value                    (cluster) Token to use for authentication [$K3S_TOKEN]\n   --token-file value                         (cluster) Token file to use for authentication [$K3S_TOKEN_FILE]\n   --server value, -s value                   (cluster) Server to connect to [$K3S_URL]\n   --data-dir value, -d value                 (agent/data) Folder to hold state (default: "/var/lib/rancher/k3s")\n   --node-name value                          (agent/node) Node name [$K3S_NODE_NAME]\n   --with-node-id                             (agent/node) Append id to node name\n   --node-label value                         (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                         (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value  (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value   (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --container-runtime-endpoint value         (agent/runtime) Disable embedded containerd and use alternative CRI implementation\n   --pause-image value                        (agent/runtime) Customized pause image for containerd or docker sandbox (default: "rancher/mirrored-pause:3.6")\n   --snapshotter value                        (agent/runtime) Override default containerd snapshotter (default: "overlayfs")\n   --private-registry value                   (agent/runtime) Private registry configuration file (default: "/etc/rancher/k3s/registries.yaml")\n   --node-ip value, -i value                  (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                   (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                        (agent/networking) Kubelet resolv.conf file [$K3S_RESOLV_CONF]\n   --flannel-iface value                      (agent/networking) Override default flannel interface\n   --flannel-conf value                       (agent/networking) Override default flannel config file\n   --flannel-cni-conf value                   (agent/networking) Override default flannel cni config file\n   --kubelet-arg value                        (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                     (agent/flags) Customized flag for kube-proxy process\n   --protect-kernel-defaults                  (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --rootless                                 (experimental) Run rootless\n   --selinux                                  (agent/node) Enable SELinux in containerd [$K3S_SELINUX]\n   --lb-server-port value                     (agent/node) Local port for supervisor client load-balancer. \u5982\u679c supervisor \u548c apiserver \u6ca1\u6709\u4f4d\u4e8e\u540c\u4e00\u4f4d\u7f6e\uff0c\u5219\u6bd4\u8be5\u7aef\u53e3\u5c0f 1 \u7684\u7aef\u53e3\u4e5f\u5c06\u7528\u4e8e apiserver \u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668(default: 6444) [$K3S_LB_SERVER_PORT]\n   --docker                                   (deprecated) Use docker instead of containerd\n   --no-flannel                               (deprecated) use --flannel-backend=none\n   --cluster-secret value                     (deprecated) use --token [$K3S_CLUSTER_SECRET]\n')))}g.isMDXComponent=!0}}]);