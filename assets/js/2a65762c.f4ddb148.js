"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1430],{7084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(5893),r=n(1151);const i={title:"token"},o="k3s token",d={id:"cli/token",title:"token",description:"K3s uses tokens to secure the node join process. Tokens authenticate the cluster to the joining node, and the node to the cluster.",source:"@site/docs/cli/token.md",sourceDirName:"cli",slug:"/cli/token",permalink:"/docs-k3s/cli/token",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/token.md",tags:[],version:"current",lastUpdatedAt:1723230876e3,frontMatter:{title:"token"},sidebar:"mySidebar",previous:{title:"secrets-encrypt",permalink:"/docs-k3s/cli/secrets-encrypt"},next:{title:"Architecture",permalink:"/docs-k3s/architecture"}},c={},l=[{value:"Token Format",id:"token-format",level:2},{value:"Secure",id:"secure",level:3},{value:"TLS Bootstrapping",id:"tls-bootstrapping",level:4},{value:"Short",id:"short",level:3},{value:"Token Types",id:"token-types",level:2},{value:"Server",id:"server",level:3},{value:"Agent",id:"agent",level:3},{value:"Bootstrap",id:"bootstrap",level:3},{value:"k3s token",id:"k3s-token-1",level:2},{value:"<code>k3s token create [token]</code>",id:"k3s-token-create-token",level:4},{value:"<code>k3s token delete</code>",id:"k3s-token-delete",level:4},{value:"<code>k3s token generate</code>",id:"k3s-token-generate",level:4},{value:"<code>k3s token list</code>",id:"k3s-token-list",level:4},{value:"<code>k3s token rotate</code>",id:"k3s-token-rotate",level:4}];function a(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"k3s-token",children:"k3s token"}),"\n",(0,s.jsx)(t.p,{children:"K3s uses tokens to secure the node join process. Tokens authenticate the cluster to the joining node, and the node to the cluster."}),"\n",(0,s.jsx)(t.h2,{id:"token-format",children:"Token Format"}),"\n",(0,s.jsx)(t.p,{children:"K3s tokens can be specified in either secure or short format. The secure format is preferred, as it enables the client to authenticate the identity of the cluster it is joining, before sending credentials."}),"\n",(0,s.jsx)(t.h3,{id:"secure",children:"Secure"}),"\n",(0,s.jsx)(t.p,{children:'The secure token format (occasionally referred to as a "full" token) contains the following parts:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"<prefix><cluster CA hash>::<credentials>"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"prefix"}),": a fixed ",(0,s.jsx)(t.code,{children:"K10"})," prefix that identifies the token format"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cluster CA hash"}),": The hash of the cluster's server CA certificate, used to authenticate the server to the joining node.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For self-signed CA certificates, this is the SHA256 sum of the PEM-formatted certificate, as stored on disk."}),"\n",(0,s.jsx)(t.li,{children:"For custom CA certificates, this is the SHA256 sum of the DER encoding of the root certificate; commonly known as the certificate fingerprint."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"credentials"}),": The username and password, or bearer token, used to authenticate the joining node to the cluster."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"tls-bootstrapping",children:"TLS Bootstrapping"}),"\n",(0,s.jsx)(t.p,{children:"When a secure token is specified, the joining node performs the following steps to validate the identity of the server it has connected to, before transmitting credentials:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["With TLS verification disabled, download the CA bundle from ",(0,s.jsx)(t.code,{children:"/cacerts"})," on the server it is joining."]}),"\n",(0,s.jsx)(t.li,{children:"Calculate the SHA256 hash of the CA certificate, as described above."}),"\n",(0,s.jsx)(t.li,{children:"Compare the calculated SHA256 hash to the hash from the token."}),"\n",(0,s.jsx)(t.li,{children:"If the hash matches, validate that the certificate presented by the server can be validated by the server's CA bundle."}),"\n",(0,s.jsx)(t.li,{children:"If the server certificate is valid, present credentials to join the cluster using either basic or bearer token authentication, depending on the token type."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"short",children:"Short"}),"\n",(0,s.jsx)(t.p,{children:"The short token format includes only the password or bearer token used to authenticate the joining node to the cluster."}),"\n",(0,s.jsxs)(t.p,{children:["If a short token is used, the joining node implicitly trusts the CA bundle presented by the server; steps 2-4 in the TLS Bootstrapping process are skipped. The initial connection may be vulnerable to ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",children:"man-in-the-middle"})," attack."]}),"\n",(0,s.jsx)(t.h2,{id:"token-types",children:"Token Types"}),"\n",(0,s.jsx)(t.p,{children:"K3s supports three types of tokens. Only the server token is available by default; additional token types must be configured or created by the administrator."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"CLI Option"}),(0,s.jsx)(t.th,{children:"Environment Variable"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Server"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--token"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"K3S_TOKEN"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Agent"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--agent-token"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"K3S_AGENT_TOKEN"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bootstrap"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"n/a"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"n/a"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"server",children:"Server"}),"\n",(0,s.jsxs)(t.p,{children:["If no token is provided when starting the first server in the cluster, one is created with a random password. The server token is always written to ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/token"}),", in secure format."]}),"\n",(0,s.jsx)(t.p,{children:"The server token can be used to join both server and agent nodes to the cluster. It cannot be changed once the cluster has been created, and anyone with access to the server token essentially has full administrator access to the cluster. This token should be guarded carefully."}),"\n",(0,s.jsxs)(t.p,{children:["The server token is also used as the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/PBKDF2",children:"PBKDF2"})," passphrase for the key used to encrypt confidential information that is persisted to the datastore, such as the secrets-encryption configuration, wireguard keys, and private keys for cluster CA certificates and service-account tokens. For this reason, the token must be backed up alongside the cluster datastore itself."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Unless custom CA certificates are in use, only the short (password-only) token format can be used when starting the first server in the cluster. This is because the cluster CA hash cannot be known until after the server has generated the self-signed cluster CA certificates."})}),"\n",(0,s.jsxs)(t.p,{children:["For more information on using custom CA certificates, see the ",(0,s.jsxs)(t.a,{href:"/docs-k3s/cli/certificate",children:[(0,s.jsx)(t.code,{children:"k3s certificate"})," documentation"]}),".",(0,s.jsx)(t.br,{}),"\n","For more information on backing up your cluster, see the ",(0,s.jsx)(t.a,{href:"/docs-k3s/datastore/backup-restore",children:"Backup and Restore"})," documentation."]}),"\n",(0,s.jsx)(t.h3,{id:"agent",children:"Agent"}),"\n",(0,s.jsx)(t.p,{children:"By default, the agent token is the same as the server token. The agent token can be set before or after the cluster has been started, by changing the CLI option or environment variable on all servers in the cluster. The agent token is similar to the server token in that is it statically configured, and does not expire."}),"\n",(0,s.jsxs)(t.p,{children:["The agent token is written to ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/agent-token"}),", in secure format. If no agent token is specified, this file is a link to the server token."]}),"\n",(0,s.jsx)(t.h3,{id:"bootstrap",children:"Bootstrap"}),"\n",(0,s.jsx)(t.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(t.p,{children:["Support for the ",(0,s.jsx)(t.code,{children:"k3s token"})," command and the ability to join nodes with bootstrap tokens is available starting with the 2023-02 releases (v1.26.2+k3s1, v1.25.7+k3s1, v1.24.11+k3s1, v1.23.17+k3s1)."]})}),"\n",(0,s.jsx)(t.p,{children:"K3s supports dynamically generated, automatically expiring agent bootstrap tokens. Bootstrap tokens can only be used to join agents."}),"\n",(0,s.jsx)(t.h2,{id:"k3s-token-1",children:"k3s token"}),"\n",(0,s.jsxs)(t.p,{children:["K3s bootstrap tokens use the same generation and validation code as ",(0,s.jsx)(t.code,{children:"kubeadm token"})," bootstrap tokens, and the ",(0,s.jsx)(t.code,{children:"k3s token"})," CLI is similar."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"NAME:\n   k3s token - Manage bootstrap tokens\n\nUSAGE:\n   k3s token command [command options] [arguments...]\n\nCOMMANDS:\n   create    Create bootstrap tokens on the server\n   delete    Delete bootstrap tokens on the server\n   generate  Generate and print a bootstrap token, but do not create it on the server\n   list      List bootstrap tokens on the server\n   rotate    Rotate original server token with a new bootstrap token\n\nOPTIONS:\n   --help, -h  show help\n"})}),"\n",(0,s.jsx)(t.h4,{id:"k3s-token-create-token",children:(0,s.jsx)(t.code,{children:"k3s token create [token]"})}),"\n",(0,s.jsxs)(t.p,{children:["Create a new token. The ",(0,s.jsx)(t.code,{children:"[token]"})," is the actual token to write, as generated by ",(0,s.jsx)(t.code,{children:"k3s token generate"}),". If no token is given, a random one will be generated."]}),"\n",(0,s.jsx)(t.p,{children:"A token in secure format, including the cluster CA hash, will be written to stdout. The output of this command should be saved, as the secret portion of the token cannot be shown again."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Flag"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--data-dir"})," value"]}),(0,s.jsx)(t.td,{children:"Folder to hold state (default: /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--kubeconfig"})," value"]}),(0,s.jsx)(t.td,{children:"Server to connect to [$KUBECONFIG]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--description"})," value"]}),(0,s.jsx)(t.td,{children:"A human friendly description of how this token is used"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--groups"})," value"]}),(0,s.jsxs)(t.td,{children:['Extra groups that this token will authenticate as when used for authentication. (default: Default: "system:bootstrappers:k3s',":default-node-token",'")']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--ttl"})," value"]}),(0,s.jsx)(t.td,{children:"The duration before the token is automatically deleted (e.g. 1s, 2m, 3h). If set to '0', the token will never expire (default: 24h0m0s)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--usages"})," value"]}),(0,s.jsx)(t.td,{children:'Describes the ways in which this token can be used. (default: "signing,authentication")'})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"k3s-token-delete",children:(0,s.jsx)(t.code,{children:"k3s token delete"})}),"\n",(0,s.jsx)(t.p,{children:"Delete one or more tokens. The full token can be provided, or just the token ID."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Flag"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--data-dir"})," value"]}),(0,s.jsx)(t.td,{children:"Folder to hold state (default: /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--kubeconfig"})," value"]}),(0,s.jsx)(t.td,{children:"Server to connect to [$KUBECONFIG]"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"k3s-token-generate",children:(0,s.jsx)(t.code,{children:"k3s token generate"})}),"\n",(0,s.jsx)(t.p,{children:"Generate a randomly-generated bootstrap token."}),"\n",(0,s.jsxs)(t.p,{children:["You don't have to use this command in order to generate a token. You can do so yourself as long as it is in the format \"[a-z0-9]",6,".[a-z0-9]",16,'", where the first portion is the token ID, and the second portion is the secret.']}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Flag"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--data-dir"})," value"]}),(0,s.jsx)(t.td,{children:"Folder to hold state (default: /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--kubeconfig"})," value"]}),(0,s.jsx)(t.td,{children:"Server to connect to [$KUBECONFIG]"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"k3s-token-list",children:(0,s.jsx)(t.code,{children:"k3s token list"})}),"\n",(0,s.jsx)(t.p,{children:"List bootstrap tokens, showing their ID, description, and remaining time-to-live."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Flag"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--data-dir"})," value"]}),(0,s.jsx)(t.td,{children:"Folder to hold state (default: /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--kubeconfig"})," value"]}),(0,s.jsx)(t.td,{children:"Server to connect to [$KUBECONFIG]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--output"})," value"]}),(0,s.jsx)(t.td,{children:'Output format. Valid options: text, json (default: "text")'})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"k3s-token-rotate",children:(0,s.jsx)(t.code,{children:"k3s token rotate"})}),"\n",(0,s.jsx)(t.admonition,{title:"Version Gate",type:"info",children:(0,s.jsx)(t.p,{children:"Available as of 2023-10 releases (v1.28.2+k3s1, v1.27.7+k3s1, v1.26.10+k3s1, v1.25.15+k3s1)."})}),"\n",(0,s.jsx)(t.p,{children:"Rotate original server token with a new bootstrap token. After running this command, all servers and any agents that originally joined with the old token must be restarted with the new token."}),"\n",(0,s.jsx)(t.p,{children:"If you do not specify a new token, one will be generated for you."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Flag"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--data-dir"})," value"]}),(0,s.jsx)(t.td,{children:"Folder to hold state (default: /var/lib/rancher/k3s or ${HOME}/.rancher/k3s if not root)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--kubeconfig"})," value"]}),(0,s.jsx)(t.td,{children:"Server to connect to [$KUBECONFIG]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--server"})," value"]}),(0,s.jsxs)(t.td,{children:['Server to connect to (default: "',(0,s.jsx)(t.a,{href:"https://127.0.0.1:6443",children:"https://127.0.0.1:6443"}),'") [$K3S_URL]']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--token"})," value"]}),(0,s.jsx)(t.td,{children:"Existing token used to join a server or agent to a cluster [$K3S_TOKEN]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--new-token"})," value"]}),(0,s.jsx)(t.td,{children:"New token that replaces existing token"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);