import{j as n}from"./index-BDrdAJGi.js";let i={title:"Flow",description:"Reference on Tinyauth's authentication flow."},c=[],u={contents:[{heading:void 0,content:"Tinyauth operates with a straightforward authentication process. The sequence diagram below illustrates the flow of authentication:"}],headings:[]};const h=[];function o(e){const t={p:"p",...e.components},{Mermaid:r}=t;return r||s("Mermaid"),n.jsxs(n.Fragment,{children:[n.jsx(t.p,{children:"Tinyauth operates with a straightforward authentication process. The sequence diagram below illustrates the flow of authentication:"}),`
`,n.jsx(r,{chart:`sequenceDiagram
    User->>Proxy: Request resource
    Proxy->>Tinyauth: Forward auth request
    Tinyauth->>User: Login screen
    User->>Tinyauth: Login
    Tinyauth->>User: Set cookie
    Tinyauth->>User: Redirect to resource
    User->>Proxy: Request resource
    Proxy->>Tinyauth: Forward auth request
    Tinyauth->>Proxy: Success
    Proxy->>App: User request
    App->>User: Response`})]})}function d(e={}){const{wrapper:t}=e.components||{};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}function s(e,t){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{d as default,c as extractedReferences,i as frontmatter,u as structuredData,h as toc};
