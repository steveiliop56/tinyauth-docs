---
title: Flow
description: Reference on Tinyauth's authentication flow.
---

Tinyauth is a really simple application. The way the authentication process works is the following:

```mermaid
sequenceDiagram
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
    App->>User: Response
```
