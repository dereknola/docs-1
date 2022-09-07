"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[902],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),i=n(4334),o=n(2389),l=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,g=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,a.useState)(b),C=T[0],O=T[1],E=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==C&&y.some((function(e){return e.value===j}))&&O(j)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==C&&(_(t),O(r),null!=f&&x(f,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var i,o=E.indexOf(e.currentTarget)-1;n=null!=(i=E[o])?i:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(5488),l=n(5162),s=["components"],u={title:"Private Registry Configuration",weight:55},c=void 0,p={unversionedId:"installation/private-registry",id:"installation/private-registry",title:"Private Registry Configuration",description:"Containerd can be configured to connect to private registries and use them to pull private images on the node.",source:"@site/docs/installation/private-registry.md",sourceDirName:"installation",slug:"/installation/private-registry",permalink:"/docs/installation/private-registry",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/private-registry.md",tags:[],version:"current",lastUpdatedAt:1662590680,formattedLastUpdatedAt:"Sep 7, 2022",frontMatter:{title:"Private Registry Configuration",weight:55},sidebar:"mySidebar",previous:{title:"Cluster Datastore Options",permalink:"/docs/installation/datastore"},next:{title:"Air-Gap Install",permalink:"/docs/installation/airgap"}},d={},m=[{value:"Registries Configuration File",id:"registries-configuration-file",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"Rewrites",id:"rewrites",level:4},{value:"Configs",id:"configs",level:3},{value:"With TLS",id:"with-tls",level:3},{value:"Without TLS",id:"without-tls",level:3},{value:"Adding Images to the Private Registry",id:"adding-images-to-the-private-registry",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Containerd can be configured to connect to private registries and use them to pull private images on the node."),(0,i.kt)("p",null,"Upon startup, K3s will check to see if a ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file exists at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/")," and instruct containerd to use any registries defined in the file. If you wish to use a private registry, then you will need to create this file as root on each node that will be using the registry."),(0,i.kt)("p",null,"Note that server nodes are schedulable by default. If you have not tainted the server nodes and will be running workloads on them, please ensure you also create the ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file on each server as well."),(0,i.kt)("p",null,"Configuration in containerd can be used to connect to a private registry with a TLS connection and with registries that enable authentication as well. The following section will explain the ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file and give different examples of using private registry configuration in K3s."),(0,i.kt)("h2",{id:"registries-configuration-file"},"Registries Configuration File"),(0,i.kt)("p",null,"The file consists of two main sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mirrors"),(0,i.kt)("li",{parentName:"ul"},"configs")),(0,i.kt)("h3",{id:"mirrors"},"Mirrors"),(0,i.kt)("p",null,"Mirrors is a directive that defines the names and endpoints of the private registries, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mirrors:\n  mycustomreg.com:\n    endpoint:\n      - "https://mycustomreg.com:5000"\n')),(0,i.kt)("p",null,"Each mirror must have a name and set of endpoints. When pulling an image from a registry, containerd will try these endpoint URLs one by one, and use the first working one."),(0,i.kt)("h4",{id:"rewrites"},"Rewrites"),(0,i.kt)("p",null,"Each mirror can have a set of rewrites. Rewrites can change the tag of an image based on a regular expression. This is useful if the organization/project structure in the mirror registry is different to the upstream one."),(0,i.kt)("p",null,"For example, the following configuration would transparently pull the image ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.example.com:5000/mirrorproject/rancher-images/coredns-coredns:1.6.3"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n')),(0,i.kt)("p",null,"The image will still be stored under the original name so that a ",(0,i.kt)("inlineCode",{parentName:"p"},"crictl image ls")," will show ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," as available on the node, even though the image was pulled from the mirrored registry with a different name."),(0,i.kt)("h3",{id:"configs"},"Configs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"configs")," section defines the TLS and credential configuration for each mirror. For each mirror you can define ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"tls"),". "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tls")," part consists of:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Directive"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cert_file")),(0,i.kt)("td",{parentName:"tr",align:null},"The client certificate path that will be used to authenticate with the registry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"key_file")),(0,i.kt)("td",{parentName:"tr",align:null},"The client key path that will be used to authenticate with the registry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ca_file")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the CA certificate path to be used to verify the registry's server cert file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"insecure_skip_verify")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean that defines if TLS verification should be skipped for the registry")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," part consists of either username/password or authentication token:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Directive"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},"user name of the private registry basic auth")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:null},"user password of the private registry basic auth")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"auth")),(0,i.kt)("td",{parentName:"tr",align:null},"authentication token of the private registry basic auth")))),(0,i.kt)("p",null,"Below are basic examples of using private registries in different modes:"),(0,i.kt)("h3",{id:"with-tls"},"With TLS"),(0,i.kt)("p",null,"Below are examples showing how you may configure ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml")," on each node when using TLS."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"With Authentication",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n'))),(0,i.kt)(l.Z,{value:"Without Authentication",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n')))),(0,i.kt)("h3",{id:"without-tls"},"Without TLS"),(0,i.kt)("p",null,"Below are examples showing how you may configure ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml")," on each node when ",(0,i.kt)("em",{parentName:"p"},"not")," using TLS."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"With Authentication",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n'))),(0,i.kt)(l.Z,{value:"Without Authentication",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\n')))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In case of no TLS communication, you need to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," for the endpoints, otherwise it will default to https.")),(0,i.kt)("p",null,"In order for the registry changes to take effect, you need to restart K3s on each node."),(0,i.kt)("h2",{id:"adding-images-to-the-private-registry"},"Adding Images to the Private Registry"),(0,i.kt)("p",null,"First, obtain the k3s-images.txt file from GitHub for the release you are working with.\nPull the K3s images listed on the k3s-images.txt file from docker.io"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker pull docker.io/rancher/coredns-coredns:1.6.3")),(0,i.kt)("p",null,"Then, retag the images to the private registry."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker tag coredns-coredns:1.6.3 mycustomreg:5000/coredns-coredns")),(0,i.kt)("p",null,"Last, push the images to the private registry."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker push mycustomreg.com:5000/coredns-coredns")))}f.isMDXComponent=!0}}]);