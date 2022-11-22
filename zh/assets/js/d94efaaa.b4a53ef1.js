"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[18],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=o(n),c=r,m=u["".concat(d,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(m,p(p({ref:e},s),{},{components:n})):a.createElement(m,p({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return k}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),p=["components"],i={title:"\u5907\u4efd\u548c\u6062\u590d",weight:26},d=void 0,o={unversionedId:"backup-restore/backup-restore",id:"backup-restore/backup-restore",title:"\u5907\u4efd\u548c\u6062\u590d",description:"K3s \u7684\u5907\u4efd\u548c\u6062\u590d\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/backup-restore/backup-restore.md",sourceDirName:"backup-restore",slug:"/backup-restore/",permalink:"/zh/backup-restore/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/backup-restore/backup-restore.md",tags:[],version:"current",lastUpdatedAt:1669137767,formattedLastUpdatedAt:"2022\u5e7411\u670822\u65e5",frontMatter:{title:"\u5907\u4efd\u548c\u6062\u590d",weight:26},sidebar:"mySidebar",previous:{title:"\u81ea\u52a8\u5347\u7ea7",permalink:"/zh/upgrades/automated"},next:{title:"\u5377\u548c\u5b58\u50a8",permalink:"/zh/storage/"}},s={},k=[{value:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",id:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",level:3},{value:"\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",id:"\u4f7f\u7528\u5d4c\u5165\u5f0f-etcd-\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",level:3},{value:"\u521b\u5efa\u5feb\u7167",id:"\u521b\u5efa\u5feb\u7167",level:4},{value:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4",id:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4",level:4},{value:"\u9009\u9879",id:"\u9009\u9879",level:4},{value:"S3 \u517c\u5bb9 API \u652f\u6301",id:"s3-\u517c\u5bb9-api-\u652f\u6301",level:4},{value:"Etcd \u5feb\u7167\u548c\u6062\u590d\u5b50\u547d\u4ee4",id:"etcd-\u5feb\u7167\u548c\u6062\u590d\u5b50\u547d\u4ee4",level:4}],u={toc:k};function c(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"K3s \u7684\u5907\u4efd\u548c\u6062\u590d\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8%E5%A4%96%E9%83%A8%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E8%BF%9B%E8%A1%8C%E5%A4%87%E4%BB%BD%E5%92%8C%E6%81%A2%E5%A4%8D"},"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8%E5%B5%8C%E5%85%A5%E5%BC%8F-etcd-%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E8%BF%9B%E8%A1%8C%E5%A4%87%E4%BB%BD%E5%92%8C%E6%81%A2%E5%A4%8D"},"\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"},"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"),(0,l.kt)("p",null,"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u65f6\uff0c\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u5728 K3s \u5916\u9762\u5904\u7406\u3002\u6570\u636e\u5e93\u7ba1\u7406\u5458\u9700\u8981\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8fdb\u884c\u5907\u4efd\uff0c\u6216\u8005\u4f7f\u7528\u5feb\u7167\u6216\u8f6c\u50a8\u8fdb\u884c\u6062\u590d\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5c06\u6570\u636e\u5e93\u914d\u7f6e\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u6267\u884c\u5b9a\u671f\u5feb\u7167"),"\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u83b7\u53d6\u6570\u636e\u5e93\u5feb\u7167\u5e76\u4ece\u4e2d\u6062\u590d\u6570\u636e\u5e93\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9\u6570\u636e\u5e93\u6587\u6863\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html"},"MySQL \u5b98\u65b9\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/8.3/backup-dump.html"},"PostgreSQL \u5b98\u65b9\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://etcd.io/docs/latest/op-guide/recovery/"},"etcd \u5b98\u65b9\u6587\u6863"))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u5d4c\u5165\u5f0f-etcd-\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"},"\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"),(0,l.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1")," \u8d77\u53ef\u7528")),(0,l.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa K3s \u96c6\u7fa4\u6570\u636e\u7684\u5907\u4efd\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u5d4c\u5165\u5f0f SQLite \u7684\u5355\u670d\u52a1\u5668\u7684\u6ce8\u610f\u4e8b\u9879"),"\uff1a\u76ee\u524d\u4e0d\u652f\u6301 SQLite \u7684\u5907\u4efd\u3002\u56e0\u6b64\uff0c\u8bf7\u5236\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server")," \u7684\u526f\u672c\uff0c\u7136\u540e\u5220\u9664 K3s\u3002")),(0,l.kt)("h4",{id:"\u521b\u5efa\u5feb\u7167"},"\u521b\u5efa\u5feb\u7167"),(0,l.kt)("p",null,"\u5feb\u7167\u662f\u9ed8\u8ba4\u542f\u52a8\u7684\u3002"),(0,l.kt)("p",null,"\u5feb\u7167\u76ee\u5f55\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/snapshots"),"\u3002data-dir \u7684\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s"),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"--data-dir")," \u6807\u5fd7\u6765\u66f4\u6539\u5b83\u3002"),(0,l.kt)("p",null,"\u8981\u914d\u7f6e\u5feb\u7167\u95f4\u9694\u6216\u4fdd\u7559\u5feb\u7167\u7684\u6570\u91cf\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"#%E9%80%89%E9%A1%B9"},"\u9009\u9879"),"\u3002"),(0,l.kt)("h4",{id:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4"},"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4"),(0,l.kt)("p",null,"\u4f7f\u7528\u5907\u4efd\u6062\u590d K3s \u65f6\uff0c\u65e7\u7684\u6570\u636e\u76ee\u5f55\u5c06\u88ab\u79fb\u52a8\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/etcd-old/"),"\u3002\u7136\u540e K3s \u5c06\u5c1d\u8bd5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u76ee\u5f55\u6765\u6062\u590d\u5feb\u7167\uff0c\u7136\u540e\u4f7f\u7528\u5177\u6709\u4e00\u4e2a etcd \u6210\u5458\u7684\u65b0 K3s \u96c6\u7fa4\u542f\u52a8 etcd\u3002"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u5907\u4efd\u6765\u6062\u590d\u96c6\u7fa4\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--cluster-reset")," \u9009\u9879\u8fd0\u884c K3s\uff0c\u540c\u65f6\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"--cluster-reset-restore-path"),"\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u65e5\u5fd7\u4e2d\u7684\u4e00\u6761\u6d88\u606f\u8868\u793a K3s \u53ef\u4ee5\u5728\u6ca1\u6709\u6807\u5fd7\u7684\u60c5\u51b5\u4e0b\u91cd\u65b0\u542f\u52a8\u3002\u518d\u6b21\u542f\u52a8 K3s\uff0cK3s \u5e94\u8be5\u4f1a\u6210\u529f\u8fd0\u884c\u5e76\u901a\u8fc7\u6307\u5b9a\u7684\u5feb\u7167\u6062\u590d\u3002"),(0,l.kt)("h4",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u6216\u8005",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u914d\u7f6e\u6587\u4ef6"),"\uff08\u53ef\u80fd\u66f4\u5bb9\u6613\u4f7f\u7528\uff09\u4f20\u5165\u8fd9\u4e9b\u9009\u9879\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-disable-snapshots")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u81ea\u52a8 etcd \u5feb\u7167")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-schedule-cron")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"cron \u89c4\u8303\u4e2d\u7684\u5feb\u7167\u95f4\u9694\u65f6\u95f4\u3002eg. \u6bcf 5 \u5c0f\u65f6 ",(0,l.kt)("inlineCode",{parentName:"td"},"0 */5 * * *"),"\uff08\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"0 */12 * * *"),"\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-retention")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u4fdd\u7559\u7684\u5feb\u7167\u6570\u91cf\uff08\u9ed8\u8ba4\u503c\uff1a5\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-dir")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u6570\u636e\u5e93\u5feb\u7167\u7684\u76ee\u5f55\u3002\uff08\u9ed8\u8ba4\u4f4d\u7f6e\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"${data-dir}/db/snapshots"),"\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cluster-reset")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fd8\u8bb0\u6240\u6709\u5bf9\u7b49\u70b9\uff0c\u6210\u4e3a\u65b0\u96c6\u7fa4\u7684\u552f\u4e00\u6210\u5458\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"td"},"[$K3S_CLUSTER_RESET]")," \u8fdb\u884c\u8bbe\u7f6e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cluster-reset-restore-path")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u6062\u590d\u7684\u5feb\u7167\u6587\u4ef6\u8def\u5f84")))),(0,l.kt)("h4",{id:"s3-\u517c\u5bb9-api-\u652f\u6301"},"S3 \u517c\u5bb9 API \u652f\u6301"),(0,l.kt)("p",null,"K3s \u652f\u6301\u5411\u5177\u6709 S3 \u517c\u5bb9 API \u7684\u7cfb\u7edf\u5199\u5165 etcd \u5feb\u7167\u548c\u4ece\u7cfb\u7edf\u4e2d\u6062\u590d etcd \u5feb\u7167\u3002S3 \u652f\u6301\u6309\u9700\u548c\u8ba1\u5212\u5feb\u7167\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u53c2\u6570\u5df2\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," \u5b50\u547d\u4ee4\u4e2d\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," \u5b50\u547d\u4ee4\u4e5f\u5b58\u5728\u8fd9\u4e9b\u6807\u5fd7\uff0c\u4f46\u662f\u5220\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"--etcd-s3")," \u90e8\u5206\u4ee5\u907f\u514d\u5197\u4f59\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u5907\u4efd\u5230 S3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 \u7aef\u70b9\u7f51\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint-ca")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 \u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\uff0c\u7528\u4e8e\u8fde\u63a5\u5230 S3 \u7aef\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3-skip-ssl-verify")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u7528 S3 SSL \u8bc1\u4e66\u9a8c\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3-access-key")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 access key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3-secret-key")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 secret key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3-bucket")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 \u5b58\u50a8\u6876\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3-region")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 \u533a\u57df/\u5b58\u50a8\u6876\u4f4d\u7f6e\uff08\u53ef\u9009\uff09\u3002\u9ed8\u8ba4\u4e3a us-east-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--etcd-s3-folder")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 \u6587\u4ef6\u5939")))),(0,l.kt)("p",null,"\u6267\u884c\u6309\u9700\u7684 etcd \u5feb\u7167\u5e76\u5c06\u5176\u4fdd\u5b58\u5230 S3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n")),(0,l.kt)("p",null,"\u8981\u4ece S3 \u4e2d\u6267\u884c\u6309\u9700\u7684 etcd \u5feb\u7167\u8fd8\u539f\uff0c\u9996\u5148\u786e\u4fdd K3s \u6ca1\u6709\u8fd0\u884c\u3002\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-init \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n")),(0,l.kt)("h4",{id:"etcd-\u5feb\u7167\u548c\u6062\u590d\u5b50\u547d\u4ee4"},"Etcd \u5feb\u7167\u548c\u6062\u590d\u5b50\u547d\u4ee4"),(0,l.kt)("p",null,"K3s \u652f\u6301\u7528\u4e8e\u5904\u7406 etcd \u5feb\u7167\u7684\u4e00\u7ec4\u5b50\u547d\u4ee4\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b50\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delete"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u7ed9\u5b9a\u7684\u5feb\u7167")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ls, list, l"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u5feb\u7167")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prune"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u8d85\u8fc7\u914d\u7f6e\u7684\u4fdd\u7559\u6570\u91cf\u7684\u5feb\u7167")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u5373\u65f6 etcd \u5feb\u7167")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"save")," \u5b50\u547d\u4ee4\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"k3s etcd-snapshot")," \u76f8\u540c\u3002\u540e\u8005\u6700\u7ec8\u5c06\u88ab\u524d\u8005\u53d6\u4ee3\u3002")),(0,l.kt)("p",null,"\u65e0\u8bba etcd \u5feb\u7167\u662f\u5b58\u50a8\u5728\u672c\u5730\u8fd8\u662f\u5b58\u50a8\u5728 S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u4e2d\uff0c\u8fd9\u4e9b\u547d\u4ee4\u90fd\u5c06\u6309\u9884\u671f\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u6709\u5173 etcd \u5feb\u7167\u5b50\u547d\u4ee4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"k3s etcd-snapshot"),"\u3002"),(0,l.kt)("p",null,"\u4ece S3 \u4e2d\u5220\u9664\u5feb\u7167\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot delete          \\\n  --s3                            \\\n  --s3-bucket=<S3-BUCKET-NAME>    \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY> \\\n  <SNAPSHOT-NAME>\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u9ed8\u8ba4\u4fdd\u7559\u7b56\u7565 (5) \u4fee\u526a\u672c\u5730\u5feb\u7167\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"prune")," \u5b50\u547d\u4ee4\u63a5\u53d7\u989d\u5916\u7684\u6807\u5fd7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--snapshot-retention"),"\uff0c\u5141\u8bb8\u8986\u76d6\u9ed8\u8ba4\u4fdd\u7559\u7b56\u7565\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot prune\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot prune --snapshot-retention 10\n")))}c.isMDXComponent=!0}}]);