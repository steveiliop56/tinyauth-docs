# Headers

Tinyauth adds the following headers in the authentication response to make authentication easier with different identity providers.

## Supported headers

### Tinyauth user

The `Remote-User` is a header set by tinyauth in the response containing the email address/username of the currently logged in user, this can be helpful in some apps that allow authentication from the reverse proxy.

## Adding headers to proxy

You firstly need to tell your proxy to forward the header. This varies from proxy to proxy.

### Traefik

Just add the following in the tinyauth lables:

```yaml
traefik.http.middlewares.tinyauth.forwardauth.authResponseHeaders: Remote-User
```

### Caddy

Just add the following label in the caddy labels:

```yaml
caddy.forward_auth.copy_headers: Remote-User
```

### Nginx/Nginx Proxy Manager

Add the following lines after the `error_page 401 = @tinyauth_login;`:

```shell
auth_request_set $remote_user $upstream_http_remote_user;
proxy_set_header Remote-User $remote_user;
```
