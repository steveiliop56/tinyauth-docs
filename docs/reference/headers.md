# Headers

Tinyauth adds the following headers in the authentication response to make authentication easier with different identity providers.

## Supported headers

### Tinyauth user

The `Remote-User` is a header set by tinyauth in the response containing the email address/username of the currently logged in user, this can be helpful in some apps that allow authentication from the reverse proxy.

### Custom headers

You can set the `tinyauth.headers` label on any container that uses the tinyauth middleware and it will automatically add them to its response. For example, you can have the following line in your app's labels:

```yaml
tinyauth.headers: My-Header=cool
```

And when you authenticate to your app through tinyauth, your app will receive the `My-Header` header.

::: warning
Make sure to create a list of trusted proxy URLs that your app accepts headers from. If your app trusts all proxies then anyone can just send the header to your app and possibly bypass any authentication you have set.
:::

## Adding headers to proxy

You firstly need to tell your proxy to forward the header. This varies from proxy to proxy.

### Traefik

Just add the following in the tinyauth lables:

```yaml
traefik.http.middlewares.tinyauth.forwardauth.authResponseHeaders: Remote-User # This can be a comma separated list of more headers you will like to copy like the custom ones you set
```

### Caddy

Just add the following label in the caddy labels:

```yaml
caddy.forward_auth.copy_headers: Remote-User # This can be a comma separated list of more headers you will like to copy like the custom ones you set
```

### Nginx/Nginx Proxy Manager

Add the following lines after the `error_page 401 = @tinyauth_login;`:

```shell
auth_request_set $remote_user $upstream_http_remote_user;
proxy_set_header Remote-User $remote_user;
```

You can repeat this step multiple times to add more headers, for example:

```shell
auth_request_set $my_header $upstream_my_header;
proxy_set_header My-Header $my_header;
```
