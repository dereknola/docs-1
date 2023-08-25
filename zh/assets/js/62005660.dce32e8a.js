"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4124],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),k=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=k(n),c=r,s=u["".concat(d,".").concat(c)]||u[c]||o[c]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5502:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(3117),r=(n(7294),n(3905));const l={title:"\u8981\u6c42",weight:1},i=void 0,p={unversionedId:"installation/requirements",id:"installation/requirements",title:"\u8981\u6c42",description:"K3s \u975e\u5e38\u8f7b\u91cf\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u6700\u4f4e\u8981\u6c42\uff0c\u5982\u4e0b\u6240\u8ff0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/requirements.md",sourceDirName:"installation",slug:"/installation/requirements",permalink:"/docs-k3s/zh/installation/requirements",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/requirements.md",tags:[],version:"current",lastUpdatedAt:1692998550,formattedLastUpdatedAt:"2023\u5e748\u670825\u65e5",frontMatter:{title:"\u8981\u6c42",weight:1},sidebar:"mySidebar",previous:{title:"\u5b89\u88c5",permalink:"/docs-k3s/zh/installation/"},next:{title:"\u914d\u7f6e\u9009\u9879",permalink:"/docs-k3s/zh/installation/configuration"}},d={},k=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u64cd\u4f5c\u7cfb\u7edf",id:"\u64cd\u4f5c\u7cfb\u7edf",level:2},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:2},{value:"\u78c1\u76d8",id:"\u78c1\u76d8",level:4},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"K3s Server \u8282\u70b9\u7684\u5165\u7ad9\u89c4\u5219",id:"k3s-server-\u8282\u70b9\u7684\u5165\u7ad9\u89c4\u5219",level:3},{value:"\u5927\u578b\u96c6\u7fa4",id:"\u5927\u578b\u96c6\u7fa4",level:2},{value:"CPU \u548c\u5185\u5b58",id:"cpu-\u548c\u5185\u5b58",level:3},{value:"\u78c1\u76d8",id:"\u78c1\u76d8-1",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc-1",level:3},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:3}],m={toc:k};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"K3s \u975e\u5e38\u8f7b\u91cf\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u6700\u4f4e\u8981\u6c42\uff0c\u5982\u4e0b\u6240\u8ff0\u3002"),(0,r.kt)("p",null,"\u65e0\u8bba K3s \u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u8fd8\u662f\u4f5c\u4e3a\u539f\u751f Linux \u670d\u52a1\u8fd0\u884c\uff0c\u6bcf\u4e2a\u8fd0\u884c K3s \u7684\u8282\u70b9\u90fd\u5e94\u6ee1\u8db3\u4ee5\u4e0b\u6700\u4f4e\u8981\u6c42\u3002\u8fd9\u4e9b\u8981\u6c42\u662f K3s \u53ca\u5176\u6253\u5305\u7ec4\u4ef6\u7684\u57fa\u51c6\uff0c\u4e0d\u5305\u62ec\u5de5\u4f5c\u8d1f\u8f7d\u672c\u8eab\u6d88\u8017\u7684\u8d44\u6e90\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4e24\u4e2a\u8282\u70b9\u4e0d\u80fd\u5177\u6709\u76f8\u540c\u7684\u4e3b\u673a\u540d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u591a\u4e2a\u8282\u70b9\u5c06\u5177\u6709\u76f8\u540c\u7684\u4e3b\u673a\u540d\uff0c\u6216\u8005\u4e3b\u673a\u540d\u53ef\u4ee5\u88ab\u81ea\u52a8\u914d\u7f6e\u7cfb\u7edf\u91cd\u590d\u4f7f\u7528\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--with-node-id")," \u9009\u9879\u4e3a\u6bcf\u4e2a\u8282\u70b9\u9644\u52a0\u4e00\u4e2a\u968f\u673a\u540e\u7f00\uff0c\u6216\u8005\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-name")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"$K3S_NODE_NAME")," \u4e3a\u6dfb\u52a0\u5230\u96c6\u7fa4\u7684\u6bcf\u4e2a\u8282\u70b9\u8bbe\u8ba1\u4e00\u4e2a\u72ec\u7279\u7684\u540d\u79f0\u3002"),(0,r.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,r.kt)("p",null,"K3s \u9002\u7528\u4e8e\u4ee5\u4e0b\u67b6\u6784\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"x86_64"),(0,r.kt)("li",{parentName:"ul"},"armhf"),(0,r.kt)("li",{parentName:"ul"},"arm64/aarch64"),(0,r.kt)("li",{parentName:"ul"},"s390x")),(0,r.kt)("admonition",{title:"ARM64 \u9875\u9762\u5927\u5c0f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 2023 \u5e74 5 \u6708\u7248\u672c\uff08v1.24.14+k3s1\u3001v1.25.10+k3s1\u3001v1.26.5+k3s1\u3001v1.27.2+k3s1\uff09\u524d\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"aarch64/arm64")," \u7cfb\u7edf\u4e0a\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5fc5\u987b\u4f7f\u7528 4k \u9875\u9762\u5927\u5c0f\u3002",(0,r.kt)("strong",{parentName:"p"},"RHEL9"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"Ubuntu"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"Raspberry PI OS")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"SLES")," \u90fd\u6ee1\u8db3\u8fd9\u4e2a\u8981\u6c42\u3002")),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u7cfb\u7edf"},"\u64cd\u4f5c\u7cfb\u7edf"),(0,r.kt)("p",null,"K3s \u6709\u671b\u5728\u5927\u591a\u6570\u73b0\u4ee3 Linux \u7cfb\u7edf\u4e0a\u8fd0\u884c\u3002"),(0,r.kt)("p",null,"\u4e00\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u6709\u7279\u5b9a\u7684\u8981\u6c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},"Red Hat/CentOS Enterprise Linux"),"\uff0c\u8bf7\u6309\u7167",(0,r.kt)("a",{parentName:"li",href:"/docs-k3s/zh/advanced/#red-hat-enterprise-linux--centos"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u8fdb\u884c\u5176\u4ed6\u8bbe\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},"Raspberry Pi OS"),"\uff0c\u8bf7\u6309\u7167",(0,r.kt)("a",{parentName:"li",href:"/docs-k3s/zh/advanced/#raspberry-pi"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u5207\u6362\u5230\u65e7\u7248 iptables\u3002")),(0,r.kt)("p",null,"\u5173\u4e8e Rancher \u7ba1\u7406\u7684 K3s \u96c6\u7fa4\u6d4b\u8bd5\u4e86\u54ea\u4e9b\u64cd\u4f5c\u7cfb\u7edf\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"Rancher \u652f\u6301\u548c\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,r.kt)("h2",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,r.kt)("p",null,"\u786c\u4ef6\u8981\u6c42\u6839\u636e\u4f60\u90e8\u7f72\u7684\u89c4\u6a21\u800c\u53d8\u5316\u3002\u6b64\u5904\u6982\u8ff0\u4e86\u6700\u4f4e\u5efa\u8bae\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Spec"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6700\u4f4e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a8\u8350"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"1 \u6838"),(0,r.kt)("td",{parentName:"tr",align:null},"2 \u6838")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"512MB"),(0,r.kt)("td",{parentName:"tr",align:null},"1 GB")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/zh/reference/resource-profiling"},"\u8d44\u6e90\u5206\u6790"),"\u7684\u6d4b\u8bd5\u7ed3\u679c\u7528\u4e8e\u786e\u5b9a K3s Agent\u3001\u5177\u6709\u5de5\u4f5c\u8d1f\u8f7d\u7684 K3s Server \u548c\u5177\u6709\u4e00\u4e2a Agent \u7684 K3s Server \u7684\u6700\u4f4e\u8d44\u6e90\u8981\u6c42\u3002\u5b83\u8fd8\u5305\u542b\u4e86\u6709\u5173\u5bf9 K3s Server \u548c Agent \u5229\u7528\u7387\u4ea7\u751f\u6700\u5927\u5f71\u54cd\u7684\u5206\u6790\uff0c\u4ee5\u53ca\u5982\u4f55\u4fdd\u62a4\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u514d\u53d7 Agent \u548c\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5e72\u6270\u3002"),(0,r.kt)("admonition",{title:"Raspberry Pi \u548c\u5d4c\u5165\u5f0f etcd",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728 Raspberry Pi \u4e0a\u90e8\u7f72\u5e26\u6709\u5d4c\u5165\u5f0f etcd \u7684 K3s\uff0c\u5efa\u8bae\u4f60\u4f7f\u7528\u5916\u90e8 SSD\u3002etcd \u662f\u5199\u5165\u5bc6\u96c6\u578b\u7684\uff0cSD \u5361\u65e0\u6cd5\u5904\u7406 IO \u8d1f\u8f7d\u3002")),(0,r.kt)("h4",{id:"\u78c1\u76d8"},"\u78c1\u76d8"),(0,r.kt)("p",null,"K3s \u7684\u6027\u80fd\u53d6\u51b3\u4e8e\u6570\u636e\u5e93\u7684\u6027\u80fd\u3002\u4e3a\u786e\u4fdd\u6700\u4f73\u901f\u5ea6\uff0c\u6211\u4eec\u5efa\u8bae\u5c3d\u53ef\u80fd\u4f7f\u7528 SSD\u3002\u5728\u4f7f\u7528 SD \u5361\u6216 eMMC \u7684 ARM \u8bbe\u5907\u4e0a\uff0c\u78c1\u76d8\u6027\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\u3002"),(0,r.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,r.kt)("p",null,"K3s Server \u9700\u8981 6443 \u7aef\u53e3\u624d\u80fd\u88ab\u6240\u6709\u8282\u70b9\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 Flannel VXLAN \u65f6\uff0c\u8282\u70b9\u9700\u8981\u80fd\u591f\u901a\u8fc7 UDP \u7aef\u53e3 8472 \u8bbf\u95ee\u5176\u4ed6\u8282\u70b9\uff0c\u4f7f\u7528 Flannel Wireguard \u540e\u7aef\u65f6\uff0c\u8282\u70b9\u9700\u8981\u80fd\u591f\u901a\u8fc7 UDP \u7aef\u53e3 51820 \u548c 51821\uff08\u4f7f\u7528 IPv6 \u65f6\uff09\u8bbf\u95ee\u5176\u4ed6\u8282\u70b9\u3002\u8be5\u8282\u70b9\u4e0d\u5e94\u4fa6\u542c\u4efb\u4f55\u5176\u4ed6\u7aef\u53e3\u3002K3s \u4f7f\u7528\u53cd\u5411\u96a7\u9053\u5efa\u7acb\u8282\u70b9\u4e0e Server \u7684\u51fa\u7ad9\u8fde\u63a5\uff0c\u6240\u6709 kubelet \u6d41\u91cf\u90fd\u901a\u8fc7\u8be5\u96a7\u9053\u8fdb\u884c\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u4e0d\u4f7f\u7528 Flannel \u5e76\u63d0\u4f9b\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49 CNI\uff0c\u90a3\u4e48 K3s \u4e0d\u9700\u8981 Flannel \u6240\u9700\u7684\u7aef\u53e3\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528 Metrics Server\uff0c\u6240\u6709\u8282\u70b9\u5fc5\u987b\u53ef\u4ee5\u5728\u7aef\u53e3 10250 \u4e0a\u76f8\u4e92\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8ba1\u5212\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u6765\u5b9e\u73b0\u9ad8\u53ef\u7528\u6027\uff0c\u5219 Server \u8282\u70b9\u5fc5\u987b\u53ef\u4ee5\u5728\u7aef\u53e3 2379 \u548c 2380 \u4e0a\u76f8\u4e92\u8bbf\u95ee\u3002"),(0,r.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8282\u70b9\u4e0a\u7684 VXLAN \u7aef\u53e3\u4f1a\u5f00\u653e\u96c6\u7fa4\u7f51\u7edc\uff0c\u8ba9\u4efb\u4f55\u4eba\u5747\u80fd\u8bbf\u95ee\u96c6\u7fa4\u3002\u56e0\u6b64\uff0c\u4e0d\u8981\u5c06 VXLAN \u7aef\u53e3\u66b4\u9732\u7ed9\u5916\u754c\u3002\u8bf7\u4f7f\u7528\u7981\u7528 8472 \u7aef\u53e3\u7684\u9632\u706b\u5899/\u5b89\u5168\u7ec4\u6765\u8fd0\u884c\u8282\u70b9\u3002")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Flannel \u4f9d\u8d56 ",(0,r.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"Bridge CNI \u63d2\u4ef6"),"\u6765\u521b\u5efa\u4ea4\u6362\u6d41\u91cf\u7684 L2 \u7f51\u7edc\u3002\u5177\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"NET_RAW")," \u529f\u80fd\u7684 Rogue pod \u53ef\u4ee5\u6ee5\u7528\u8be5 L2 \u7f51\u7edc\u6765\u53d1\u52a8\u653b\u51fb\uff0c\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://static.sched.com/hosted_files/kccncna19/72/ARP%20DNS%20spoof.pdf"},"ARP \u6b3a\u9a97"),"\u3002\u56e0\u6b64\uff0c\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"Kubernetes \u6587\u6863"),"\u6240\u8ff0\uff0c\u8bf7\u8bbe\u7f6e\u4e00\u4e2a\u53d7\u9650\u914d\u7f6e\u6587\u4ef6\uff0c\u5728\u4e0d\u53ef\u4fe1\u4efb\u7684 Pod \u4e0a\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"NET_RAW"),"\u3002")),(0,r.kt)("h3",{id:"k3s-server-\u8282\u70b9\u7684\u5165\u7ad9\u89c4\u5219"},"K3s Server \u8282\u70b9\u7684\u5165\u7ad9\u89c4\u5219"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u534f\u8bae"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6e90"),(0,r.kt)("th",{parentName:"tr",align:null},"\u76ee\u6807"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"2379-2380"),(0,r.kt)("td",{parentName:"tr",align:null},"Servers"),(0,r.kt)("td",{parentName:"tr",align:null},"Servers"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5177\u6709\u5d4c\u5165\u5f0f etcd \u7684 HA \u9700\u8981")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"6443"),(0,r.kt)("td",{parentName:"tr",align:null},"Agents"),(0,r.kt)("td",{parentName:"tr",align:null},"Servers"),(0,r.kt)("td",{parentName:"tr",align:null},"K3s supervisor \u548c Kubernetes API Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"8472"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709 Flannel VXLAN \u9700\u8981")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"10250"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubelet \u6307\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"51820"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u4f7f\u7528 IPv4 \u7684 Flannel Wireguard \u624d\u9700\u8981")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"51821"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u4f7f\u7528 IPv6 \u7684 Flannel Wireguard \u624d\u9700\u8981")))),(0,r.kt)("p",null,"\u6240\u6709\u51fa\u7ad9\u6d41\u91cf\u901a\u5e38\u90fd\u662f\u5141\u8bb8\u7684\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u9700\u8981\u6839\u636e\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u5bf9\u9632\u706b\u5899\u8fdb\u884c\u5176\u4ed6\u66f4\u6539\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/zh/advanced/#%E5%85%B6%E4%BB%96%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%87%86%E5%A4%87"},"\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u51c6\u5907"),"\u3002"),(0,r.kt)("h2",{id:"\u5927\u578b\u96c6\u7fa4"},"\u5927\u578b\u96c6\u7fa4"),(0,r.kt)("p",null,"\u786c\u4ef6\u8981\u6c42\u53d6\u51b3\u4e8e K3s \u96c6\u7fa4\u7684\u5927\u5c0f\u3002\u5bf9\u4e8e\u751f\u4ea7\u548c\u5927\u578b\u96c6\u7fa4\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528\u6027\u8bbe\u7f6e\u3002\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u5916\u90e8\u6570\u636e\u5e93\uff0c\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},"etcd")),(0,r.kt)("h3",{id:"cpu-\u548c\u5185\u5b58"},"CPU \u548c\u5185\u5b58"),(0,r.kt)("p",null,"\u9ad8\u53ef\u7528 K3s Server \u4e2d\u8282\u70b9\u7684\u6700\u4f4e CPU \u548c\u5185\u5b58\u8981\u6c42\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u90e8\u7f72\u89c4\u6a21"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"VCPUS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"RAM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Small"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Up to 10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Up to 100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Large"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Up to 250"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"X-Large"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Up to 500"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"XX-Large"),(0,r.kt)("td",{parentName:"tr",align:"center"},"500+"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"64GB")))),(0,r.kt)("h3",{id:"\u78c1\u76d8-1"},"\u78c1\u76d8"),(0,r.kt)("p",null,"\u96c6\u7fa4\u6027\u80fd\u53d6\u51b3\u4e8e\u6570\u636e\u5e93\u6027\u80fd\u3002\u4e3a\u786e\u4fdd\u6700\u4f73\u901f\u5ea6\uff0c\u6211\u4eec\u5efa\u8bae\u4e3a K3s \u96c6\u7fa4\u4f7f\u7528 SSD \u78c1\u76d8\u3002\u5728\u4e91\u63d0\u4f9b\u5546\u4e0a\uff0c\u4f60\u8fd8\u9700\u4f7f\u7528\u80fd\u83b7\u5f97\u6700\u5927 IOPS \u7684\u6700\u5c0f\u5927\u5c0f\u3002"),(0,r.kt)("h3",{id:"\u7f51\u7edc-1"},"\u7f51\u7edc"),(0,r.kt)("p",null,"\u4f60\u5e94\u8be5\u8003\u8651\u589e\u52a0\u96c6\u7fa4 CIDR \u7684\u5b50\u7f51\u5927\u5c0f\uff0c\u907f\u514d\u7528\u5c3d Pod \u7684 IP\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u542f\u52a8\u65f6\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," \u9009\u9879\u4f20\u9012\u7ed9 K3s Server \u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"),(0,r.kt)("h3",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,r.kt)("p",null,"K3s \u652f\u6301\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u5305\u62ec MySQL\u3001PostgreSQL\u3001MariaDB \u548c etcd\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/zh/datastore/"},"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8"),"\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u8fd0\u884c\u5927\u578b\u96c6\u7fa4\u6240\u9700\u7684\u6570\u636e\u5e93\u8d44\u6e90\u7684\u5927\u5c0f\u6307\u5357\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u90e8\u7f72\u89c4\u6a21"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"VCPUS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"RAM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Small"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Up to 10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Up to 100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Large"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Up to 250"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"X-Large"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Up to 500"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"XX-Large"),(0,r.kt)("td",{parentName:"tr",align:"center"},"500+"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"64GB")))))}o.isMDXComponent=!0}}]);