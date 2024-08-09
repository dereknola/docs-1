"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9654],{5706:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(5893),s=n(1151);const i={title:"Air-Gap Install"},t=void 0,l={id:"installation/airgap",title:"Air-Gap Install",description:"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/airgap.md",sourceDirName:"installation",slug:"/installation/airgap",permalink:"/docs-k3s/kr/installation/airgap",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/airgap.md",tags:[],version:"current",lastUpdatedAt:1723230876e3,frontMatter:{title:"Air-Gap Install"},sidebar:"mySidebar",previous:{title:"Embedded Registry Mirror",permalink:"/docs-k3s/kr/installation/registry-mirror"},next:{title:"Managing Server Roles",permalink:"/docs-k3s/kr/installation/server-roles"}},o={},d=[{value:"Load Images",id:"load-images",level:2},{value:"Private Registry Method",id:"private-registry-method",level:3},{value:"Create the Registry YAML and Push Images",id:"create-the-registry-yaml-and-push-images",level:4},{value:"Manually Deploy Images Method",id:"manually-deploy-images-method",level:3},{value:"Prepare the Images Directory and Airgap Image Tarball",id:"prepare-the-images-directory-and-airgap-image-tarball",level:4},{value:"Embedded Registry Mirror",id:"embedded-registry-mirror",level:3},{value:"Install K3s",id:"install-k3s",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Binaries",id:"binaries",level:4},{value:"Default Network Route",id:"default-network-route",level:4},{value:"SELinux RPM",id:"selinux-rpm",level:4},{value:"Installing K3s in an Air-Gapped Environment",id:"installing-k3s-in-an-air-gapped-environment",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Install Script Method",id:"install-script-method",level:3},{value:"Automated Upgrades Method",id:"automated-upgrades-method",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{TabItem:n,Tabs:i}=r;return n||u("TabItem",!0),i||u("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters."}),"\n",(0,a.jsx)(r.h2,{id:"load-images",children:"Load Images"}),"\n",(0,a.jsx)(r.h3,{id:"private-registry-method",children:"Private Registry Method"}),"\n",(0,a.jsx)(r.p,{children:"These steps assume you have already created nodes in your air-gap environment,\nare using the bundled containerd as the container runtime,\nand have a OCI-compliant private registry available in your environment."}),"\n",(0,a.jsxs)(r.p,{children:["If you have not yet set up a private Docker registry, refer to the ",(0,a.jsx)(r.a,{href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry",children:"official Registry documentation"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"create-the-registry-yaml-and-push-images",children:"Create the Registry YAML and Push Images"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["Obtain the images archive for your architecture from the ",(0,a.jsx)(r.a,{href:"https://github.com/k3s-io/k3s/releases",children:"releases"})," page for the version of K3s you will be running."]}),"\n",(0,a.jsxs)(r.li,{children:["Use ",(0,a.jsx)(r.code,{children:"docker image load k3s-airgap-images-amd64.tar.zst"})," to import images from the tar file into docker."]}),"\n",(0,a.jsxs)(r.li,{children:["Use ",(0,a.jsx)(r.code,{children:"docker tag"})," and ",(0,a.jsx)(r.code,{children:"docker push"})," to retag and push the loaded images to your private registry."]}),"\n",(0,a.jsxs)(r.li,{children:["Follow the ",(0,a.jsx)(r.a,{href:"/docs-k3s/kr/installation/private-registry",children:"Private Registry Configuration"})," guide to create and configure the ",(0,a.jsx)(r.code,{children:"registries.yaml"})," file."]}),"\n",(0,a.jsxs)(r.li,{children:["Proceed to the ",(0,a.jsx)(r.a,{href:"#install-k3s",children:"Install K3s"})," section below."]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"manually-deploy-images-method",children:"Manually Deploy Images Method"}),"\n",(0,a.jsx)(r.p,{children:"These steps assume you have already created nodes in your air-gap environment,\nare using the bundled containerd as the container runtime,\nand cannot or do not want to use a private registry."}),"\n",(0,a.jsx)(r.p,{children:"This method requires you to manually deploy the necessary images to each node, and is appropriate for edge deployments where running a private registry is not practical."}),"\n",(0,a.jsx)(r.h4,{id:"prepare-the-images-directory-and-airgap-image-tarball",children:"Prepare the Images Directory and Airgap Image Tarball"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["Obtain the images archive for your architecture from the ",(0,a.jsx)(r.a,{href:"https://github.com/k3s-io/k3s/releases",children:"releases"})," page for the version of K3s you will be running."]}),"\n",(0,a.jsx)(r.li,{children:"Download the images archive to the agent's images directory, for example:"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo curl -L -O /var/lib/rancher/k3s/agent/images/k3s-airgap-images-amd64.tar.zst https://github.com/k3s-io/k3s/releases/download/v1.29.1-rc2%2Bk3s1/k3s-airgap-images-amd64.tar.zst\n"})}),"\n",(0,a.jsxs)(r.ol,{start:"3",children:["\n",(0,a.jsxs)(r.li,{children:["Proceed to the ",(0,a.jsx)(r.a,{href:"#install-k3s",children:"Install K3s"})," section below."]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"embedded-registry-mirror",children:"Embedded Registry Mirror"}),"\n",(0,a.jsx)(r.admonition,{title:"Version Gate",type:"info",children:(0,a.jsx)(r.p,{children:"The Embedded Registry Mirror is available as an experimental feature as of January 2024 releases: v1.26.13+k3s1, v1.27.10+k3s1, v1.28.6+k3s1, v1.29.1+k3s1"})}),"\n",(0,a.jsx)(r.p,{children:"K3s includes an embedded distributed OCI-compliant registry mirror.\nWhen enabled and properly configured, images available in the containerd image store on any node\ncan be pulled by other cluster members without access to an external image registry."}),"\n",(0,a.jsxs)(r.p,{children:["The mirrored images may be sourced from an upstream registry, registry mirror, or airgap image tarball.\nFor more information on enabling the embedded distributed registry mirror, see the ",(0,a.jsx)(r.a,{href:"/docs-k3s/kr/installation/registry-mirror",children:"Embedded Registry Mirror"})," documentation."]}),"\n",(0,a.jsx)(r.h2,{id:"install-k3s",children:"Install K3s"}),"\n",(0,a.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(r.p,{children:["Before installing K3s, complete the ",(0,a.jsx)(r.a,{href:"#private-registry-method",children:"Private Registry Method"})," or the ",(0,a.jsx)(r.a,{href:"#manually-deploy-images-method",children:"Manually Deploy Images Method"})," above to prepopulate the images that K3s needs to install."]}),"\n",(0,a.jsx)(r.h4,{id:"binaries",children:"Binaries"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Download the K3s binary from the ",(0,a.jsx)(r.a,{href:"https://github.com/k3s-io/k3s/releases",children:"releases"})," page, matching the same version used to get the airgap images. Place the binary in ",(0,a.jsx)(r.code,{children:"/usr/local/bin"})," on each air-gapped node and ensure it is executable."]}),"\n",(0,a.jsxs)(r.li,{children:["Download the K3s install script at ",(0,a.jsx)(r.a,{href:"https://get.k3s.io",children:"get.k3s.io"}),". Place the install script anywhere on each air-gapped node, and name it ",(0,a.jsx)(r.code,{children:"install.sh"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"default-network-route",children:"Default Network Route"}),"\n",(0,a.jsx)(r.p,{children:"If your nodes do not have an interface with a default route, a default route must be configured; even a black-hole route via a dummy interface will suffice. K3s requires a default route in order to auto-detect the node's primary IP, and for kube-proxy ClusterIP routing to function properly. To add a dummy route, do the following:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"ip link add dummy0 type dummy\nip link set dummy0 up\nip addr add 203.0.113.254/31 dev dummy0\nip route add default via 203.0.113.255 dev dummy0 metric 1000\n"})}),"\n",(0,a.jsxs)(r.p,{children:["When running the K3s script with the ",(0,a.jsx)(r.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD"})," environment variable, K3s will use the local version of the script and binary."]}),"\n",(0,a.jsx)(r.h4,{id:"selinux-rpm",children:"SELinux RPM"}),"\n",(0,a.jsxs)(r.p,{children:["If you intend to deploy K3s with SELinux enabled, you will need also install the appropriate k3s-selinux RPM on all nodes. The latest version of the RPM can be found ",(0,a.jsx)(r.a,{href:"https://github.com/k3s-io/k3s-selinux/releases/latest",children:"here"}),". For example, on CentOS 8:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"On internet accessible machine:\ncurl -LO https://github.com/k3s-io/k3s-selinux/releases/download/v1.4.stable.1/k3s-selinux-1.4-1.el8.noarch.rpm\n\n# Transfer RPM to air-gapped machine\nOn air-gapped machine:\nsudo yum install ./k3s-selinux-1.4-1.el8.noarch.rpm\n"})}),"\n",(0,a.jsxs)(r.p,{children:["See the ",(0,a.jsx)(r.a,{href:"/docs-k3s/kr/advanced#selinux-support",children:"SELinux"})," section for more information."]}),"\n",(0,a.jsx)(r.h3,{id:"installing-k3s-in-an-air-gapped-environment",children:"Installing K3s in an Air-Gapped Environment"}),"\n",(0,a.jsx)(r.p,{children:"You can install K3s on one or more servers as described below."}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsxs)(n,{value:"Single Server Configuration",default:!0,children:[(0,a.jsx)(r.p,{children:"To install K3s on a single server, simply do the following on the server node:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n"})}),(0,a.jsx)(r.p,{children:"To add additional agents, do the following on each agent node:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://<SERVER_IP>:6443 K3S_TOKEN=<YOUR_TOKEN> ./install.sh\n"})}),(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["The token from the server is typically found at ",(0,a.jsx)(r.code,{children:"/var/lib/rancher/k3s/server/token"}),"."]})})]}),(0,a.jsxs)(n,{value:"High Availability Configuration",default:!0,children:[(0,a.jsxs)(r.p,{children:["Reference the ",(0,a.jsx)(r.a,{href:"/docs-k3s/kr/datastore/ha",children:"High Availability with an External DB"})," or ",(0,a.jsx)(r.a,{href:"/docs-k3s/kr/datastore/ha-embedded",children:"High Availability with Embedded DB"})," guides. You will be tweaking install commands so you specify ",(0,a.jsx)(r.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD=true"})," and run your install script locally instead of via curl. You will also utilize ",(0,a.jsx)(r.code,{children:"INSTALL_K3S_EXEC='args'"})," to supply any arguments to k3s."]}),(0,a.jsx)(r.p,{children:"For example, step two of the High Availability with an External DB guide mentions the following:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n'})}),(0,a.jsx)(r.p,{children:"Instead, you would modify such examples like below:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server --token=SECRET' \\\nK3S_DATASTORE_ENDPOINT='mysql://username:password@tcp(hostname:3306)/database-name' \\\n./install.sh\n"})})]})]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["K3s's ",(0,a.jsx)(r.code,{children:"--resolv-conf"})," flag is passed through to the kubelet, which may help with configuring pod DNS resolution in air-gap networks where the host does not have upstream nameservers configured."]})}),"\n",(0,a.jsx)(r.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,a.jsx)(r.h3,{id:"install-script-method",children:"Install Script Method"}),"\n",(0,a.jsx)(r.p,{children:"Upgrading an air-gap environment can be accomplished in the following manner:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["Download the new air-gap images (tar file) from the ",(0,a.jsx)(r.a,{href:"https://github.com/k3s-io/k3s/releases",children:"releases"})," page for the version of K3s you will be upgrading to. Place the tar in the ",(0,a.jsx)(r.code,{children:"/var/lib/rancher/k3s/agent/images/"})," directory on each\nnode. Delete the old tar file."]}),"\n",(0,a.jsxs)(r.li,{children:["Copy and replace the old K3s binary in ",(0,a.jsx)(r.code,{children:"/usr/local/bin"})," on each node. Copy over the install script at ",(0,a.jsx)(r.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"})," (as it is possible it has changed since the last release). Run the script again just as you had done in the past\nwith the same environment variables."]}),"\n",(0,a.jsx)(r.li,{children:"Restart the K3s service (if not restarted automatically by installer)."}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"automated-upgrades-method",children:"Automated Upgrades Method"}),"\n",(0,a.jsxs)(r.p,{children:["K3s supports ",(0,a.jsx)(r.a,{href:"/docs-k3s/kr/upgrades/automated",children:"automated upgrades"}),". To enable this in air-gapped environments, you must ensure the required images are available in your private registry."]}),"\n",(0,a.jsxs)(r.p,{children:["You will need the version of rancher/k3s-upgrade that corresponds to the version of K3s you intend to upgrade to. Note, the image tag replaces the ",(0,a.jsx)(r.code,{children:"+"})," in the K3s release with a ",(0,a.jsx)(r.code,{children:"-"})," because Docker images do not support ",(0,a.jsx)(r.code,{children:"+"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["You will also need the versions of system-upgrade-controller and kubectl that are specified in the system-upgrade-controller manifest YAML that you will deploy. Check for the latest release of the system-upgrade-controller ",(0,a.jsx)(r.a,{href:"https://github.com/rancher/system-upgrade-controller/releases/latest",children:"here"})," and download the system-upgrade-controller.yaml to determine the versions you need to push to your private registry. For example, in release v0.4.0 of the system-upgrade-controller, these images are specified in the manifest YAML:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"rancher/system-upgrade-controller:v0.4.0\nrancher/kubectl:v0.17.0\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Once you have added the necessary rancher/k3s-upgrade, rancher/system-upgrade-controller, and rancher/kubectl images to your private registry, follow the ",(0,a.jsx)(r.a,{href:"/docs-k3s/kr/upgrades/automated",children:"automated upgrades"})," guide."]})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function u(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>t});var a=n(7294);const s={},i=a.createContext(s);function t(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);