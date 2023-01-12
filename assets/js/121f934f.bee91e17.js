"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[964],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(4334),l=n(2389),o=n(7392),s=n(7094),u=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,k=e.values,h=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),y=w.tabGroupChoices,C=w.setTabGroupChoices,I=(0,r.useState)(N),P=I[0],T=I[1],E=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=y[h];null!=_&&_!==P&&b.some((function(e){return e.value===_}))&&T(_)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==P&&(O(t),T(a),null!=h&&C(h,String(a)))},q=function(e){var t,n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var i,l=E.indexOf(e.currentTarget)-1;n=null!=(i=E[l])?i:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return E.push(e)},onKeyDown:q,onClick:x},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=n(5488),o=n(5162),s=["components"],u={title:"Network Options",weight:25},d=void 0,c={unversionedId:"installation/network-options",id:"installation/network-options",title:"Network Options",description:"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6.",source:"@site/docs/installation/network-options.md",sourceDirName:"installation",slug:"/installation/network-options",permalink:"/docs-k3s/installation/network-options",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/network-options.md",tags:[],version:"current",lastUpdatedAt:1673482048,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"Network Options",weight:25},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/docs-k3s/installation/configuration"},next:{title:"High Availability with an External DB",permalink:"/docs-k3s/installation/ha"}},p={},m=[{value:"Flannel Options",id:"flannel-options",level:2},{value:"Migrating from <code>wireguard</code> or <code>ipsec</code> to <code>wireguard-native</code>",id:"migrating-from-wireguard-or-ipsec-to-wireguard-native",level:3},{value:"Custom CNI",id:"custom-cni",level:2},{value:"Dual-stack installation",id:"dual-stack-installation",level:2},{value:"Single-stack IPv6 installation",id:"single-stack-ipv6-installation",level:2},{value:"Distributed hybrid or multicloud cluster",id:"distributed-hybrid-or-multicloud-cluster",level:2}],k={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Please reference the ",(0,i.kt)("a",{parentName:"p",href:"/docs-k3s/networking/"},"Networking")," page for information about CoreDNS, Traefik, and the Service LB.")),(0,i.kt)("h2",{id:"flannel-options"},"Flannel Options"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel/blob/master/README.md"},"Flannel")," is a lightweight provider of layer 3 network fabric that implements the Kubernetes Container Network Interface (CNI). It is what is commonly referred to as a CNI Plugin."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flannel options can only be set on server nodes, and must be identical on all servers in the cluster."),(0,i.kt)("li",{parentName:"ul"},"The default backend for Flannel is ",(0,i.kt)("inlineCode",{parentName:"li"},"vxlan"),". To enable encryption, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"wireguard-native")," backend."),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"vxlan")," on Rasperry Pi with recent versions of Ubuntu requires ",(0,i.kt)("a",{parentName:"li",href:"/docs-k3s/advanced/#raspberry-pi"},"additional preparation"),"."),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"wireguard-native")," as the Flannel backend may require additional modules on some Linux distributions. Please see the ",(0,i.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/"},"WireGuard Install Guide")," for details.\nThe WireGuard install steps will ensure the appropriate kernel modules are installed for your operating system.\nYou must ensure that WireGuard kernel modules are available on every node, both servers and agents, before attempting to use the WireGuard Flannel backend.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CLI Flag and Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-ipv6-masq")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply masquerading rules to IPv6 traffic (default for IPv4). Only applies on dual-stack or IPv6-only clusters. Compatible with any Flannel backend other than ",(0,i.kt)("inlineCode",{parentName:"td"},"none"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-external-ip")),(0,i.kt)("td",{parentName:"tr",align:null},"Use node external IP addresses as the destination for Flannel traffic, instead of internal IPs. Only applies when --node-external-ip is set on a node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=vxlan")),(0,i.kt)("td",{parentName:"tr",align:null},"Use VXLAN to encapsulate the packets. May require additional kernel modules on Raspberry Pi.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=host-gw")),(0,i.kt)("td",{parentName:"tr",align:null},"Use IP routes to pod subnets via node IPs. Requires direct layer 2 connectivity between all nodes in the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard-native")),(0,i.kt)("td",{parentName:"tr",align:null},"Use WireGuard to encapsulate and encrypt network traffic. May require additional kernel modules.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=ipsec")),(0,i.kt)("td",{parentName:"tr",align:null},"Use strongSwan IPSec via the ",(0,i.kt)("inlineCode",{parentName:"td"},"swanctl")," binary to encrypt network traffic. (Deprecated; will be removed in v1.27.0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard")),(0,i.kt)("td",{parentName:"tr",align:null},"Use WireGuard via the ",(0,i.kt)("inlineCode",{parentName:"td"},"wg")," binary to encrypt network traffic. May require additional kernel modules and configuration. (Deprecated; will be removed in v1.26.0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=none")),(0,i.kt)("td",{parentName:"tr",align:null},"Disable Flannel entirely.")))),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"K3s no longer includes strongSwan ",(0,i.kt)("inlineCode",{parentName:"p"},"swanctl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"charon")," binaries starting with the 2022-12 releases (v1.26.0+k3s1, v1.25.5+k3s1, v1.24.9+k3s1, v1.23.15+k3s1). Please install the correct packages on your node before upgrading to or installing these releases if you want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ipsec")," backend.")),(0,i.kt)("h3",{id:"migrating-from-wireguard-or-ipsec-to-wireguard-native"},"Migrating from ",(0,i.kt)("inlineCode",{parentName:"h3"},"wireguard")," or ",(0,i.kt)("inlineCode",{parentName:"h3"},"ipsec")," to ",(0,i.kt)("inlineCode",{parentName:"h3"},"wireguard-native")),(0,i.kt)("p",null,"The legacy ",(0,i.kt)("inlineCode",{parentName:"p"},"wireguard")," backend requires installation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wg")," tool on the host. This backend will be removed in K3s v1.26, in favor of ",(0,i.kt)("inlineCode",{parentName:"p"},"wireguard-native")," backend, which directly interfaces with the kernel."),(0,i.kt)("p",null,"The legacy ",(0,i.kt)("inlineCode",{parentName:"p"},"ipsec")," backend requires installation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"swanctl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"charon")," binaries on the host. This backend will be removed in K3s v1.27, in favor of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wireguard-native")," backend."),(0,i.kt)("p",null,"We recommend that users migrate to the new backend as soon as possible. The migration requires a short period of downtime while nodes come up with the new configuration. You should follow these two steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the K3s config on all server nodes. If using config files, the ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/config.yaml")," should include ",(0,i.kt)("inlineCode",{parentName:"li"},"flannel-backend: wireguard-native")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"flannel-backend: wireguard")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"flannel-backend: ipsec"),". If you are configuring K3s via CLI flags in the systemd unit, the equivalent flags should be changed."),(0,i.kt)("li",{parentName:"ol"},"Reboot all nodes, starting with the servers.")),(0,i.kt)("h2",{id:"custom-cni"},"Custom CNI"),(0,i.kt)("p",null,"Start K3s with ",(0,i.kt)("inlineCode",{parentName:"p"},"--flannel-backend=none")," and install your CNI of choice. Most CNI plugins come with their own network policy engine, so it is recommended to set ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," as well to avoid conflicts. IP Forwarding should be enabled for Canal and Calico; please reference the steps below."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Canal",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.projectcalico.org/"},"Project Calico Docs")," website. Follow the steps to install Canal. Modify the Canal YAML so that IP forwarding is allowed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"container_settings")," section, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n  "allow_ip_forwarding": true\n}\n')),(0,i.kt)("p",null,"Apply the Canal YAML."),(0,i.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-canal.conflist\n")),(0,i.kt)("p",null,"You should see that IP forwarding is set to true.")),(0,i.kt)(o.Z,{value:"Calico",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/reference/cni-plugin/configuration"},"Calico CNI Plugins Guide"),". Modify the Calico YAML so that IP forwarding is allowed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"container_settings")," section, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n  "allow_ip_forwarding": true\n}\n')),(0,i.kt)("p",null,"Apply the Calico YAML."),(0,i.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-calico.conflist\n")),(0,i.kt)("p",null,"You should see that IP forwarding is set to true."))),(0,i.kt)("h2",{id:"dual-stack-installation"},"Dual-stack installation"),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Dual-stack networking is supported on K3s v1.21 and above.")),(0,i.kt)("p",null,"Dual-stack networking must be configured when the cluster is first created. It cannot be enabled on an existing cluster once it has been started as IPv4-only."),(0,i.kt)("p",null,"To enable dual-stack in K3s, you must provide valid dual-stack ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"service-cidr")," on all server nodes. This is an example of a valid configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--cluster-cidr=10.42.0.0/16,2001:cafe:42:0::/56 --service-cidr=10.43.0.0/16,2001:cafe:42:1::/112\n")),(0,i.kt)("p",null,"Note that you may configure any valid ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"service-cidr")," values, but the above masks are recommended. If you change the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," mask, you should also change the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size-ipv4")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size-ipv6")," values to match the planned pods per node and total node count. The largest supported ",(0,i.kt)("inlineCode",{parentName:"p"},"service-cidr")," mask is /12 for IPv4, and /112 for IPv6. Remember to allow ipv6 traffic if you are deploying in a public cloud."),(0,i.kt)("p",null,"If you are using a custom CNI plugin, i.e. a CNI plugin other than Flannel, the additional configuration may be required. Please consult your plugin's dual-stack documentation and verify if network policies can be enabled."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")," Kubernetes 1.24 and 1.25 include a bug that ignores the node IPv6 addresses if you have a dual-stack environment and you are not using the primary network interface for cluster traffic. To avoid this bug, add the following flag to both K3s servers and agents:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--kubelet-arg=node-ip=0.0.0.0"  # If you want to prioritize IPv6 traffic, use "::" instead of "0.0.0.0".\n')),(0,i.kt)("h2",{id:"single-stack-ipv6-installation"},"Single-stack IPv6 installation"),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Single-stack IPv6 clusters (clusters without IPv4) are supported on K3s v1.22 and above.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")," If your IPv6 default route is set by a router advertisement (RA), you will need to set the sysctl ",(0,i.kt)("inlineCode",{parentName:"p"},"net.ipv6.conf.all.accept_ra=2"),"; otherwise, the node will drop the default route once it expires. Be aware that accepting RAs could increase the risk of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/91507"},"man-in-the-middle attacks"),".")),(0,i.kt)("h2",{id:"distributed-hybrid-or-multicloud-cluster"},"Distributed hybrid or multicloud cluster"),(0,i.kt)("p",null,"A K3s cluster can still be deployed on nodes which use different private networks and are not directly connected (e.g. nodes in different public clouds). To achieve this, K3s sets a mesh of tunnels that become a VPN mesh. These nodes must have have an assigned IP through which they can be reached (e.g. a public IP). The server traffic will use a websocket tunnel and the data-plane traffic will use a wireguard tunnel."),(0,i.kt)("p",null,"To enable this type of deployment, you must add the following parameters on servers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip=<SERVER_EXTERNAL_IP> --flannel-backend=wireguard-native --flannel-external-ip\n")),(0,i.kt)("p",null,"and on agents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip=<AGENT_EXTERNAL_IP>\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," is the IP through which we can reach the server node and ",(0,i.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," is the IP through which we can reach the agent/worker node. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_URL")," config parameter in the agent/worker should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," to be able to connect to it. Remember to check the ",(0,i.kt)("a",{parentName:"p",href:"/docs-k3s/installation/requirements#networking"},"Networking Requirements")," and allow access to the listed ports on both internal and external addresses."),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," must have connectivity between them and are normally public IPs."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")," The latency between nodes will increase as external connectivity requires more hops. This will reduce the network performance and could also impact the health of the cluster if latency is too high.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")," Embedded etcd will not use external IPs for communication. If using embedded etcd; all server nodes must be reachable to each other via their private IPs.")))}h.isMDXComponent=!0}}]);