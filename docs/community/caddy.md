# Caddy

_Contributor: [@erwinkramer](https://github.com/erwinkramer)_.

A Caddy configuration for docker compose, based on [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy), that works with Tinyauth to enable a fully labeled configuration.

## Authentication snippet

Include the following labels anywhere in your compose file under a service, this will create a reusable [snippet](https://caddyserver.com/docs/caddyfile/concepts#snippets), called `tinyauth_forwarder`, to forward auth:

```yaml
caddy: (tinyauth_forwarder)
caddy.forward_auth: tinyauth:3000
caddy.forward_auth.uri: /api/auth/caddy
```

This results in the following snippet:

```typescript
(tinyauth_forwarder) {
	forward_auth tinyauth:3000 {
		uri /api/auth/caddy
	}
}
```

Your `caddy-docker-proxy` service might look like this if you add the labels to it:

```yaml
caddy:
  container_name: caddy
  image: lucaslorentz/caddy-docker-proxy:latest
  restart: unless-stopped
  ports:
    - 80:80
    - 443:443
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
    - ./data/caddy:/data
  labels:
    caddy: (tinyauth_forwarder)
    caddy.forward_auth: tinyauth:3000
    caddy.forward_auth.uri: /api/auth/caddy
```

## Tinyauth configuration

Add Tinyauth and place it behind caddy with the `caddy` and `caddy.reverse_proxy` labels:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:v3
  restart: unless-stopped
  environment:
    - APP_URL=http://auth.example.com
    - SECRET=some-random-32-chars-string
    - USERS=your-username-password-hash
  labels:
    caddy: http://auth.example.com
    caddy.reverse_proxy: "{{upstreams 3000}}"
```

## Secure a service

Place any service behind Tinyauth, the only addition you need to secure a service is the reusable snippet, called `tinyauth_forwarder`, we created earlier:

```yaml
caddy.import: tinyauth_forwarder *
```

Using Whoami as an example, it might look like this:

```yaml
whoami:
  container_name: whoami
  image: traefik/whoami:latest
  restart: unless-stopped
  labels:
    caddy: http://whoami.example.com
    caddy.reverse_proxy: "{{upstreams 80}}"
    caddy.import: tinyauth_forwarder *
```

## Complete example

Here is a complete example with all the services together:

```yaml
services:
  caddy:
    container_name: caddy
    image: lucaslorentz/caddy-docker-proxy:latest
    restart: unless-stopped
    ports:
      - 80:80
      - 443:443
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data/caddy:/data
    labels:
      caddy: (tinyauth_forwarder)
      caddy.forward_auth: tinyauth:3000
      caddy.forward_auth.uri: /api/auth/caddy
      caddy.forward_auth.copy_headers: Remote-User Remote-Name Remote-Email Remote-Groups # optional when you want to make headers available to your service

  tinyauth:
    container_name: tinyauth
    image: ghcr.io/steveiliop56/tinyauth:v3
    restart: unless-stopped
    environment:
      - APP_URL=http://auth.example.com
      - SECRET=secret-has-to-be-32-chars
      - USERS=your-username-password-hash
    labels:
      caddy: http://auth.example.com
      caddy.reverse_proxy: "{{upstreams 3000}}"

  whoami:
    container_name: whoami
    image: traefik/whoami:latest
    restart: unless-stopped
    labels:
      caddy: http://whoami.example.com
      caddy.reverse_proxy: "{{upstreams 80}}"
      caddy.import: tinyauth_forwarder *
```
