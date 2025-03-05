# Headers

Tinyauth adds the following headers in the authentication response to make authentication easier with different identity providers.

## Supported headers

### Tinyauth user

The `X-Forwarder-User` is a header set by tinyauth in the response containing the email address/username of the currently logged in user.

## Adding headers to proxy

You firstly need to tell your proxy to forward the header. This varies from proxy to proxy.

### Traefik

Just add the following in the tinyauth lables:

```yaml
traefik.http.middlewares.tinyauth.forwardauth.authResponseHeaders: X-Tinyauth-User
```

### Caddy

Just add the following label in the caddy labels:

```yaml
caddy.forward_auth.copy_headers: X-Tinyauth-User
```

### Nginx/Nginx Proxy Manager

Add the following lines after the `error_page 401 = @tinyauth_login;`:

```shell
auth_request_set $tinyauth_user $upstream_http_x_tinyauth_user;
proxy_set_header X-Tinyauth-User $tinyauth_user;
```
