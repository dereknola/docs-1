"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9477],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(3117),r=(t(7294),t(3905));const l={title:"Cluster Load Balancer",weight:30},o=void 0,s={unversionedId:"datastore/cluster-loadbalancer",id:"datastore/cluster-loadbalancer",title:"Cluster Load Balancer",description:"This section describes how to install an external load balancer in front of a High Availability (HA) K3s cluster's server nodes. Two examples are provided: Nginx and HAProxy.",source:"@site/docs/datastore/cluster-loadbalancer.md",sourceDirName:"datastore",slug:"/datastore/cluster-loadbalancer",permalink:"/docs-k3s/datastore/cluster-loadbalancer",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/cluster-loadbalancer.md",tags:[],version:"current",lastUpdatedAt:1692998550,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{title:"Cluster Load Balancer",weight:30},sidebar:"mySidebar",previous:{title:"High Availability External DB",permalink:"/docs-k3s/datastore/ha"},next:{title:"Cluster Access",permalink:"/docs-k3s/cluster-access/"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Load Balancer",id:"setup-load-balancer",level:2},{value:"Nginx Load Balancer",id:"nginx-load-balancer",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},p=d("Tabs"),u=d("TabItem"),m={toc:c};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to install an external load balancer in front of a High Availability (HA) K3s cluster's server nodes. Two examples are provided: Nginx and HAProxy."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"External load-balancers should not be confused with the embedded ServiceLB, which is an embedded controller that allows for use of Kubernetes LoadBalancer Services without deploying a third-party load-balancer controller. For more details, see ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/networking/#service-load-balancer"},"Service Load Balancer"),". "),(0,r.kt)("p",{parentName:"admonition"},"External load-balancers can be used to provide a fixed registration address for registering nodes, or for external access to the Kubernetes API Server. For exposing LoadBalancer Services, external load-balancers can be used alongside or instead of ServiceLB, but in most cases, replacement load-balancer controllers such as MetalLB or Kube-VIP are a better choice.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"All nodes in this example are running Ubuntu 20.04."),(0,r.kt)("p",null,"For both examples, assume that a ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/datastore/ha-embedded"},"HA K3s cluster with embedded etcd")," has been installed on 3 nodes."),(0,r.kt)("p",null,"Each k3s server is configured with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/k3s/config.yaml\ntoken: lb-cluster-gd\ntls-san: 10.10.10.100\n")),(0,r.kt)("p",null,"The nodes have hostnames and IPs of: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"server-1: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.10.10.50")),(0,r.kt)("li",{parentName:"ul"},"server-2: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.10.10.51")),(0,r.kt)("li",{parentName:"ul"},"server-3: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.10.10.52"))),(0,r.kt)("p",null,"Two additional nodes for load balancing are configured with hostnames and IPs of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lb-1: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.10.10.98")),(0,r.kt)("li",{parentName:"ul"},"lb-2: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.10.10.99"))),(0,r.kt)("p",null,"Three additional nodes exist with hostnames and IPs of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"agent-1: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.10.10.101")),(0,r.kt)("li",{parentName:"ul"},"agent-2: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.10.10.102")),(0,r.kt)("li",{parentName:"ul"},"agent-3: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.10.10.103"))),(0,r.kt)("h2",{id:"setup-load-balancer"},"Setup Load Balancer"),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(u,{value:"HAProxy",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.haproxy.org/"},"HAProxy")," is an open source option that provides a TCP load balancer. It also supports HA for the load balancer itself, ensuring redundancy at all levels. See ",(0,r.kt)("a",{parentName:"p",href:"http://docs.haproxy.org/2.8/intro.html"},"HAProxy Documentation")," for more info."),(0,r.kt)("p",null,"Additionally, we will use KeepAlived to generate a virtual IP (VIP) that will be used to access the cluster. See ",(0,r.kt)("a",{parentName:"p",href:"https://www.keepalived.org/manpage.html"},"KeepAlived Documentation")," for more info."),(0,r.kt)("p",null,"1) Install HAProxy and KeepAlived:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install haproxy keepalived\n")),(0,r.kt)("p",null,"2) Add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/haproxy/haproxy.cfg")," on lb-1 and lb-2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"frontend k3s-frontend\n    bind *:6443\n    mode tcp\n    option tcplog\n    default_backend k3s-backend\n\nbackend k3s-backend\n    mode tcp\n    option tcp-check\n    balance roundrobin\n    default-server inter 10s downinter 5s\n    server server-1 10.10.10.50:6443 check\n    server server-2 10.10.10.51:6443 check\n    server server-3 10.10.10.52:6443 check\n")),(0,r.kt)("p",null,"3) Add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/keepalived/keepalived.conf")," on lb-1 and lb-2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vrrp_script chk_haproxy {\n    script 'killall -0 haproxy' # faster than pidof\n    interval 2\n}\n\nvrrp_instance haproxy-vip {\n   interface eth1\n    state <STATE> # MASTER on lb-1, BACKUP on lb-2\n    priority <PRIORITY> # 200 on lb-1, 100 on lb-2\n\n    virtual_router_id 51\n\n    virtual_ipaddress {\n        10.10.10.100/24\n    }\n\n    track_script {\n        chk_haproxy\n    }\n}\n")),(0,r.kt)("p",null,"6) Restart HAProxy and KeepAlived on lb-1 and lb-2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart haproxy\nsystemctl restart keepalived\n")),(0,r.kt)("p",null,"5) On agent-1, agent-2, and agent-3, run the following command to install k3s and join the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | K3S_TOKEN=lb-cluster-gd sh -s - agent --server https://10.10.10.100:6443\n")),(0,r.kt)("p",null,"You can now use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," from server node to interact with the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@server-1 $ k3s kubectl get nodes -A\nNAME       STATUS   ROLES                       AGE     VERSION\nagent-1    Ready    <none>                      32s     v1.27.3+k3s1\nagent-2    Ready    <none>                      20s     v1.27.3+k3s1\nagent-3    Ready    <none>                      9s      v1.27.3+k3s1\nserver-1   Ready    control-plane,etcd,master   4m22s   v1.27.3+k3s1\nserver-2   Ready    control-plane,etcd,master   3m58s   v1.27.3+k3s1\nserver-3   Ready    control-plane,etcd,master   3m12s   v1.27.3+k3s1\n"))),(0,r.kt)(u,{value:"Nginx",mdxType:"TabItem"},(0,r.kt)("h2",{id:"nginx-load-balancer"},"Nginx Load Balancer"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Nginx does not natively support a High Availability (HA) configuration. If setting up an HA cluster, having a single load balancer in front of K3s will reintroduce a single point of failure.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://nginx.org/"},"Nginx Open Source")," provides a TCP load balancer. See ",(0,r.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/load_balancing.html"},"Using nginx as HTTP load balancer")," for more info."),(0,r.kt)("p",null,"1) Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.conf")," file on lb-1 with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"events {}\n\nstream {\n  upstream k3s_servers {\n    server 10.10.10.50:6443;\n    server 10.10.10.51:6443;\n    server 10.10.10.52:6443;\n  }\n\n  server {\n    listen 6443;\n    proxy_pass k3s_servers;\n  }\n}\n")),(0,r.kt)("p",null,"2) Run the Nginx load balancer on lb-1:"),(0,r.kt)("p",null,"Using docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --restart unless-stopped \\\n    -v ${PWD}/nginx.conf:/etc/nginx/nginx.conf \\\n    -p 6443:6443 \\\n    nginx:stable\n")),(0,r.kt)("p",null,"Or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/"},"install nginx")," and then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp nginx.conf /etc/nginx/nginx.conf\nsystemctl start nginx\n")),(0,r.kt)("p",null,"3) On agent-1, agent-2, and agent-3, run the following command to install k3s and join the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | K3S_TOKEN=lb-cluster-gd sh -s - agent --server https://10.10.10.99:6443\n")),(0,r.kt)("p",null,"You can now use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," from server node to interact with the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@server1 $ k3s kubectl get nodes -A\nNAME       STATUS   ROLES                       AGE     VERSION\nagent-1    Ready    <none>                      30s     v1.27.3+k3s1\nagent-2    Ready    <none>                      22s     v1.27.3+k3s1\nagent-3    Ready    <none>                      13s     v1.27.3+k3s1\nserver-1   Ready    control-plane,etcd,master   4m49s   v1.27.3+k3s1\nserver-2   Ready    control-plane,etcd,master   3m58s   v1.27.3+k3s1\nserver-3   Ready    control-plane,etcd,master   3m16s   v1.27.3+k3s1\n")))))}k.isMDXComponent=!0}}]);