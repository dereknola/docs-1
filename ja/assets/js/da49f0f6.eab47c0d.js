"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3745],{6862:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"security/security","title":"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3","description":"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001K3s \u30af\u30e9\u30b9\u30bf\u30fc\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306e\u65b9\u6cd5\u8ad6\u3068\u624b\u6bb5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u30022\u3064\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30ac\u30a4\u30c9\u306f\u3001k3s \u304c\u57cb\u3081\u8fbc\u307f\u578b etcd \u3067\u52d5\u4f5c\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/security/security.md","sourceDirName":"security","slug":"/security/","permalink":"/docs-k3s/ja/security/","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/security/security.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"frontMatter":{"title":"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"},"sidebar":"mySidebar","previous":{"title":"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9","permalink":"/docs-k3s/ja/upgrades/automated"},"next":{"title":"secret\u306e\u6697\u53f7\u5316","permalink":"/docs-k3s/ja/security/secrets-encryption"}}');var r=t(4848),c=t(8453);const i={title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"},o=void 0,d={},l=[];function a(s){const e={a:"a",li:"li",p:"p",ul:"ul",...(0,c.R)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001K3s \u30af\u30e9\u30b9\u30bf\u30fc\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306e\u65b9\u6cd5\u8ad6\u3068\u624b\u6bb5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u30022\u3064\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30ac\u30a4\u30c9\u306f\u3001k3s \u304c\u57cb\u3081\u8fbc\u307f\u578b etcd \u3067\u52d5\u4f5c\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u307e\u305a\u3001\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u30ac\u30a4\u30c9\u3067\u306f\u3001K3s \u30af\u30e9\u30b9\u30bf\u30fc\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306e\u30ea\u30b9\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs-k3s/ja/security/hardening-guide",children:"\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u30ac\u30a4\u30c9"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6b21\u306b\u3001\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u3055\u308c\u305f\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u306e\u81ea\u5df1\u8a55\u4fa1\u304c\u3042\u308a\u307e\u3059\u3002\u73fe\u5728\u30012\u3064\u306e\u7570\u306a\u308b\u8a55\u4fa1\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs-k3s/ja/security/self-assessment-1.24",children:"CIS 1.24 \u30d9\u30f3\u30c1\u30de\u30fc\u30af\u81ea\u5df1\u8a55\u4fa1\u30ac\u30a4\u30c9"}),"\u3001K3s v1.24 \u7528\u306e\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e CIS \u30d9\u30f3\u30c1\u30de\u30fc\u30af"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs-k3s/ja/security/self-assessment-1.7",children:"CIS 1.7 \u30d9\u30f3\u30c1\u30de\u30fc\u30af\u81ea\u5df1\u8a55\u4fa1\u30ac\u30a4\u30c9"}),"\u3001K3s \u30d0\u30fc\u30b8\u30e7\u30f3 v1.25-v1.26 \u7528"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs-k3s/ja/security/self-assessment-1.8",children:"CIS 1.8 \u30d9\u30f3\u30c1\u30de\u30fc\u30af\u81ea\u5df1\u8a55\u4fa1\u30ac\u30a4\u30c9"}),"\u3001K3s \u30d0\u30fc\u30b8\u30e7\u30f3 v1.27-v1.29 \u7528"]}),"\n"]}),"\n"]})]})}function u(s={}){const{wrapper:e}={...(0,c.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(a,{...s})}):a(s)}},8453:(s,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var n=t(6540);const r={},c=n.createContext(r);function i(s){const e=n.useContext(c);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:i(s.components),n.createElement(c.Provider,{value:e},s.children)}}}]);