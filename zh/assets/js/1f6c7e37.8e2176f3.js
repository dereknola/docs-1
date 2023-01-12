"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[394],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),l=n(4334),i=n(2389),o=n(7392),u=n(7094),s=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,k=e.values,f=e.groupId,g=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),x=N.tabGroupChoices,C=N.setTabGroupChoices,T=(0,a.useState)(b),w=T[0],O=T[1],E=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=x[f];null!=j&&j!==w&&y.some((function(e){return e.value===j}))&&O(j)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==w&&(_(t),O(r),null!=f&&C(f,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;n=null!=(l=E[i])?l:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onClick:S},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},1665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=n(5488),o=n(5162),u=["components"],s={title:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",weight:55},p=void 0,c={unversionedId:"installation/private-registry",id:"installation/private-registry",title:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",description:"\u4f60\u53ef\u4ee5\u5c06 Containerd \u914d\u7f6e\u4e3a\u8fde\u63a5\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u5e76\u5728\u8282\u70b9\u4e0a\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u79c1\u6709\u955c\u50cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/private-registry.md",sourceDirName:"installation",slug:"/installation/private-registry",permalink:"/docs-k3s/zh/installation/private-registry",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/private-registry.md",tags:[],version:"current",lastUpdatedAt:1673482048,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{title:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",weight:55},sidebar:"mySidebar",previous:{title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u9009\u9879",permalink:"/docs-k3s/zh/installation/datastore"},next:{title:"\u79bb\u7ebf\u5b89\u88c5",permalink:"/docs-k3s/zh/installation/airgap"}},m={},d=[{value:"\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6",id:"\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"\u91cd\u5199",id:"\u91cd\u5199",level:4},{value:"Configs",id:"configs",level:3},{value:"\u4f7f\u7528 TLS",id:"\u4f7f\u7528-tls",level:3},{value:"\u6ca1\u6709 TLS",id:"\u6ca1\u6709-tls",level:3},{value:"\u5c06\u955c\u50cf\u6dfb\u52a0\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",id:"\u5c06\u955c\u50cf\u6dfb\u52a0\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",level:2}],k={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06 Containerd \u914d\u7f6e\u4e3a\u8fde\u63a5\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u5e76\u5728\u8282\u70b9\u4e0a\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u79c1\u6709\u955c\u50cf\u3002"),(0,l.kt)("p",null,"\u542f\u52a8\u65f6\uff0cK3s \u4f1a\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/")," \u4e2d\u662f\u5426\u5b58\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\uff0c\u5e76\u6307\u793a containerd \u4f7f\u7528\u8be5\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u955c\u50cf\u4ed3\u5e93\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u79c1\u6709\u7684\u955c\u50cf\u4ed3\u5e93\uff0c\u4f60\u9700\u8981\u5728\u6bcf\u4e2a\u4f7f\u7528\u955c\u50cf\u4ed3\u5e93\u7684\u8282\u70b9\u4e0a\u4ee5 root \u8eab\u4efd\u521b\u5efa\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cserver \u8282\u70b9\u9ed8\u8ba4\u662f\u53ef\u4ee5\u8c03\u5ea6\u7684\u3002\u5982\u679c\u4f60\u6ca1\u6709\u5728 server \u8282\u70b9\u4e0a\u8bbe\u7f6e\u6c61\u70b9\uff0c\u800c\u4e14\u5e0c\u671b\u5728 server \u8282\u70b9\u4e0a\u8fd0\u884c\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u8bf7\u786e\u4fdd\u5728\u6bcf\u4e2a server \u8282\u70b9\u4e0a\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"Containerd \u4e2d\u7684\u914d\u7f6e\u53ef\u4ee5\u7528\u4e8e\u901a\u8fc7 TLS \u8fde\u63a5\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u4e5f\u53ef\u4ee5\u4e0e\u542f\u7528\u9a8c\u8bc1\u7684\u955c\u50cf\u4ed3\u5e93\u8fde\u63a5\u3002\u4e0b\u4e00\u8282\u5c06\u89e3\u91ca ",(0,l.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\uff0c\u5e76\u7ed9\u51fa\u5728 K3s \u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u7684\u4e0d\u540c\u4f8b\u5b50\u3002"),(0,l.kt)("h2",{id:"\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6"},"\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u8be5\u6587\u4ef6\u7531\u4e24\u4e2a\u4e3b\u8981\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mirrors"),(0,l.kt)("li",{parentName:"ul"},"configs")),(0,l.kt)("h3",{id:"mirrors"},"Mirrors"),(0,l.kt)("p",null,"Mirrors \u662f\u7528\u4e8e\u5b9a\u4e49\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u540d\u79f0\u548c\u7aef\u70b9\u7684\u6307\u4ee4\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mirrors:\n  mycustomreg.com:\n    endpoint:\n      - "https://mycustomreg.com:5000"\n')),(0,l.kt)("p",null,"\u6bcf\u4e2a mirror \u90fd\u5fc5\u987b\u6709\u4e00\u4e2a\u540d\u79f0\u548c\u4e00\u7ec4\u7aef\u70b9\u3002\u4ece\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\u65f6\uff0ccontainerd \u4f1a\u9010\u4e2a\u5c1d\u8bd5\u8fd9\u4e9b\u7aef\u70b9 URL\uff0c\u5e76\u4f7f\u7528\u7b2c\u4e00\u4e2a\u6709\u6548\u7684 URL\u3002"),(0,l.kt)("h4",{id:"\u91cd\u5199"},"\u91cd\u5199"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u955c\u50cf\u90fd\u53ef\u4ee5\u6709\u4e00\u7ec4\u91cd\u5199\u3002\u91cd\u5199\u53ef\u4ee5\u6839\u636e\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u6539\u53d8\u955c\u50cf\u7684\u6807\u7b7e\u3002\u5982\u679c mirror \u4ed3\u5e93\u4e2d\u7684\u7ec4\u7ec7/\u9879\u76ee\u7ed3\u6784\u4e0e\u4e0a\u6e38\u4e0d\u540c\uff0c\u8fd9\u5c06\u5f88\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u914d\u7f6e\u5c06\u900f\u660e\u5730\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"registry.example.com:5000/mirrorproject/rancher-images/coredns-coredns:1.6.3")," \u4e2d\u62c9\u53d6\u955c\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n')),(0,l.kt)("p",null,"\u955c\u50cf\u4ecd\u5c06\u4ee5\u539f\u59cb\u540d\u79f0\u5b58\u50a8\uff0c\u56e0\u6b64\uff0c\u5373\u4f7f\u955c\u50cf\u4ee5\u4e0d\u540c\u7684\u540d\u5b57\u4ece\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"crictl image ls")," \u4e5f\u5c06\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," \u5728\u8282\u70b9\u4e0a\u662f\u53ef\u7528\u7684\u3002"),(0,l.kt)("h3",{id:"configs"},"Configs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"configs")," \u90e8\u5206\u5b9a\u4e49\u4e86\u6bcf\u4e2a mirror \u7684 TLS \u548c\u51ed\u8bc1\u914d\u7f6e\u3002\u5bf9\u4e8e\u6bcf\u4e2a mirror\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"auth")," \u548c/\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"tls"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tls")," \u90e8\u5206\u5305\u62ec\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cert_file")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bc1\u4e66\u8def\u5f84\uff0c\u7528\u4e8e\u5411\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"key_file")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5bc6\u94a5\u8def\u5f84\uff0c\u7528\u4e8e\u5411\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ca_file")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u7528\u4e8e\u9a8c\u8bc1\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u8bc1\u4e66\u6587\u4ef6\u7684 CA \u8bc1\u4e66\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"insecure_skip_verify")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u662f\u5426\u5e94\u8df3\u8fc7\u955c\u50cf\u4ed3\u5e93\u7684 TLS \u9a8c\u8bc1\u7684\u5e03\u5c14\u503c")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"auth")," \u90e8\u5206\u7531\u7528\u6237\u540d/\u5bc6\u7801\u6216\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\u7ec4\u6210\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auth")),(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c")))),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728\u4e0d\u540c\u6a21\u5f0f\u4e0b\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u57fa\u672c\u4f8b\u5b50\uff1a"),(0,l.kt)("h3",{id:"\u4f7f\u7528-tls"},"\u4f7f\u7528 TLS"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u4f7f\u7528 TLS \u65f6\uff0c\u5982\u4f55\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml"),"\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"\u6709\u8ba4\u8bc1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n'))),(0,l.kt)(o.Z,{value:"\u65e0\u8ba4\u8bc1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n')))),(0,l.kt)("h3",{id:"\u6ca1\u6709-tls"},"\u6ca1\u6709 TLS"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86",(0,l.kt)("em",{parentName:"p"},"\u4e0d"),"\u4f7f\u7528 TLS \u65f6\uff0c\u5982\u4f55\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml"),"\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"\u6709\u8ba4\u8bc1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n'))),(0,l.kt)(o.Z,{value:"\u65e0\u8ba4\u8bc1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\n')))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6ca1\u6709 TLS \u901a\u4fe1\uff0c\u4f60\u9700\u8981\u4e3a\u7aef\u70b9\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"http://"),"\uff0c\u5426\u5219\u5c06\u9ed8\u8ba4\u4e3a https\u3002")),(0,l.kt)("p",null,"\u4e3a\u4e86\u4f7f\u955c\u50cf\u4ed3\u5e93\u66f4\u6539\u751f\u6548\uff0c\u4f60\u9700\u8981\u91cd\u65b0\u542f\u52a8\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684 K3s\u3002"),(0,l.kt)("h2",{id:"\u5c06\u955c\u50cf\u6dfb\u52a0\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"},"\u5c06\u955c\u50cf\u6dfb\u52a0\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4ece GitHub \u4e0a\u83b7\u53d6\u4f60\u6b63\u5728\u4f7f\u7528\u7684\u7248\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"k3s-images.txt")," \u6587\u4ef6\u3002\n\u4ece docker.io \u62c9\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"k3s-images.txt")," \u6587\u4ef6\u4e2d\u5217\u51fa\u7684 K3s \u955c\u50cf"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"docker pull docker.io/rancher/coredns-coredns:1.6.3")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5c06\u955c\u50cf\u91cd\u65b0\u6807\u8bb0\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"docker tag coredns-coredns:1.6.3 mycustomreg:5000/coredns-coredns")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u5c06\u955c\u50cf\u63a8\u9001\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"docker push mycustomreg.com:5000/coredns-coredns")))}f.isMDXComponent=!0}}]);