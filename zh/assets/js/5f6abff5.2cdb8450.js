"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[557],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=l,c=u["".concat(o,".").concat(h)]||u[h]||m[h]||n;return a?r.createElement(c,i(i({ref:t},k),{},{components:a})):r.createElement(c,i({ref:t},k))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(3117),l=(a(7294),a(3905));const n={},i="K3s v1.27",s={unversionedId:"release-notes/k3s-v1.27",id:"release-notes/k3s-v1.27",title:"K3s v1.27",description:"| Version | Release date | Kubernetes | Kine | SQLite | Etcd | Containerd | Runc | Flannel | Metrics-server | Traefik | CoreDNS | Helm-controller | Local-path-provisioner  |",source:"@site/docs/release-notes/k3s-v1.27.md",sourceDirName:"release-notes",slug:"/release-notes/k3s-v1.27",permalink:"/docs-k3s/zh/release-notes/k3s-v1.27",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/release-notes/k3s-v1.27.md",tags:[],version:"current",lastUpdatedAt:1692998550,formattedLastUpdatedAt:"2023\u5e748\u670825\u65e5",frontMatter:{},sidebar:"mySidebar",previous:{title:"K3s v1.26",permalink:"/docs-k3s/zh/release-notes/k3s-v1.26"},next:{title:"\u5df2\u77e5\u95ee\u9898",permalink:"/docs-k3s/zh/known-issues/"}},o={},p=[{value:"Release v1.27.4+k3s1",id:"release-v1274k3s1",level:2},{value:"Changes since v1.27.3+k3s1:",id:"changes-since-v1273k3s1",level:3},{value:"Release v1.27.3+k3s1",id:"release-v1273k3s1",level:2},{value:"Changes since v1.27.2+k3s1:",id:"changes-since-v1272k3s1",level:3},{value:"Release v1.27.2+k3s1",id:"release-v1272k3s1",level:2},{value:"Changes since v1.27.1+k3s1:",id:"changes-since-v1271k3s1",level:3},{value:"Release v1.27.1+k3s1",id:"release-v1271k3s1",level:2},{value:"Changes since v1.26.4+k3s1:",id:"changes-since-v1264k3s1",level:3}],k={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"k3s-v127"},"K3s v1.27"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Release date"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes"),(0,l.kt)("th",{parentName:"tr",align:null},"Kine"),(0,l.kt)("th",{parentName:"tr",align:null},"SQLite"),(0,l.kt)("th",{parentName:"tr",align:null},"Etcd"),(0,l.kt)("th",{parentName:"tr",align:null},"Containerd"),(0,l.kt)("th",{parentName:"tr",align:null},"Runc"),(0,l.kt)("th",{parentName:"tr",align:null},"Flannel"),(0,l.kt)("th",{parentName:"tr",align:null},"Metrics-server"),(0,l.kt)("th",{parentName:"tr",align:null},"Traefik"),(0,l.kt)("th",{parentName:"tr",align:null},"CoreDNS"),(0,l.kt)("th",{parentName:"tr",align:null},"Helm-controller"),(0,l.kt)("th",{parentName:"tr",align:null},"Local-path-provisioner"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs-k3s/zh/release-notes/k3s-v1.27#release-v1274k3s1"},"v1.27.4+k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},"Jul 27 2023"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#v1274"},"v1.27.4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/kine/releases/tag/v0.10.1"},"v0.10.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://sqlite.org/releaselog/3_39_2.html"},"3.39.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.7-k3s1"},"v3.5.7-k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.1-k3s1"},"v1.7.1-k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/opencontainers/runc/releases/tag/v1.1.7"},"v1.1.7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/flannel-io/flannel/releases/tag/v0.22.0"},"v0.22.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3"},"v0.6.3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/traefik/traefik/releases/tag/v2.9.10"},"v2.9.10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/coredns/coredns/releases/tag/v1.10.1"},"v1.10.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.2"},"v0.15.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.24"},"v0.0.24"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs-k3s/zh/release-notes/k3s-v1.27#release-v1273k3s1"},"v1.27.3+k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},"Jun 26 2023"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#v1273"},"v1.27.3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/kine/releases/tag/v0.10.1"},"v0.10.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://sqlite.org/releaselog/3_39_2.html"},"3.39.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.7-k3s1"},"v3.5.7-k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.1-k3s1"},"v1.7.1-k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/opencontainers/runc/releases/tag/v1.1.7"},"v1.1.7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/flannel-io/flannel/releases/tag/v0.22.0"},"v0.22.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3"},"v0.6.3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/traefik/traefik/releases/tag/v2.9.10"},"v2.9.10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/coredns/coredns/releases/tag/v1.10.1"},"v1.10.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.0"},"v0.15.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.24"},"v0.0.24"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs-k3s/zh/release-notes/k3s-v1.27#release-v1272k3s1"},"v1.27.2+k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},"May 26 2023"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#v1272"},"v1.27.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/kine/releases/tag/v0.10.1"},"v0.10.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://sqlite.org/releaselog/3_39_2.html"},"3.39.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.7-k3s1"},"v3.5.7-k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.1-k3s1"},"v1.7.1-k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/opencontainers/runc/releases/tag/v1.1.7"},"v1.1.7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/flannel-io/flannel/releases/tag/v0.21.4"},"v0.21.4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.2"},"v0.6.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/traefik/traefik/releases/tag/v2.9.10"},"v2.9.10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/coredns/coredns/releases/tag/v1.10.1"},"v1.10.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.14.0"},"v0.14.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.24"},"v0.0.24"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs-k3s/zh/release-notes/k3s-v1.27#release-v1271k3s1"},"v1.27.1+k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},"Apr 27 2023"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#v1271"},"v1.27.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/kine/releases/tag/v0.9.9"},"v0.9.9")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://sqlite.org/releaselog/3_39_2.html"},"3.39.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.7-k3s1"},"v3.5.7-k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/containerd/releases/tag/v1.6.19-k3s1"},"v1.6.19-k3s1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/opencontainers/runc/releases/tag/v1.1.5"},"v1.1.5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/flannel-io/flannel/releases/tag/v0.21.4"},"v0.21.4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.2"},"v0.6.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/traefik/traefik/releases/tag/v2.9.4"},"v2.9.4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/coredns/coredns/releases/tag/v1.10.1"},"v1.10.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.13.3"},"v0.13.3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.24"},"v0.0.24"))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"release-v1274k3s1"},"Release v1.27.4+k3s1"),(0,l.kt)("p",null,"This release updates Kubernetes to v1.27.4, and fixes a number of issues.",(0,l.kt)("br",{parentName:"p"}),"\n","\u200b\nFor more details on what's new, see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#changelog-since-v1273"},"Kubernetes release notes"),".\n\u200b"),(0,l.kt)("h3",{id:"changes-since-v1273k3s1"},"Changes since v1.27.3+k3s1:"),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pkg imported more than once ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7803"},"(#7803)")),(0,l.kt)("li",{parentName:"ul"},"Faster K3s Binary Build Option ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7805"},"(#7805)")),(0,l.kt)("li",{parentName:"ul"},"Update stable channel to v1.27.3+k3s1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7827"},"(#7827)")),(0,l.kt)("li",{parentName:"ul"},"Adding cli to custom klipper helm image ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7682"},"(#7682)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The default helm-controller job image can now be overridden with the --helm-job-image CLI flag"))),(0,l.kt)("li",{parentName:"ul"},"Check if we are on ipv4, ipv6 or dualStack when doing tailscale ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7838"},"(#7838)")),(0,l.kt)("li",{parentName:"ul"},"Remove file_windows.go ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7845"},"(#7845)")),(0,l.kt)("li",{parentName:"ul"},"Add a k3s data directory location specified by the cli ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7791"},"(#7791)")),(0,l.kt)("li",{parentName:"ul"},"Fix e2e startup flaky test ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7839"},"(#7839)")),(0,l.kt)("li",{parentName:"ul"},"Allow k3s to customize apiServerPort on helm-controller ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7834"},"(#7834)")),(0,l.kt)("li",{parentName:"ul"},"Fall back to basic/bearer auth when node identity auth is rejected ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7836"},"(#7836)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Resolved an issue that caused agents joined with kubeadm-style bootstrap tokens to fail to rejoin the cluster when their node object is deleted."))),(0,l.kt)("li",{parentName:"ul"},"Fix code spell check ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7858"},"(#7858)")),(0,l.kt)("li",{parentName:"ul"},"Add e2e s3 test ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7833"},"(#7833)")),(0,l.kt)("li",{parentName:"ul"},"Warn that v1.28 will deprecate reencrypt/prepare ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7848"},"(#7848)")),(0,l.kt)("li",{parentName:"ul"},"Support setting control server URL for Tailscale ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7807"},"(#7807)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Support connecting tailscale to a separate server (e.g. headscale)"))),(0,l.kt)("li",{parentName:"ul"},"Improve for K3s release Docs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7864"},"(#7864)")),(0,l.kt)("li",{parentName:"ul"},"Fix rootless node password location ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7887"},"(#7887)")),(0,l.kt)("li",{parentName:"ul"},"Bump google.golang.org/grpc from 1.51.0 to 1.53.0 in /tests/terraform ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7879"},"(#7879)")),(0,l.kt)("li",{parentName:"ul"},"Add retry for clone step ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7862"},"(#7862)")),(0,l.kt)("li",{parentName:"ul"},"Generation of certificates and keys for etcd gated if etcd is disabled. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/6998"},"(#6998)")),(0,l.kt)("li",{parentName:"ul"},"Don't use zgrep in ",(0,l.kt)("inlineCode",{parentName:"li"},"check-config")," if apparmor porfile is enforced ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7939"},"(#7939)")),(0,l.kt)("li",{parentName:"ul"},"Fix image_scan.sh script and download trivy version ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7950"},"(#7950)")),(0,l.kt)("li",{parentName:"ul"},'Revert "Warn that v1.28 will deprecate reencrypt/prepare" ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7977"},"(#7977)")),(0,l.kt)("li",{parentName:"ul"},"Adjust default kubeconfig file permissions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7978"},"(#7978)")),(0,l.kt)("li",{parentName:"ul"},"Fix update go version command on release documentation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/8028"},"(#8028)")),(0,l.kt)("li",{parentName:"ul"},"Update to v1.27.4 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/8014"},"(#8014)"),"\n\u200b")),(0,l.kt)("h2",{id:"release-v1273k3s1"},"Release v1.27.3+k3s1"),(0,l.kt)("p",null,"This release updates Kubernetes to v1.27.3, and fixes a number of issues."),(0,l.kt)("p",null,"For more details on what's new, see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#changelog-since-v1272"},"Kubernetes release notes"),"."),(0,l.kt)("h3",{id:"changes-since-v1272k3s1"},"Changes since v1.27.2+k3s1:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update flannel version ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7628"},"(#7628)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Update flannel to v0.22.0"))),(0,l.kt)("li",{parentName:"ul"},"Add el9 selinux rpm ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7635"},"(#7635)")),(0,l.kt)("li",{parentName:"ul"},"Update channels ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7634"},"(#7634)")),(0,l.kt)("li",{parentName:"ul"},"Allow coredns override extensions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7583"},"(#7583)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"coredns-custom")," ConfigMap now allows for ",(0,l.kt)("inlineCode",{parentName:"li"},"*.override")," sections to be included in the ",(0,l.kt)("inlineCode",{parentName:"li"},".:53")," default server block."))),(0,l.kt)("li",{parentName:"ul"},"Bump klipper-lb to v0.4.4 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7617"},"(#7617)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Bumped klipper-lb image to v0.4.4 to resolve an issue that prevented access to ServiceLB ports from localhost when the Service ExternalTrafficPolicy was set to Local."))),(0,l.kt)("li",{parentName:"ul"},"Bump metrics-server to v0.6.3 and update tls-cipher-suites ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7564"},"(#7564)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The bundled metrics-server has been bumped to v0.6.3, and now uses only secure TLS ciphers by default."))),(0,l.kt)("li",{parentName:"ul"},"Do not use the admin kubeconfig for the supervisor and core controllers ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7616"},"(#7616)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The K3s core controllers (supervisor, deploy, and helm) no longer use the admin kubeconfig. This makes it easier to determine from access and audit logs which actions are performed by the system, and which are performed by an administrative user."))),(0,l.kt)("li",{parentName:"ul"},"Bump golang:alpine image version ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7619"},"(#7619)")),(0,l.kt)("li",{parentName:"ul"},"Make LB image configurable when compiling k3s ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7626"},"(#7626)")),(0,l.kt)("li",{parentName:"ul"},"Bump vagrant libvirt with fix for plugin installs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7605"},"(#7605)")),(0,l.kt)("li",{parentName:"ul"},"Add format command on Makefile ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7437"},"(#7437)")),(0,l.kt)("li",{parentName:"ul"},"Use el8 rpm for fedora 38 and 39 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7664"},"(#7664)")),(0,l.kt)("li",{parentName:"ul"},"Check variant before version to decide rpm target and packager closes #7666 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7667"},"(#7667)")),(0,l.kt)("li",{parentName:"ul"},"Test Coverage Reports for E2E tests ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7526"},"(#7526)")),(0,l.kt)("li",{parentName:"ul"},"Soft-fail on node password verification if the secret cannot be created ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7655"},"(#7655)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"K3s now allows nodes to join the cluster even if the node password secret cannot be created at the time the node joins. The secret create will be retried in the background. This resolves a potential deadlock created by fail-closed validating webhooks that block secret creation, where the webhook is unavailable until new nodes join the cluster to run the webhook pod."))),(0,l.kt)("li",{parentName:"ul"},"Enable containerd aufs/devmapper/zfs snapshotter plugins ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7661"},"(#7661)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The bundled containerd's aufs/devmapper/zfs snapshotter plugins have been restored. These were unintentionally omitted when moving containerd back into the k3s multicall binary in the previous release."))),(0,l.kt)("li",{parentName:"ul"},"Bump docker go.mod ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7681"},"(#7681)")),(0,l.kt)("li",{parentName:"ul"},"Shortcircuit commands with version or help flags ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7683"},"(#7683)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Non root users can now call ",(0,l.kt)("inlineCode",{parentName:"li"},"k3s --help")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"k3s --version")," commands without running into permission errors over the default config file."))),(0,l.kt)("li",{parentName:"ul"},"Bump Trivy version ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7672"},"(#7672)")),(0,l.kt)("li",{parentName:"ul"},"E2E: Capture coverage of K3s subcommands ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7686"},"(#7686)")),(0,l.kt)("li",{parentName:"ul"},"Integrate tailscale into k3s ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7352"},"(#7352)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Integration of tailscale VPN into k3s"))),(0,l.kt)("li",{parentName:"ul"},"Add private registry e2e test ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7653"},"(#7653)")),(0,l.kt)("li",{parentName:"ul"},"E2E: Remove unnecessary daemonset addition/deletion ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7696"},"(#7696)")),(0,l.kt)("li",{parentName:"ul"},"Add issue template for OS validation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7695"},"(#7695)")),(0,l.kt)("li",{parentName:"ul"},"Fix spelling check ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7740"},"(#7740)")),(0,l.kt)("li",{parentName:"ul"},"Remove useless libvirt config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7745"},"(#7745)")),(0,l.kt)("li",{parentName:"ul"},"Bump helm-controller to v0.15.0 for create-namespace support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7716"},"(#7716)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The embedded helm controller has been bumped to v0.15.0, and now supports creating the chart's target namespace if it does not exist."))),(0,l.kt)("li",{parentName:"ul"},"Fix error logging in tailscale ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7776"},"(#7776)")),(0,l.kt)("li",{parentName:"ul"},"Add commands to remove advertised routes of tailscale in k3s-killall.sh ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7777"},"(#7777)")),(0,l.kt)("li",{parentName:"ul"},"Update Kubernetes to v1.27.3 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7790"},"(#7790)"))),(0,l.kt)("h2",{id:"release-v1272k3s1"},"Release v1.27.2+k3s1"),(0,l.kt)("p",null,"This release updates Kubernetes to v1.27.2, and fixes a number of issues."),(0,l.kt)("p",null,"For more details on what's new, see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#changelog-since-v1271"},"Kubernetes release notes"),"."),(0,l.kt)("h3",{id:"changes-since-v1271k3s1"},"Changes since v1.27.1+k3s1:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ensure that klog verbosity is set to the same level as logrus ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7303"},"(#7303)")),(0,l.kt)("li",{parentName:"ul"},"Create CRDs with schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7308"},"(#7308)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Fixed an issue where Addon, HelmChart, and HelmChartConfig CRDs were created without structural schema, allowing the creation of custom resources of these types with invalid content."))),(0,l.kt)("li",{parentName:"ul"},"Bump k3s-root for aarch64 page size fix ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7364"},"(#7364)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"K3s once again supports aarch64 nodes with page size > 4k"))),(0,l.kt)("li",{parentName:"ul"},"Bump Runc and Containerd ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7339"},"(#7339)")),(0,l.kt)("li",{parentName:"ul"},"Add integration tests for etc-snapshot server flags and refactor /tests/integration/integration.go/K3sStartServer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7300"},"(#7300)")),(0,l.kt)("li",{parentName:"ul"},"Bump traefik to v2.9.10 / chart 21.2.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7324"},"(#7324)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The packaged Traefik version has been bumped to v2.9.10 / chart 21.2.0"))),(0,l.kt)("li",{parentName:"ul"},"Add longhorn storage test ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/6445"},"(#6445)")),(0,l.kt)("li",{parentName:"ul"},"Improve error message when CLI wrapper Exec fails ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7373"},"(#7373)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"K3s now prints a more meaningful error when attempting to run from a filesystem mounted ",(0,l.kt)("inlineCode",{parentName:"li"},"noexec"),"."))),(0,l.kt)("li",{parentName:"ul"},"Fix issues with ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-agent")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"--egress-selector-mode=pod|cluster")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7331"},"(#7331)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Servers started with the (experimental) --disable-agent flag no longer attempt to run the tunnel authorizer agent component."),(0,l.kt)("li",{parentName:"ul"},"Fixed an regression that prevented the pod and cluster egress-selector modes from working properly."))),(0,l.kt)("li",{parentName:"ul"},'Retry cluster join on "too many learners" error ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7351"},"(#7351)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'K3s now retries the cluster join operation when receiving a "too many learners" error from etcd. This most frequently occurred when attempting to add multiple servers at the same time.'))),(0,l.kt)("li",{parentName:"ul"},"Fix MemberList error handling and incorrect etcd-arg passthrough ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7371"},"(#7371)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"K3s now correctly passes through etcd-args to the temporary etcd that is used to extract cluster bootstrap data when restarting managed etcd nodes."),(0,l.kt)("li",{parentName:"ul"},"K3s now properly handles errors obtaining the current etcd cluster member list when a new server is joining the managed etcd cluster."))),(0,l.kt)("li",{parentName:"ul"},"Bump Trivy version ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7383"},"(#7383)")),(0,l.kt)("li",{parentName:"ul"},"Handle multiple arguments with StringSlice flags ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7380"},"(#7380)")),(0,l.kt)("li",{parentName:"ul"},"Add v1.27 channel ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7387"},"(#7387)")),(0,l.kt)("li",{parentName:"ul"},"Enable FindString to search dotD config files ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7323"},"(#7323)")),(0,l.kt)("li",{parentName:"ul"},"Migrate netutil methods into /util/net.go ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7422"},"(#7422)")),(0,l.kt)("li",{parentName:"ul"},"Local-storage: Fix permission ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7217"},"(#7217)")),(0,l.kt)("li",{parentName:"ul"},"Bump cni plugins to v1.2.0-k3s1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7425"},"(#7425)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The bundled CNI plugins have been upgraded to v1.2.0-k3s1. The bandwidth and firewall plugins are now included in the bundle."))),(0,l.kt)("li",{parentName:"ul"},"Add dependabot label and reviewer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7423"},"(#7423)")),(0,l.kt)("li",{parentName:"ul"},"E2E: Startup test cleanup + RunCommand Enhancement ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7388"},"(#7388)")),(0,l.kt)("li",{parentName:"ul"},"Fail to validate server tokens that use bootstrap id/secret format ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7389"},"(#7389)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"K3s now exits with a proper error message when the server token uses a bootstrap token ",(0,l.kt)("inlineCode",{parentName:"li"},"id.secret")," format."))),(0,l.kt)("li",{parentName:"ul"},"Fix token startup test ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7442"},"(#7442)")),(0,l.kt)("li",{parentName:"ul"},"Bump kine to v0.10.1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7414"},"(#7414)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The embedded kine version has been bumped to v0.10.1. This replaces the legacy ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/pq")," postgres driver with ",(0,l.kt)("inlineCode",{parentName:"li"},"pgx"),"."))),(0,l.kt)("li",{parentName:"ul"},"Add kube-* server flags integration tests ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7416"},"(#7416)")),(0,l.kt)("li",{parentName:"ul"},"Add support for ",(0,l.kt)("inlineCode",{parentName:"li"},"-cover")," + integration test code coverage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7415"},"(#7415)")),(0,l.kt)("li",{parentName:"ul"},"Bump kube-router version to fix a bug when a port name is used ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7454"},"(#7454)")),(0,l.kt)("li",{parentName:"ul"},"Consistently use constant-time comparison of password hashes instead of bare password strings ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7455"},"(#7455)")),(0,l.kt)("li",{parentName:"ul"},"Bump containerd to v1.7.0 and move back into multicall binary ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7418"},"(#7418)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The embedded containerd version has been bumped to ",(0,l.kt)("inlineCode",{parentName:"li"},"v1.7.0-k3s1"),", and has been reintegrated into the main k3s binary for a significant savings in release artifact size."))),(0,l.kt)("li",{parentName:"ul"},"Adding PITS and Getdeck Beiboot as adopters thanks to Schille and Miw\u2026 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7524"},"(#7524)")),(0,l.kt)("li",{parentName:"ul"},"Bump helm-controller version for repo auth/ca support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7525"},"(#7525)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The embedded Helm controller now supports authenticating to chart repositories via credentials stored in a Secret, as well as passing repo CAs via ConfigMap."))),(0,l.kt)("li",{parentName:"ul"},"Bump containerd/runc to v1.7.1-k3s1/v1.1.7 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7533"},"(#7533)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The bundled containerd and runc versions have been bumped to v1.7.1-k3s1/v1.1.7"))),(0,l.kt)("li",{parentName:"ul"},"Wrap error stating that it is coming from netpol ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7539"},"(#7539)")),(0,l.kt)("li",{parentName:"ul"},"Add Rotation certification Check, remove func to restart agents ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7097"},"(#7097)")),(0,l.kt)("li",{parentName:"ul"},"Bump alpine from 3.17 to 3.18 in /package ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7550"},"(#7550)")),(0,l.kt)("li",{parentName:"ul"},"Bump alpine from 3.17 to 3.18 in /conformance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7551"},"(#7551)")),(0,l.kt)("li",{parentName:"ul"},"Add '-all' flag to apply to inactive systemd units ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7567"},"(#7567)")),(0,l.kt)("li",{parentName:"ul"},"Update to v1.27.2-k3s1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7575"},"(#7575)")),(0,l.kt)("li",{parentName:"ul"},"Fix iptables rules clean during upgrade ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7591"},"(#7591)")),(0,l.kt)("li",{parentName:"ul"},"Pin emicklei/go-restful to v3.9.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7597"},"(#7597)")),(0,l.kt)("li",{parentName:"ul"},"Add el9 selinux rpm ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7443"},"(#7443)")),(0,l.kt)("li",{parentName:"ul"},'Revert "Add el9 selinux rpm (#7443)" ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7608"},"(#7608)"))),(0,l.kt)("h2",{id:"release-v1271k3s1"},"Release v1.27.1+k3s1"),(0,l.kt)("p",null,"This release is K3S's first in the v1.27 line. This release updates Kubernetes to v1.27.1."),(0,l.kt)("p",null,"Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md#urgent-upgrade-notes"},"Urgent Upgrade Notes"),"."),(0,l.kt)("h3",{id:"changes-since-v1264k3s1"},"Changes since v1.26.4+k3s1:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes 1.27.1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7271"},"(#7271)")),(0,l.kt)("li",{parentName:"ul"},"V1.27.1 CLI Deprecation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7311"},"(#7311)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--flannel-backed=wireguard")," has been completely replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"--flannel-backend=wireguard-native")),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"k3s etcd-snapshot")," command will now print a help message, to save a snapshot use: ",(0,l.kt)("inlineCode",{parentName:"li"},"k3s etcd-snapshot save")),(0,l.kt)("li",{parentName:"ul"},"The following flags will now cause fatal errors (with full removal coming in v1.28.0):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--flannel-backed=ipsec"),": replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"--flannel-backend=wireguard-native")," ",(0,l.kt)("a",{parentName:"li",href:"https://docs.k3s.io/installation/network-options#migrating-from-wireguard-or-ipsec-to-wireguard-native"},"see docs for more info.")),(0,l.kt)("li",{parentName:"ul"},"Supplying multiple ",(0,l.kt)("inlineCode",{parentName:"li"},"--flannel-backend")," values is no longer valid. Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--flannel-conf")," instead."))))),(0,l.kt)("li",{parentName:"ul"},"Changed command -v redirection for iptables bin check ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7315"},"(#7315)")),(0,l.kt)("li",{parentName:"ul"},"Update channel server for april 2023 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7327"},"(#7327)")),(0,l.kt)("li",{parentName:"ul"},"Bump cri-dockerd ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7347"},"(#7347)")),(0,l.kt)("li",{parentName:"ul"},"Cleanup help messages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/pull/7369"},"(#7369)"))))}m.isMDXComponent=!0}}]);