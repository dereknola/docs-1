"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3586],{953:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"architecture","title":"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3","description":"\u30b5\u30fc\u30d0\u30fc\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/architecture.md","sourceDirName":".","slug":"/architecture","permalink":"/docs-k3s/ja/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/architecture.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"frontMatter":{"title":"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"},"sidebar":"mySidebar","previous":{"title":"token","permalink":"/docs-k3s/ja/cli/token"},"next":{"title":"\u30af\u30e9\u30b9\u30bf\u30fc\u30a2\u30af\u30bb\u30b9","permalink":"/docs-k3s/ja/cluster-access"}}');var t=r(4848),i=r(8453),c=r(9324),d=r(9030);const l={title:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"},o=void 0,a={},h=[{value:"\u30b5\u30fc\u30d0\u30fc\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",id:"\u30b5\u30fc\u30d0\u30fc\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",level:3},{value:"\u57cb\u3081\u8fbc\u307fDB\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u57cb\u3081\u8fbc\u307fdb\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:3},{value:"\u9ad8\u53ef\u7528\u6027K3s",id:"\u9ad8\u53ef\u7528\u6027k3s",level:3},{value:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9",id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9",level:3},{value:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u767b\u9332\u65b9\u6cd5",id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u767b\u9332\u65b9\u6cd5",level:3}];function u(e){const s={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{TabItem:n,Tabs:l}=s;return n||j("TabItem",!0),l||j("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"\u30b5\u30fc\u30d0\u30fc\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",children:"\u30b5\u30fc\u30d0\u30fc\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306f\u3001",(0,t.jsx)(s.code,{children:"k3s server"})," \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u30db\u30b9\u30c8\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u3001K3s\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u308b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u3068\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3061\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306f\u3001",(0,t.jsx)(s.code,{children:"k3s agent"})," \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u30db\u30b9\u30c8\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u3001\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3084\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u6301\u3061\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u30b5\u30fc\u30d0\u30fc\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u4e21\u65b9\u304ckubelet\u3001\u30b3\u30f3\u30c6\u30ca\u30e9\u30f3\u30bf\u30a4\u30e0\u3001\u304a\u3088\u3073CNI\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ec\u30b9\u30b5\u30fc\u30d0\u30fc\u306e\u5b9f\u884c\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f\u3001",(0,t.jsx)(s.a,{href:"/docs-k3s/ja/advanced#running-agentless-servers-experimental",children:"\u9ad8\u5ea6\u306a\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:r(9258).A+"",width:"1562",height:"898"})}),"\n",(0,t.jsx)(s.h3,{id:"\u57cb\u3081\u8fbc\u307fdb\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u57cb\u3081\u8fbc\u307fDB\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,t.jsx)(s.p,{children:"\u4ee5\u4e0b\u306e\u56f3\u306f\u3001\u57cb\u3081\u8fbc\u307fSQLite\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u6301\u3064\u30b7\u30f3\u30b0\u30eb\u30ce\u30fc\u30c9K3s\u30b5\u30fc\u30d0\u30fc\u3092\u542b\u3080\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u4f8b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u3053\u306e\u69cb\u6210\u3067\u306f\u3001\u5404\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306f\u540c\u3058\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306b\u767b\u9332\u3055\u308c\u307e\u3059\u3002K3s\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u4e0a\u306eK3s API\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067Kubernetes\u30ea\u30bd\u30fc\u30b9\u3092\u64cd\u4f5c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(c.A,{alt:"\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u3092\u6301\u3064K3s\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",sources:{light:(0,d.Ay)("/img/k3s-architecture-single-server.svg"),dark:(0,d.Ay)("/img/k3s-architecture-single-server-dark.svg")}}),"\n",(0,t.jsx)(s.h3,{id:"\u9ad8\u53ef\u7528\u6027k3s",children:"\u9ad8\u53ef\u7528\u6027K3s"}),"\n",(0,t.jsx)(s.p,{children:"\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u30af\u30e9\u30b9\u30bf\u30fc\u306f\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u304c\u3001Kubernetes\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306e\u7a3c\u50cd\u6642\u9593\u304c\u91cd\u8981\u306a\u74b0\u5883\u3067\u306f\u3001K3s\u3092HA\u69cb\u6210\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002HA K3s\u30af\u30e9\u30b9\u30bf\u30fc\u306f\u4ee5\u4e0b\u3092\u542b\u307f\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(n,{value:"\u57cb\u3081\u8fbc\u307fDB",children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Kubernetes API\u3092\u63d0\u4f9b\u3057\u3001\u4ed6\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b",(0,t.jsx)(s.strong,{children:"3\u3064\u4ee5\u4e0a\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9"})]}),"\n",(0,t.jsxs)(s.li,{children:["\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u4f7f\u7528\u3055\u308c\u308b\u57cb\u3081\u8fbc\u307fSQLite\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3068\u306f\u5bfe\u7167\u7684\u306b\u3001",(0,t.jsx)(s.strong,{children:"\u57cb\u3081\u8fbc\u307fetcd\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"})]}),"\n"]}),(0,t.jsx)(c.A,{alt:"\u9ad8\u53ef\u7528\u6027\u30b5\u30fc\u30d0\u30fc\u3092\u6301\u3064K3s\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",sources:{light:(0,d.Ay)("/img/k3s-architecture-ha-embedded.svg"),dark:(0,d.Ay)("/img/k3s-architecture-ha-embedded-dark.svg")}})]}),(0,t.jsxs)(n,{value:"\u5916\u90e8DB",children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Kubernetes API\u3092\u63d0\u4f9b\u3057\u3001\u4ed6\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b",(0,t.jsx)(s.strong,{children:"2\u3064\u4ee5\u4e0a\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"}),"\uff08MySQL\u3001PostgreSQL\u3001\u307e\u305f\u306fetcd\u306a\u3069\uff09"]}),"\n"]}),(0,t.jsx)(c.A,{alt:"\u9ad8\u53ef\u7528\u6027\u30b5\u30fc\u30d0\u30fc\u3068\u5916\u90e8DB\u3092\u6301\u3064K3s\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",sources:{light:(0,d.Ay)("/img/k3s-architecture-ha-external.svg"),dark:(0,d.Ay)("/img/k3s-architecture-ha-external-dark.svg")}})]})]}),"\n",(0,t.jsx)(s.h3,{id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9"}),"\n",(0,t.jsx)(s.p,{children:"\u9ad8\u53ef\u7528\u6027\u30b5\u30fc\u30d0\u30fc\u69cb\u6210\u3067\u306f\u3001\u5404\u30ce\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u56f3\u306b\u793a\u3059\u3088\u3046\u306b\u3001\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9\u3092\u4f7f\u7528\u3057\u3066Kubernetes API\u306b\u767b\u9332\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u767b\u9332\u5f8c\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306f\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e1\u3064\u306b\u76f4\u63a5\u63a5\u7d9a\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(c.A,{alt:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u767b\u9332HA",sources:{light:(0,d.Ay)("/img/k3s-production-setup.svg"),dark:(0,d.Ay)("/img/k3s-production-setup-dark.svg")}}),"\n",(0,t.jsx)(s.h3,{id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u767b\u9332\u65b9\u6cd5",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u767b\u9332\u65b9\u6cd5"}),"\n",(0,t.jsxs)(s.p,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306f\u3001",(0,t.jsx)(s.code,{children:"k3s agent"})," \u30d7\u30ed\u30bb\u30b9\u306b\u3088\u3063\u3066\u958b\u59cb\u3055\u308c\u308bWebSocket\u63a5\u7d9a\u3067\u767b\u9332\u3055\u308c\u3001\u305d\u306e\u63a5\u7d9a\u306f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u306e\u4e00\u90e8\u3068\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u306b\u3088\u3063\u3066\u7dad\u6301\u3055\u308c\u307e\u3059\u3002\u6700\u521d\u306b\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u30dd\u30fc\u30c86443\u306e\u30ed\u30fc\u30ab\u30eb\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u3092\u4ecb\u3057\u3066\u30b9\u30fc\u30d1\u30fc\u30d0\u30a4\u30b6\u30fc\uff08\u304a\u3088\u3073kube-apiserver\uff09\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u306f\u63a5\u7d9a\u53ef\u80fd\u306a\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30ea\u30b9\u30c8\u3092\u7dad\u6301\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\uff08\u304a\u3088\u3073\u6700\u521d\u306e\uff09\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001",(0,t.jsx)(s.code,{children:"--server"})," \u30a2\u30c9\u30ec\u30b9\u304b\u3089\u306e\u30db\u30b9\u30c8\u540d\u306b\u3088\u3063\u3066\u30b7\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u63a5\u7d9a\u3059\u308b\u3068\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u5185\u306eKubernetes\u30b5\u30fc\u30d3\u30b9\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u30ea\u30b9\u30c8\u304b\u3089kube-apiserver\u30a2\u30c9\u30ec\u30b9\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u306b\u8ffd\u52a0\u3055\u308c\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u5185\u306e\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u306b\u5b89\u5b9a\u3057\u305f\u63a5\u7d9a\u3092\u7dad\u6301\u3057\u3001\u500b\u3005\u306e\u30b5\u30fc\u30d0\u30fc\u306e\u505c\u6b62\u306b\u8010\u3048\u308bkube-apiserver\u3078\u306e\u63a5\u7d9a\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u3001\u30ce\u30fc\u30c9\u30af\u30e9\u30b9\u30bf\u30fc\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3068\u3001",(0,t.jsx)(s.code,{children:"/etc/rancher/node/password"})," \u306b\u4fdd\u5b58\u3055\u308c\u308b\u30e9\u30f3\u30c0\u30e0\u306b\u751f\u6210\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u306b\u767b\u9332\u3055\u308c\u307e\u3059\u3002\u30b5\u30fc\u30d0\u30fc\u306f\u500b\u3005\u306e\u30ce\u30fc\u30c9\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092Kubernetes\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3068\u3057\u3066\u4fdd\u5b58\u3057\u3001\u5f8c\u7d9a\u306e\u8a66\u884c\u3067\u306f\u540c\u3058\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ce\u30fc\u30c9\u30d1\u30b9\u30ef\u30fc\u30c9\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306f\u3001",(0,t.jsx)(s.code,{children:"<host>.node-password.k3s"})," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u305f\u540d\u524d\u3067",(0,t.jsx)(s.code,{children:"kube-system"}),"\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u30ce\u30fc\u30c9ID\u306e\u6574\u5408\u6027\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u884c\u308f\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e",(0,t.jsx)(s.code,{children:"/etc/rancher/node"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u524a\u9664\u3055\u308c\u305f\u5834\u5408\u3001\u307e\u305f\u306f\u65e2\u5b58\u306e\u540d\u524d\u3092\u4f7f\u7528\u3057\u3066\u30ce\u30fc\u30c9\u3092\u518d\u53c2\u52a0\u3055\u305b\u305f\u3044\u5834\u5408\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u304b\u3089\u30ce\u30fc\u30c9\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u53e4\u3044\u30ce\u30fc\u30c9\u30a8\u30f3\u30c8\u30ea\u3068\u30ce\u30fc\u30c9\u30d1\u30b9\u30ef\u30fc\u30c9\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306e\u4e21\u65b9\u304c\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u3055\u308c\u3001\u30ce\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u518d\u53c2\u52a0\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u30db\u30b9\u30c8\u540d\u3092\u983b\u7e41\u306b\u518d\u5229\u7528\u3059\u308b\u304c\u3001\u30ce\u30fc\u30c9\u30d1\u30b9\u30ef\u30fc\u30c9\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u524a\u9664\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001",(0,t.jsx)(s.code,{children:"--with-node-id"})," \u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3057\u3066K3s\u30b5\u30fc\u30d0\u30fc\u307e\u305f\u306f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u8d77\u52d5\u3059\u308b\u3053\u3068\u3067\u3001\u30db\u30b9\u30c8\u540d\u306b\u4e00\u610f\u306e\u30ce\u30fc\u30c9ID\u3092\u81ea\u52d5\u7684\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30ce\u30fc\u30c9ID\u3082",(0,t.jsx)(s.code,{children:"/etc/rancher/node/"}),"\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"]})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function j(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9258:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/how-it-works-k3s-revised-9c025ef482404bca2e53a89a0ba7a3c5.svg"},8453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>d});var n=r(6540);const t={},i=n.createContext(t);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);