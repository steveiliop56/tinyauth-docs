# Caddy

*Contributor: [@erwinkramer](https://github.com/erwinkramer)*.

A caddy configuration for docker compose, based on [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy), that works with tinyauth to enable a fully labeled configuration.

## Authentication snippet

Include the following labels anywhere in your compose file under a service, this will create a reusable [snippet](https://caddyserver.com/docs/caddyfile/concepts#snippets), called `tinyauth_forwarder`, to forward auth:

```yaml
caddy: (tinyauth_forwarder)
caddy.forward_auth: tinyauth:3000
caddy.forward_auth.uri: /api/auth
```

This results in the following snippet:

```typescript
(tinyauth_forwarder) {
	forward_auth tinyauth:3000 {
		uri /api/auth
	}
}
```

Your `caddy-docker-proxy` service might look like this if you add the labels to it:

```yaml
caddy:
  container_name: caddy
  image: lucaslorentz/caddy-docker-proxy:latest
  ports:
    - 80:80
    - 443:443
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
    - ./data/caddy:/data
  labels:
    caddy: (tinyauth_forwarder)
    caddy.forward_auth: tinyauth:3000
    caddy.forward_auth.uri: /api/auth
```

## Tinyauth configuration

Add tinyauth and place it behind caddy with the `caddy` and `caddy.reverse_proxy` labels:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:latest
  environment:
    - APP_URL=http://auth.example.com
    - SECRET=secret___has_to_be_32_characters
    - OAUTH_WHITELIST=me@example.com
  labels:
    caddy: http://auth.example.com
    caddy.reverse_proxy: "{{upstreams 3000}}"
```

## Secure a service

Place any service behind tinyauth, the only addition you need to secure a service is the reusable snippet, called `tinyauth_forwarder`, we created earlier: 


```yaml
caddy.import: tinyauth_forwarder *
```

Using [Dozzle](https://dozzle.dev/) as an example, it might look like this:

```yaml
dozzle:
  container_name: dozzle
  image: amir20/dozzle:latest
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
  labels:
    caddy: http://dozzle.example.com
    caddy.reverse_proxy: "{{upstreams 8080}}"
    caddy.import: tinyauth_forwarder *
```

## Complete example

For a complete example, please check [erwinkramer/synology-nas-bootstrapper](https://github.com/erwinkramer/synology-nas-bootstrapper).
