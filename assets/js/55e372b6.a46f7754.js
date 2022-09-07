"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[126],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8916:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),o=["components"],s={title:"Disable Components Flags",weight:60},i=void 0,c={unversionedId:"installation/disable-flags",id:"installation/disable-flags",title:"Disable Components Flags",description:"Starting the K3s server with --cluster-init will run all control plane components, including the api server, controller manager, scheduler, and etcd. However, you can run server nodes with certain components and exclude others; the following sections will explain how to do that.",source:"@site/docs/installation/disable-flags.md",sourceDirName:"installation",slug:"/installation/disable-flags",permalink:"/docs/installation/disable-flags",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/disable-flags.md",tags:[],version:"current",lastUpdatedAt:1662590680,formattedLastUpdatedAt:"Sep 7, 2022",frontMatter:{title:"Disable Components Flags",weight:60},sidebar:"mySidebar",previous:{title:"Air-Gap Install",permalink:"/docs/installation/airgap"},next:{title:"Kubernetes Dashboard",permalink:"/docs/installation/kube-dashboard"}},d={},u=[{value:"ETCD Only Nodes",id:"etcd-only-nodes",level:2},{value:"Disable ETCD",id:"disable-etcd",level:2},{value:"Re-enabling control components",id:"re-enabling-control-components",level:3},{value:"Add disable flags using the config file",id:"add-disable-flags-using-the-config-file",level:2},{value:"Disable components using .skip files",id:"disable-components-using-skip-files",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Starting the K3s server with ",(0,l.kt)("inlineCode",{parentName:"p"},"--cluster-init")," will run all control plane components, including the api server, controller manager, scheduler, and etcd. However, you can run server nodes with certain components and exclude others; the following sections will explain how to do that."),(0,l.kt)("h2",{id:"etcd-only-nodes"},"ETCD Only Nodes"),(0,l.kt)("p",null,"This document assumes you run K3s server with embedded etcd by passing ",(0,l.kt)("inlineCode",{parentName:"p"},"--cluster-init")," flag to the server process."),(0,l.kt)("p",null,"To run a K3s server with only etcd components you can pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable-apiserver --disable-controller-manager --disable-scheduler")," flags to k3s, this will result in running a server node with only etcd, for example to run K3s server with those flags:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://get.k3s.io | sh -s - server --cluster-init --disable-apiserver --disable-controller-manager --disable-scheduler\n")),(0,l.kt)("p",null,"You can join other nodes to the cluster normally after that."),(0,l.kt)("h2",{id:"disable-etcd"},"Disable ETCD"),(0,l.kt)("p",null,"You can also disable etcd from a server node and this will result in a k3s server running control components other than etcd, that can be accomplished by running k3s server with flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable-etcd")," for example to join another node with only control components to the etcd node created in the previous section:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://get.k3s.io | sh -s - server --token <token> --disable-etcd --server https://<etcd-only-node>:6443 \n")),(0,l.kt)("p",null,"The end result will be a two nodes one of them is etcd only node and the other one is controlplane only node, if you check the node list you should see something like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME              STATUS   ROLES                       AGE     VERSION\nip-172-31-13-32   Ready    etcd                        5h39m   v1.20.4+k3s1\nip-172-31-14-69   Ready    control-plane,master        5h39m   v1.20.4+k3s1\n")),(0,l.kt)("p",null,"Note that you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," commands only on the k3s server that has the api running, and you can't run ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," commands on etcd only nodes."),(0,l.kt)("h3",{id:"re-enabling-control-components"},"Re-enabling control components"),(0,l.kt)("p",null,"In both cases you can re-enable any component that you already disabled simply by removing the corresponding flag that disables them, so for example if you want to revert the etcd only node back to a full k3s server with all components you can just remove the following 3 flags ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable-apiserver --disable-controller-manager --disable-scheduler"),", so in our example to revert back node ",(0,l.kt)("inlineCode",{parentName:"p"},"ip-172-31-13-32")," to a full k3s server you can just re-run the curl command without the disable flags:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://get.k3s.io | sh -s - server --cluster-init\n")),(0,l.kt)("p",null,"you will notice that all components started again and you can run kubectl commands again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME              STATUS   ROLES                       AGE     VERSION\nip-172-31-13-32   Ready    control-plane,etcd,master   5h45m   v1.20.4+k3s1\nip-172-31-14-69   Ready    control-plane,master        5h45m   v1.20.4+k3s1\n")),(0,l.kt)("p",null,"Notice that role labels has been re-added to the node ",(0,l.kt)("inlineCode",{parentName:"p"},"ip-172-31-13-32")," with the correct labels (control-plane,etcd,master)."),(0,l.kt)("h2",{id:"add-disable-flags-using-the-config-file"},"Add disable flags using the config file"),(0,l.kt)("p",null,"In any of the previous situations you can use the config file instead of running the curl commands with the associated flags, for example to run an etcd only node you can add the following options to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ndisable-apiserver: true\ndisable-controller-manager: true\ndisable-scheduler: true\ncluster-init: true\n")),(0,l.kt)("p",null,"and then start K3s using the curl command without any arguents:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://get.k3s.io | sh -\n")),(0,l.kt)("h2",{id:"disable-components-using-skip-files"},"Disable components using .skip files"),(0,l.kt)("p",null,"For any yaml file under ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," (coredns, traefik, local-storeage, etc.) you can add a ",(0,l.kt)("inlineCode",{parentName:"p"},".skip")," file which will cause K3s to not apply the associated yaml file.\nFor example, adding ",(0,l.kt)("inlineCode",{parentName:"p"},"traefik.yaml.skip")," in the manifests directory will cause K3s to skip ",(0,l.kt)("inlineCode",{parentName:"p"},"traefik.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls /var/lib/rancher/k3s/server/manifests\nccm.yaml      local-storage.yaml  rolebindings.yaml  traefik.yaml.skip\ncoredns.yaml  traefik.yaml\n\n$ kubectl get pods -A\nNAMESPACE     NAME                                     READY   STATUS    RESTARTS   AGE\nkube-system   local-path-provisioner-64ffb68fd-xx98j   1/1     Running   0          74s\nkube-system   metrics-server-5489f84d5d-7zwkt          1/1     Running   0          74s\nkube-system   coredns-85cb69466-vcq7j                  1/1     Running   0          74s\n")))}m.isMDXComponent=!0}}]);