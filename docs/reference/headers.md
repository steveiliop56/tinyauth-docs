---
sidebar_position: 3
---

# Headers

Setting headers can be useful for authenticating to apps with the credentials from Tinyauth. While Tinyauth offers some defaults, it also allows you to set any headers you like that will be automatically returned in the authentication server response.

## Supported headers

### Remote user

The `Remote-User` header contains the username of the currently logged in user.

If you are using an OAuth provider, Tinyauth will try to retrieve the `preferred_username` claim from the OIDC response. If it isn't included in the response, Tinyauth will make a pseudo one using your email address in the format of `username_domain.com`.

### Remote email

The `Remote-Email` header contains the email of the currently logged in user.

If you are using simple username and password authentication, a pseudo email address will be created using your username and the currently configured domain. If you are using OAuth then the email from your OAuth provider will be used (retrieved from the `email` claim).

### Remote name

The `Remote-Name` header contains the full name of the currently logged in user.

If you are using simple username and password authentication or your OAuth provider does not provide the `name` claim, a pseudo name will be created either with either your username in the format of `User` or with your email in the format of `User (example.com)`.

### Remote groups

The `Remote-Groups` header contains the groups of the currently logged in user. They are retrieved from the `groups` claim in your OIDC server. They can be used to allow access to specific user groups configured by your OIDC server. For more information check the [OIDC access controls](/docs/guides/access-controls.md#access-controls-using-oidc-groups) guide.

### Custom headers

You can set the `tinyauth.headers` label on any container that uses the Tinyauth middleware and it will automatically add them to its response. For example, you can have the following line in your app's labels:

```yaml
tinyauth.headers: my-header=cool
```

And when you authenticate to your app through Tinyauth, your app will receive the `my-header` header.

:::warning
Make sure to create a list of trusted proxy URLs that your app accepts headers from. If your app trusts all proxies then anyone can just send the header to your app and possibly bypass any authentication you have set.
:::

:::info
In order for the labels to work the container name needs to be the same as the exposed domain. For example, if your app is exposed at `app.example.com`, then the container name has to be `app` else Tinyauth won't be able to pick up the labels. This is a temporary issue and it will be fixed in a future update.
:::

## Adding headers to proxy

To add the headers to the proxy responses you need to configure your proxy to forward the headers. This varies from proxy to proxy.

### Traefik

Just add the following in the Tinyauth container lables:

```yaml
traefik.http.middlewares.tinyauth.forwardauth.authResponseHeaders: remote-user # This can be a comma separated list of more headers you will like to copy like the custom ones you set
```

### Caddy

Just add the following label in the Caddy labels:

```yaml
caddy.forward_auth.copy_headers: remote-user # This can be a comma separated list of more headers you will like to copy like the custom ones you set
```

### Nginx/Nginx Proxy Manager

Add the following lines after the `error_page 401 = @tinyauth_login;`:

```shell
auth_request_set $tinyauth_remote_user $upstream_http_remote_user;
proxy_set_header remote-user $tinyauth_remote_user;
```

You can repeat this step multiple times to add more headers, for example:

```shell
auth_request_set $my_header $upstream_http_my_header;
proxy_set_header my-header $my_header;
```
