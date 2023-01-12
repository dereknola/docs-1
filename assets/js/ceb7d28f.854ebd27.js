"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[316],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8964:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"K3s Binary Tools",weight:1},s=void 0,c={unversionedId:"reference/binary-tools",id:"reference/binary-tools",title:"K3s Binary Tools",description:"The K3s binary contains a number of additional tools the help you manage your cluster.",source:"@site/docs/reference/binary-tools.md",sourceDirName:"reference",slug:"/reference/binary-tools",permalink:"/docs-k3s/reference/binary-tools",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/binary-tools.md",tags:[],version:"current",lastUpdatedAt:1673565792,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"K3s Binary Tools",weight:1},sidebar:"mySidebar",previous:{title:"Environment Variables",permalink:"/docs-k3s/reference/env-variables"},next:{title:"K3s Resource Profiling",permalink:"/docs-k3s/reference/resource-profiling"}},d={},u=[],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The K3s binary contains a number of additional tools the help you manage your cluster."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s server")),(0,o.kt)("td",{parentName:"tr",align:null},"Run the K3s management server, which will also launch Kubernetes control plane components such as the API server, controller-manager, and scheduler.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s agent")),(0,o.kt)("td",{parentName:"tr",align:null},"Run the K3s node agent. This will cause K3s to run as a worker node, launching the Kubernetes node services ",(0,o.kt)("inlineCode",{parentName:"td"},"kubelet")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"kube-proxy"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s kubectl")),(0,o.kt)("td",{parentName:"tr",align:null},"Run an embedded ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/kubectl"},"kubectl")," CLI. If the ",(0,o.kt)("inlineCode",{parentName:"td"},"KUBECONFIG")," environment variable is not set, this will automatically attempt to use the config file that is created at ",(0,o.kt)("inlineCode",{parentName:"td"},"/etc/rancher/k3s/k3s.yaml")," when launching a K3s server node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s crictl")),(0,o.kt)("td",{parentName:"tr",align:null},"Run an embedded ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md"},"crictl"),". This is a CLI for interacting with Kubernetes's container runtime interface (CRI). Useful for debugging.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s ctr")),(0,o.kt)("td",{parentName:"tr",align:null},"Run an embedded ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/projectatomic/containerd/blob/master/docs/cli.md"},"ctr"),". This is a CLI for containerd, the container daemon used by K3s. Useful for debugging.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s etcd-snapshot")),(0,o.kt)("td",{parentName:"tr",align:null},"Perform on demand backups of the K3s cluster data and upload to S3. See ",(0,o.kt)("a",{parentName:"td",href:"/docs-k3s/backup-restore/#backup-and-restore-with-embedded-etcd-datastore"},"Backup and Restore")," for more information.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s secrets-encrypt")),(0,o.kt)("td",{parentName:"tr",align:null},"Configure K3s to encrypt secrets when storing them in the cluster. See ",(0,o.kt)("a",{parentName:"td",href:"/docs-k3s/security/secrets-encryption"},"Secrets Encryption")," for more information.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s certificate")),(0,o.kt)("td",{parentName:"tr",align:null},"Certificates management. See ",(0,o.kt)("a",{parentName:"td",href:"/docs-k3s/advanced/#certificate-rotation"},"Certificate Rotation")," for more information.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s completion")),(0,o.kt)("td",{parentName:"tr",align:null},"Generate shell completion scripts for k3s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k3s help")),(0,o.kt)("td",{parentName:"tr",align:null},"Shows a list of commands or help for one command")))))}m.isMDXComponent=!0}}]);