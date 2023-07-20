"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9166],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),k=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=k(r),u=l,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function u(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var k=2;k<a;k++)i[k]=r[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>k});var n=r(3117),l=(r(7294),r(3905));const a={title:"\ub124\ud2b8\uc6cc\ud0b9",weight:35},i=void 0,o={unversionedId:"networking/networking",id:"networking/networking",title:"\ub124\ud2b8\uc6cc\ud0b9",description:"\uc774 \ud398\uc774\uc9c0\ub294 CoreDNS, Traefik \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec, Klipper \uc11c\ube44\uc2a4 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uac00 K3s \ub0b4\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc744 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/networking/networking.md",sourceDirName:"networking",slug:"/networking/",permalink:"/docs-k3s/kr/networking/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/networking.md",tags:[],version:"current",lastUpdatedAt:1689875912,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{title:"\ub124\ud2b8\uc6cc\ud0b9",weight:35},sidebar:"mySidebar",previous:{title:"\ubcfc\ub968\uacfc \uc800\uc7a5\uc18c",permalink:"/docs-k3s/kr/storage/"},next:{title:"\ud5ec\ub984(Helm)",permalink:"/docs-k3s/kr/helm/"}},p={},k=[{value:"CoreDNS",id:"coredns",level:2},{value:"Traefik \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec",id:"traefik-\uc778\uadf8\ub808\uc2a4-\ucee8\ud2b8\ub864\ub7ec",level:2},{value:"\ub124\ud2b8\uc6cc\ud06c \uc815\ucc45 \ucee8\ud2b8\ub864\ub7ec (Network Policy Controller)",id:"\ub124\ud2b8\uc6cc\ud06c-\uc815\ucc45-\ucee8\ud2b8\ub864\ub7ec-network-policy-controller",level:2},{value:"\uc11c\ube44\uc2a4 \ub85c\ub4dc\ubc38\ub7f0\uc11c",id:"\uc11c\ube44\uc2a4-\ub85c\ub4dc\ubc38\ub7f0\uc11c",level:2},{value:"ServiceLB \uc791\ub3d9 \ubc29\uc2dd",id:"servicelb-\uc791\ub3d9-\ubc29\uc2dd",level:3},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:3},{value:"ServiceLB \ub178\ub4dc \uc120\ud0dd \uc81c\uc5b4\ud558\uae30",id:"servicelb-\ub178\ub4dc-\uc120\ud0dd-\uc81c\uc5b4\ud558\uae30",level:3},{value:"ServiceLB \ub178\ub4dc \ud480 \uc0dd\uc131\ud558\uae30",id:"servicelb-\ub178\ub4dc-\ud480-\uc0dd\uc131\ud558\uae30",level:3},{value:"ServiceLB \ube44\ud65c\uc131\ud654",id:"servicelb-\ube44\ud65c\uc131\ud654",level:3},{value:"\uc678\ubd80 \ud074\ub77c\uc6b0\ub4dc \ucee8\ud2b8\ub864\ub7ec \ub9e4\ub2c8\uc800 \ubc30\ud3ec\ud558\uae30",id:"\uc678\ubd80-\ud074\ub77c\uc6b0\ub4dc-\ucee8\ud2b8\ub864\ub7ec-\ub9e4\ub2c8\uc800-\ubc30\ud3ec\ud558\uae30",level:2},{value:"\ud638\uc2a4\ud2b8 \uc774\ub984\uc774 \uc5c6\ub294 \ub178\ub4dc",id:"\ud638\uc2a4\ud2b8-\uc774\ub984\uc774-\uc5c6\ub294-\ub178\ub4dc",level:2}],c={toc:k};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc774 \ud398\uc774\uc9c0\ub294 CoreDNS, Traefik \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec, Klipper \uc11c\ube44\uc2a4 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uac00 K3s \ub0b4\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Flannel \uad6c\uc131 \uc635\uc158 \ubc0f \ubc31\uc5d4\ub4dc \uc120\ud0dd\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc774\ub098 \uc790\uccb4 CNI \uc124\uc815 \ubc29\ubc95\uc740 ",(0,l.kt)("a",{parentName:"p",href:"/docs-k3s/kr/installation/network-options"},"\uc124\uce58 \ub124\ud2b8\uc6cc\ud06c \uc635\uc158")," \ud398\uc774\uc9c0\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,l.kt)("p",null,"K3s\ub97c \uc704\ud574 \uc5b4\ub5a4 \ud3ec\ud2b8\ub97c \uc5f4\uc5b4\uc57c \ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4\ub294 ",(0,l.kt)("a",{parentName:"p",href:"/docs-k3s/kr/installation/requirements#networking"},"\ub124\ud2b8\uc6cc\ud0b9 \uc694\uad6c \uc0ac\ud56d"),"\uc744 \ucc38\uc870\ud558\uc138\uc694."),(0,l.kt)("h2",{id:"coredns"},"CoreDNS"),(0,l.kt)("p",null,"CoreDNS\ub294 \uc11c\ubc84 \uc2dc\uc791 \uc2dc \uc790\ub3d9\uc73c\ub85c \ubc30\ud3ec\ub429\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\ub824\uba74 \ud074\ub7ec\uc2a4\ud130\uc758 \ubaa8\ub4e0 \uc11c\ubc84\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable=coredns")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uad6c\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"CoreDNS\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud074\ub7ec\uc2a4\ud130 DNS \uacf5\uae09\uc790\ub97c \uc9c1\uc811 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"traefik-\uc778\uadf8\ub808\uc2a4-\ucee8\ud2b8\ub864\ub7ec"},"Traefik \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),"\uc740 \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\ub97c \uc27d\uac8c \ubc30\ud3ec\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc9c4 \ucd5c\uc2e0 HTTP \uc5ed\ubc29\ud5a5 \ud504\ub85d\uc2dc \ubc0f \ub85c\ub4dc\ubc38\ub7f0\uc11c\uc785\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc124\uacc4, \ubc30\ud3ec \ubc0f \uc2e4\ud589\ud558\ub294 \ub3d9\uc548 \ub124\ud2b8\uc6cc\ud0b9 \ubcf5\uc7a1\uc131\uc744 \ub2e8\uc21c\ud654\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Traefik \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\ub294 \ud3ec\ud2b8 80\uacfc 443\uc744 \uc0ac\uc6a9\ud558\ub294 \ub85c\ub4dc\ubc38\ub7f0\uc11c \uc11c\ube44\uc2a4\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c ServiceLB\ub294 \ubaa8\ub4e0 \ud074\ub7ec\uc2a4\ud130 \uba64\ubc84\uc5d0 \uc774\ub7ec\ud55c \ud3ec\ud2b8\ub97c \ub178\ucd9c\ud558\ubbc0\ub85c \ub2e4\ub978 HostPort \ub610\ub294 NodePort \ud30c\ub4dc\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc11c\ubc84\ub97c \uc2dc\uc791\ud560 \ub54c \uae30\ubcf8\uc801\uc73c\ub85c Traefik\uc774 \ubc30\ud3ec\ub429\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("a",{parentName:"p",href:"/docs-k3s/kr/installation/packaged-components"},"\ud328\ud0a4\uc9c0 \ucef4\ud3ec\ub10c\ud2b8 \uad00\ub9ac"),"\ub97c \ucc38\uace0\ud558\uc138\uc694. \uae30\ubcf8 \uc124\uc815 \ud30c\uc77c\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik.yaml"),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"K3s\uac00 \uc2dc\uc791\ud560 \ub54c \uc774 \ud30c\uc77c\uc744 \uae30\ubcf8\uac12\uc73c\ub85c \ub300\uccb4\ud558\ubbc0\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"traefik.yaml")," \ud30c\uc77c\uc744 \uc218\ub3d9\uc73c\ub85c \ud3b8\uc9d1\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4. \ub300\uc2e0, ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests"),"\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," \ub9e4\ub2c8\ud398\uc2a4\ud2b8\ub97c \ucd94\uac00\ub85c \uc0dd\uc131\ud558\uc5ec Traefik\uc744 \uc0ac\uc6a9\uc790 \uc815\uc758\ud574\uc57c \ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uacfc \uc608\uc81c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"/docs-k3s/kr/helm/#customizing-packaged-components-with-helmchartconfig"},"HelmChartConfig \ud328\ud0a4\uc9c0 \ucef4\ud3ec\ub10c\ud2b8 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5"),"\uc744 \ucc38\uace0\ud558\uc138\uc694. \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uad6c\uc131 \uac12\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uc2dd ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-helm-chart/tree/master/traefik"},"Traefik \ud5ec\ub984 \uad6c\uc131 \ub9e4\uac1c\ubcc0\uc218"),"\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,l.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c Traefik\uc744 \uc81c\uac70\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable=traefik")," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uc11c\ubc84\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"K3s \ubc84\uc804 1.20 \uc774\ud558\uc5d0\ub294 Traefik v1\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4. K3s \ubc84\uc804 1.21 \uc774\uc0c1\uc740 \uae30\uc874\uc5d0 \uc124\uce58\ub41c Traefik v1\uc774 \ubc1c\uacac\ub418\uc9c0 \uc54a\ub294 \ud55c Traefik v2\ub97c \uc124\uce58\ud558\uba70, \uc774 \uacbd\uc6b0 Traefik\uc740 v2\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. K3s\uc5d0 \ud3ec\ud568\ub41c \ud2b9\uc815 Traefik \ubc84\uc804\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ud574\ub2f9 \ubc84\uc804\uc758 \ub9b4\ub9ac\uc2a4 \ub178\ud2b8\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,l.kt)("p",null,"\uc774\uc804 Traefik v1 \uc778\uc2a4\ud134\uc2a4\uc5d0\uc11c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub824\uba74 ",(0,l.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/migration/v1-to-v2/"},"Traefik \ubb38\uc11c")," \ubc0f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-migration-tool"},"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \ub3c4\uad6c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,l.kt)("h2",{id:"\ub124\ud2b8\uc6cc\ud06c-\uc815\ucc45-\ucee8\ud2b8\ub864\ub7ec-network-policy-controller"},"\ub124\ud2b8\uc6cc\ud06c \uc815\ucc45 \ucee8\ud2b8\ub864\ub7ec (Network Policy Controller)"),(0,l.kt)("p",null,"K3s\uc5d0\ub294 \uc784\ubca0\ub514\ub4dc \ub124\ud2b8\uc6cc\ud06c \uc815\ucc45 \ucee8\ud2b8\ub864\ub7ec\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uae30\ubcf8 \uad6c\ud604\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cloudnativelabs/kube-router"},"kube-router\uc758")," netpol \ucee8\ud2b8\ub864\ub7ec \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\uba70(\ub2e4\ub978 kube-router \uae30\ub2a5\uc740 \uc5c6\uc74c), ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/tree/master/pkg/agent/netpol"},"\uc5ec\uae30"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ube44\ud65c\uc131\ud654\ud558\ub824\uba74, \uac01 \uc11c\ubc84\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," \ud50c\ub798\uadf8\ub85c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc11c\ube44\uc2a4-\ub85c\ub4dc\ubc38\ub7f0\uc11c"},"\uc11c\ube44\uc2a4 \ub85c\ub4dc\ubc38\ub7f0\uc11c"),(0,l.kt)("p",null,"K3s \ud074\ub7ec\uc2a4\ud130\uc5d0\ub294 \ubaa8\ub4e0 LoadBalancer \ucee8\ud2b8\ub864\ub7ec\ub97c \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c K3s\ub294 \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud638\uc2a4\ud2b8 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"ServiceLB"),"(\uc774\uc804\uc758 Klipper LoadBalancer)\ub85c \uc54c\ub824\uc9c4 \ub85c\ub4dc\ubc38\ub7f0\uc11c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc5c5\uc2a4\ud2b8\ub9bc \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 \ub85c\ub4dc\ubc38\ub7f0\uc11c \uc720\ud615\uc758 \uc11c\ube44\uc2a4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc9c0\ub9cc \uae30\ubcf8 \ub85c\ub4dc\ubc38\ub7f0\uc11c \uad6c\ud604\uc740 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\ubbc0\ub85c \uc774\ub7ec\ud55c \uc11c\ube44\uc2a4\ub294 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uac00 \uc124\uce58\ub420 \ub54c\uae4c\uc9c0 ",(0,l.kt)("inlineCode",{parentName:"p"},"pending"),"\uc73c\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4. \ub9ce\uc740 \ud638\uc2a4\ud305 \uc11c\ube44\uc2a4\ub294 \uc678\ubd80 \ub85c\ub4dc \ubc38\ub7f0\uc11c \uad6c\ud604\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 Amazon EC2 \ub610\ub294 Microsoft Azure\uc640 \uac19\uc740 \ud074\ub77c\uc6b0\ub4dc \uc81c\uacf5\uc5c5\uccb4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \ubc18\uba74, K3s ServiceLB\ub97c \uc0ac\uc6a9\ud558\uba74 \ud074\ub77c\uc6b0\ub4dc \uc81c\uacf5\uc5c5\uccb4\ub098 \ucd94\uac00 \uad6c\uc131 \uc5c6\uc774\ub3c4 \ub85c\ub4dc\ubc38\ub7f0\uc11c \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"servicelb-\uc791\ub3d9-\ubc29\uc2dd"},"ServiceLB \uc791\ub3d9 \ubc29\uc2dd"),(0,l.kt)("p",null,"ServiceLB \ucee8\ud2b8\ub864\ub7ec\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.type")," \ud544\ub4dc\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"\ub85c \uc124\uc815\ub41c \ucfe0\ubc84\ub124\ud2f0\uc2a4 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/services-networking/service/"},"\uc11c\ube44\uc2a4"),"\ub97c \uac10\uc2dc\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac01 \ub85c\ub4dc\ubc38\ub7f0\uc11c \uc11c\ube44\uc2a4\ub9c8\ub2e4 ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-system")," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/workloads/controllers/daemonset/"},"\ub370\ubaac\uc14b"),"\uc774 \uc0dd\uc131\ub41c\ub2e4. \uc774 \ub370\ubaac\uc14b\uc740 \ucc28\ub840\ub85c \uac01 \ub178\ub4dc\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"svc-")," \uc811\ub450\uc0ac\ub97c \uac00\uc9c4 \ud30c\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud30c\ub4dc\ub294 \uc544\uc774\ud53c\ud14c\uc774\ube14\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud30c\ub4dc\uc758 \ub178\ub4dc\ud3ec\ud2b8\uc5d0\uc11c \uc11c\ube44\uc2a4\uc758 \ud074\ub7ec\uc2a4\ud130IP \uc8fc\uc18c\uc640 \ud3ec\ud2b8\ub85c \ud2b8\ub798\ud53d\uc744 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc678\ubd80 IP\uac00 \uad6c\uc131\ub41c \ub178\ub4dc\uc5d0\uc11c ServiceLB \ud30c\ub4dc\uac00 \uc2e4\ud589\ub418\ub294 \uacbd\uc6b0, \ub178\ub4dc\uc758 \uc678\ubd80 IP\uac00 \uc11c\ube44\uc2a4\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"status.loadBalancer.ingress")," \uc8fc\uc18c \ubaa9\ub85d\uc5d0 \ucc44\uc6cc\uc9d1\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ub178\ub4dc\uc758 \ub0b4\ubd80 IP\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub85c\ub4dc\ubc38\ub7f0\uc11c \uc11c\ube44\uc2a4\uac00 \uc5ec\ub7ec \uac1c \uc0dd\uc131\ub41c \uacbd\uc6b0, \uac01 \uc11c\ube44\uc2a4\ub9c8\ub2e4 \ubcc4\ub3c4\uc758 \ub370\ubaac\uc14b\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc11c\ub85c \ub2e4\ub978 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \ub3d9\uc77c\ud55c \ub178\ub4dc\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \uc11c\ube44\uc2a4\ub97c \ub178\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud3ec\ud2b8 80\uc5d0\uc11c \uc218\uc2e0 \ub300\uae30\ud558\ub294 \ub85c\ub4dc\ubc38\ub7f0\uc11c \uc11c\ube44\uc2a4\ub97c \uc0dd\uc131\ud558\ub824\uace0 \ud558\uba74 ServiceLB\ub294 \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \ud3ec\ud2b8 80\uc5d0 \ub300\ud55c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud638\uc2a4\ud2b8\ub97c \ucc3e\uc73c\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \ud574\ub2f9 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud638\uc2a4\ud2b8\uac00 \uc5c6\ub294 \uacbd\uc6b0, LB\ub294 \ubcf4\ub958 \uc0c1\ud0dc\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc0ac\uc6a9\ubc95"},"\uc0ac\uc6a9\ubc95"),(0,l.kt)("p",null,"K3s\uc5d0 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/services-networking/service/#loadbalancer"},"LoadBalancer \ud0c0\uc785\uc758 \uc11c\ube44\uc2a4"),"\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"servicelb-\ub178\ub4dc-\uc120\ud0dd-\uc81c\uc5b4\ud558\uae30"},"ServiceLB \ub178\ub4dc \uc120\ud0dd \uc81c\uc5b4\ud558\uae30"),(0,l.kt)("p",null,"\ud558\ub098 \uc774\uc0c1\uc758 \ub178\ub4dc\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"svccontroller.k3s.cattle.io/enablelb=true")," \ub808\uc774\ube14\uc744 \ucd94\uac00\ud558\uba74 ServiceLB \ucee8\ud2b8\ub864\ub7ec\uac00 \ud5c8\uc6a9 \ubaa9\ub85d \ubaa8\ub4dc\ub85c \uc804\ud658\ub418\uba70, \ud574\ub2f9 \ub808\uc774\ube14\uc774 \uc788\ub294 \ub178\ub4dc\ub9cc LoadBalancer \ud30c\ub4dc\ub97c \ud638\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub808\uc774\ube14\uc774 \uc5c6\ub294 \ub178\ub4dc\ub294 ServiceLB\uc5d0\uc11c \uc0ac\uc6a9\uc5d0\uc11c \uc81c\uc678\ub429\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uae30\ubcf8\uc801\uc73c\ub85c \ub178\ub4dc\uc5d0\ub294 \ub808\uc774\ube14\uc774 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ub178\ub4dc\uac00 \ub808\uc774\ube14\uc774 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\ub85c \uc720\uc9c0\ub418\ub294 \ud55c, \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud3ec\ud2b8\uac00 \uc788\ub294 \ubaa8\ub4e0 \ub178\ub4dc\uac00 ServiceLB\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"servicelb-\ub178\ub4dc-\ud480-\uc0dd\uc131\ud558\uae30"},"ServiceLB \ub178\ub4dc \ud480 \uc0dd\uc131\ud558\uae30"),(0,l.kt)("p",null,"\ub85c\ub4dc\ubc38\ub7f0\uc11c\uc758 \ud30c\ub4dc\ub97c \ud638\uc2a4\ud305\ud560 \ud2b9\uc815 \ub178\ub4dc \ud558\uc704 \uc9d1\ud569\uc744 \uc120\ud0dd\ud558\ub824\uba74 \uc6d0\ud558\ub294 \ub178\ub4dc\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"enablelb")," \ub808\uc774\ube14\uc744 \ucd94\uac00\ud558\uace0 \ub178\ub4dc \ubc0f \uc11c\ube44\uc2a4\uc5d0\uc11c \uc77c\uce58\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"lbpool")," \ub808\uc774\ube14 \uac12\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ub178\ub4dc A\uc640 \ub178\ub4dc B\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool1")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/enablelb=true")," \ub808\uc774\ube14\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ub178\ub4dc C\uc640 \ub178\ub4dc D\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool2")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/enablelb=true"),"\ub85c \ub808\uc774\ube14\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud3ec\ud2b8 443\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool1")," \ub808\uc774\ube14\uc744 \uac00\uc9c4 \ud558\ub098\uc758 LoadBalancer \uc11c\ube44\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \ub370\ubaac\uc14b\uc740 \ub178\ub4dc A\uc640 \ub178\ub4dc B\uc5d0\ub9cc \ud30c\ub4dc\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud3ec\ud2b8 443\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool2")," \ub808\uc774\ube14\uc744 \uac00\uc9c4 \ub2e4\ub978 \ub85c\ub4dc\ubc38\ub7f0\uc11c \uc11c\ube44\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \ub370\ubaac\uc14b\uc740 \ub178\ub4dc C\uc640 \ub178\ub4dc D\uc5d0\ub9cc \ud30c\ub4dc\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"servicelb-\ube44\ud65c\uc131\ud654"},"ServiceLB \ube44\ud65c\uc131\ud654"),(0,l.kt)("p",null,"ServiceLB\ub97c \ube44\ud65c\uc131\ud654\ud558\ub824\uba74, \ud074\ub7ec\uc2a4\ud130\uc758 \ubaa8\ub4e0 \uc11c\ubc84\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable=servicelb")," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\uc131\ud55c\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc124\uc815\uc740 MetalLB\uc640 \uac19\uc740 \ub2e4\ub978 LB\ub97c \uc2e4\ud589\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc678\ubd80-\ud074\ub77c\uc6b0\ub4dc-\ucee8\ud2b8\ub864\ub7ec-\ub9e4\ub2c8\uc800-\ubc30\ud3ec\ud558\uae30"},"\uc678\ubd80 \ud074\ub77c\uc6b0\ub4dc \ucee8\ud2b8\ub864\ub7ec \ub9e4\ub2c8\uc800 \ubc30\ud3ec\ud558\uae30"),(0,l.kt)("p",null,'\ubc14\uc774\ub108\ub9ac \ud06c\uae30\ub97c \uc904\uc774\uae30 \uc704\ud574 K3s\ub294 \ubaa8\ub4e0 "\uc778-\ud2b8\ub9ac"(\ube4c\ud2b8\uc778) \ud074\ub77c\uc6b0\ub4dc \uc81c\uacf5\uc790\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4. \ub300\uc2e0, K3s\ub294 \ub2e4\uc74c\uc744 \uc218\ud589\ud558\ub294 \uc784\ubca0\ub514\ub4dc \ud074\ub77c\uc6b0\ub4dc \ucee8\ud2b8\ub864\ub7ec \uad00\ub9ac\uc790(CCM, Cloud Controller Manager) \uc2a4\ud141\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub178\ub4dc \ub0b4\ubd80IP \ubc0f \uc678\ubd80IP \uc8fc\uc18c \ud544\ub4dc\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"--node-ip")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"li"},"--node-external-ip")," \ud50c\ub798\uadf8\ub97c \uae30\ubc18\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"ServiceLB LoadBalancer \ucee8\ud2b8\ub864\ub7ec\ub97c \ud638\uc2a4\ud305\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc6b0\ub4dc-\ud504\ub85c\ubc14\uc774\ub354\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"external"),"\ub85c \uc124\uc815\ub41c \uacbd\uc6b0 \uc874\uc7ac\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"node.cloudprovider.kubernetes.io/uninitialized")," taint\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc678\ubd80 CCM\uc744 \ubc30\ud3ec\ud558\uae30 \uc804\uc5d0 \ubaa8\ub4e0 K3s \uc11c\ubc84\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable-cloud-controller")," \ud50c\ub798\uadf8\ub85c \uc2dc\uc791\ud558\uc5ec \uc784\ubca0\ub514\ub4dc CCM\uc744 \ube44\ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uae30\ubcf8 \uc81c\uacf5 CCM\uc744 \ube44\ud65c\uc131\ud654\ud558\uace0 \uc678\ubd80 \ub300\uccb4\ud488\uc744 \ubc30\ud3ec\ud558\uace0 \uc62c\ubc14\ub974\uac8c \uad6c\uc131\ud558\uc9c0 \uc54a\uc73c\uba74 \ub178\ub4dc\uac00 \uc624\uc5fc\ub41c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ub418\uc5b4 \uc2a4\ucf00\uc904\ub9c1\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\ud638\uc2a4\ud2b8-\uc774\ub984\uc774-\uc5c6\ub294-\ub178\ub4dc"},"\ud638\uc2a4\ud2b8 \uc774\ub984\uc774 \uc5c6\ub294 \ub178\ub4dc"),(0,l.kt)("p",null,'Linode\uc640 \uac19\uc740 \uc77c\ubd80 \ud074\ub77c\uc6b0\ub4dc \uc81c\uacf5\uc790\ub294 \ud638\uc2a4\ud2b8 \uc774\ub984\uc774 "localhost"\uc778 \uba38\uc2e0\uc744 \uc0dd\uc131\ud558\uba70, \ub2e4\ub978 \ud074\ub77c\uc6b0\ub4dc \uc81c\uacf5\uc790\ub294 \ud638\uc2a4\ud2b8 \uc774\ub984\uc774 \uc804\ud600 \uc124\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \ub3c4\uba54\uc778 \uc774\ub984 \ud655\uc778\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ',(0,l.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME"),"\ud50c\ub798\uadf8 \ub610\ub294",(0,l.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME")," \ud658\uacbd \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec K3s\ub97c \uc2e4\ud589\ud558\uba74 \ub178\ub4dc \uc774\ub984\uc744 \uc804\ub2ec\ud558\uc5ec \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);