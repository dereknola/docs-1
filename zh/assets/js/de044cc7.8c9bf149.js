"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,k=p["".concat(u,".").concat(b)]||p[b]||c[b]||s;return n?a.createElement(k,l(l({ref:t},i),{},{components:n})):a.createElement(k,l({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<s;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(3117),r=(n(7294),n(3905));const s={title:"Kubernetes \u4eea\u8868\u677f",weight:60},l=void 0,o={unversionedId:"installation/kube-dashboard",id:"installation/kube-dashboard",title:"Kubernetes \u4eea\u8868\u677f",description:"\u672c\u5b89\u88c5\u6307\u5357\u5c06\u5e2e\u52a9\u4f60\u5728 K3s \u4e0a\u90e8\u7f72\u548c\u914d\u7f6e Kubernetes \u4eea\u8868\u677f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/kube-dashboard.md",sourceDirName:"installation",slug:"/installation/kube-dashboard",permalink:"/docs-k3s/zh/installation/kube-dashboard",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/kube-dashboard.md",tags:[],version:"current",lastUpdatedAt:1692998550,formattedLastUpdatedAt:"2023\u5e748\u670825\u65e5",frontMatter:{title:"Kubernetes \u4eea\u8868\u677f",weight:60},sidebar:"mySidebar",previous:{title:"\u7ba1\u7406\u5c01\u88c5\u7684\u7ec4\u4ef6",permalink:"/docs-k3s/zh/installation/packaged-components"},next:{title:"\u5378\u8f7d K3s",permalink:"/docs-k3s/zh/installation/uninstall"}},u={},d=[{value:"\u90e8\u7f72 Kubernetes \u4eea\u8868\u677f",id:"\u90e8\u7f72-kubernetes-\u4eea\u8868\u677f",level:3},{value:"\u4eea\u8868\u677f RBAC \u914d\u7f6e",id:"\u4eea\u8868\u677f-rbac-\u914d\u7f6e",level:3},{value:"\u83b7\u53d6\u6301\u6709\u8005\u4ee4\u724c",id:"\u83b7\u53d6\u6301\u6709\u8005\u4ee4\u724c",level:3},{value:"\u672c\u5730\u8bbf\u95ee\u4eea\u8868\u677f",id:"\u672c\u5730\u8bbf\u95ee\u4eea\u8868\u677f",level:3},{value:"\u9ad8\u7ea7\uff1a\u8fdc\u7a0b\u8bbf\u95ee\u4eea\u8868\u677f",id:"\u9ad8\u7ea7\u8fdc\u7a0b\u8bbf\u95ee\u4eea\u8868\u677f",level:4},{value:"\u5347\u7ea7\u4eea\u8868\u677f",id:"\u5347\u7ea7\u4eea\u8868\u677f",level:3},{value:"\u5220\u9664\u4eea\u8868\u677f\u548c admin-user \u914d\u7f6e",id:"\u5220\u9664\u4eea\u8868\u677f\u548c-admin-user-\u914d\u7f6e",level:3}],i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=i("Tabs"),p=i("TabItem"),b={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u5b89\u88c5\u6307\u5357\u5c06\u5e2e\u52a9\u4f60\u5728 K3s \u4e0a\u90e8\u7f72\u548c\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Kubernetes \u4eea\u8868\u677f"),"\u3002"),(0,r.kt)("h3",{id:"\u90e8\u7f72-kubernetes-\u4eea\u8868\u677f"},"\u90e8\u7f72 Kubernetes \u4eea\u8868\u677f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml\n")),(0,r.kt)("h3",{id:"\u4eea\u8868\u677f-rbac-\u914d\u7f6e"},"\u4eea\u8868\u677f RBAC \u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u5728\u672c\u6307\u5357\u4e2d\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-user")," \u5c06\u5728\u4eea\u8868\u677f\u4e2d\u62e5\u6709\u7ba1\u7406\u6743\u9650\u3002")),(0,r.kt)("p",null,"\u521b\u5efa\u4ee5\u4e0b\u8d44\u6e90\u6e05\u5355\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user-role.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,r.kt)("p",null,"\u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-user")," \u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl create -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u6301\u6709\u8005\u4ee4\u724c"},"\u83b7\u53d6\u6301\u6709\u8005\u4ee4\u724c"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(p,{value:"v1.24 \u548c\u66f4\u65b0\u7248\u672c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard create token admin-user\n"))),(0,r.kt)(p,{value:"v1.23 \u548c\u66f4\u4f4e\u7248\u672c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard describe secret admin-user-token | grep '^token'\n")))),(0,r.kt)("h3",{id:"\u672c\u5730\u8bbf\u95ee\u4eea\u8868\u677f"},"\u672c\u5730\u8bbf\u95ee\u4eea\u8868\u677f"),(0,r.kt)("p",null,"\u8981\u8bbf\u95ee\u4eea\u8868\u677f\uff0c\u4f60\u5fc5\u987b\u4e3a\u4f60\u7684 K3s \u96c6\u7fa4\u521b\u5efa\u4e00\u4e2a\u5b89\u5168\u901a\u9053\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl proxy\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7f51\u5740\u8bbf\u95ee\u4eea\u8868\u76d8\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"admin-user")," \u6301\u6709\u8005\u4ee4\u724c\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"\u767b\u5f55"),"\u3002")),(0,r.kt)("h4",{id:"\u9ad8\u7ea7\u8fdc\u7a0b\u8bbf\u95ee\u4eea\u8868\u677f"},"\u9ad8\u7ea7\uff1a\u8fdc\u7a0b\u8bbf\u95ee\u4eea\u8868\u677f"),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605\u4eea\u8868\u677f\u6587\u6863\uff1a\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"},"\u7aef\u53e3\u8f6c\u53d1"),"\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("h3",{id:"\u5347\u7ea7\u4eea\u8868\u677f"},"\u5347\u7ea7\u4eea\u8868\u677f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nGITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,r.kt)("h3",{id:"\u5220\u9664\u4eea\u8868\u677f\u548c-admin-user-\u914d\u7f6e"},"\u5220\u9664\u4eea\u8868\u677f\u548c admin-user \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nsudo k3s kubectl delete clusterrolebinding kubernetes-dashboard\nsudo k3s kubectl delete clusterrole kubernetes-dashboard\n")))}k.isMDXComponent=!0}}]);