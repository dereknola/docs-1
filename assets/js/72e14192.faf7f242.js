"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2814],{795:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"quick-start","title":"Quick-Start Guide","description":"This guide will help you quickly launch a cluster with default options. The installation section covers in greater detail how K3s can be set up.","source":"@site/docs/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/docs-k3s/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/quick-start.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"frontMatter":{"title":"Quick-Start Guide"},"sidebar":"mySidebar","previous":{"title":"K3s - Lightweight Kubernetes","permalink":"/docs-k3s/"},"next":{"title":"Installation","permalink":"/docs-k3s/installation/"}}');var i=s(4848),r=s(8453);const a={title:"Quick-Start Guide"},o=void 0,l={},c=[{value:"Install Script",id:"install-script",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This guide will help you quickly launch a cluster with default options. The ",(0,i.jsx)(t.a,{href:"/docs-k3s/installation/",children:"installation section"})," covers in greater detail how K3s can be set up."]}),"\n",(0,i.jsxs)(t.p,{children:["Make sure your nodes meet the ",(0,i.jsx)(t.a,{href:"/docs-k3s/installation/requirements",children:"requirements"})," before proceeding."]}),"\n",(0,i.jsxs)(t.p,{children:["For information on how K3s components work together, refer to the ",(0,i.jsx)(t.a,{href:"/docs-k3s/architecture",children:"architecture section."})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["New to Kubernetes? The official Kubernetes docs already have some great tutorials outlining the basics ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"install-script",children:"Install Script"}),"\n",(0,i.jsxs)(t.p,{children:["K3s provides an installation script that is a convenient way to install it as a service on systemd or openrc based systems. This script is available at ",(0,i.jsx)(t.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"}),". To install K3s using this method, just run:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,i.jsx)(t.p,{children:"After running this installation:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The K3s service will be configured to automatically restart after node reboots or if the process crashes or is killed"}),"\n",(0,i.jsxs)(t.li,{children:["Additional utilities will be installed, including ",(0,i.jsx)(t.code,{children:"kubectl"}),", ",(0,i.jsx)(t.code,{children:"crictl"}),", ",(0,i.jsx)(t.code,{children:"ctr"}),", ",(0,i.jsx)(t.code,{children:"k3s-killall.sh"}),", and ",(0,i.jsx)(t.code,{children:"k3s-uninstall.sh"})]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"kubeconfig"})," file will be written to ",(0,i.jsx)(t.code,{children:"/etc/rancher/k3s/k3s.yaml"})," and the kubectl installed by K3s will automatically use it"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A single-node server installation is a fully-functional Kubernetes cluster, including all the datastore, control-plane, kubelet, and container runtime components necessary to host workload pods. It is not necessary to add additional server or agents nodes, but you may want to do so to add additional capacity or redundancy to your cluster."}),"\n",(0,i.jsxs)(t.p,{children:["To install additional agent nodes and add them to the cluster, run the installation script with the ",(0,i.jsx)(t.code,{children:"K3S_URL"})," and ",(0,i.jsx)(t.code,{children:"K3S_TOKEN"})," environment variables. Here is an example showing how to join an agent:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Setting the ",(0,i.jsx)(t.code,{children:"K3S_URL"})," parameter causes the installer to configure K3s as an agent, instead of a server. The K3s agent will register with the K3s server listening at the supplied URL. The value to use for ",(0,i.jsx)(t.code,{children:"K3S_TOKEN"})," is stored at ",(0,i.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/node-token"})," on your server node."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Each machine must have a unique hostname. If your machines do not have unique hostnames, pass the ",(0,i.jsx)(t.code,{children:"K3S_NODE_NAME"})," environment variable and provide a value with a valid and unique hostname for each node."]})}),"\n",(0,i.jsxs)(t.p,{children:["If interested in having more server nodes, see ",(0,i.jsx)(t.a,{href:"/docs-k3s/datastore/ha-embedded",children:"High Availability Embedded etcd"})," and ",(0,i.jsx)(t.a,{href:"/docs-k3s/datastore/ha",children:"High Availability External DB"})," pages for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(6540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);