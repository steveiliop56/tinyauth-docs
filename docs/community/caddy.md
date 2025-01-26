# Caddy

The github user [Erwin](https://github.com/erwinkramer) created a caddy configuration that works with tinyauth.

## Example docker compose file

Below is an example docker compose file based on Erwin's config:

```yaml
services:
  caddy:
    container_name: caddy
    build:
      context: .
      dockerfile: Dockerfile
    restart: unless-stopped
    environment:
      - CADDY_INGRESS_NETWORKS=caddy-network
    ports:
      - 80:80
      - 443:443
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data/caddy:/data
    labels:
      caddy_1: (tinyauth_forwarder)
      caddy_1.forward_auth: tinyauth:3000
      caddy_1.forward_auth.uri: /api/auth

  tinyauth:
    container_name: tinyauth
    image: ghcr.io/steveiliop56/tinyauth:latest
    restart: unless-stopped
    environment:
      - DISABLE_CONTINUE=true
      - APP_URL=http://auth.example.com
      - SECRET=some-secret
      - OAUTH_WHITELIST=me@example.com
      - GITHUB_CLIENT_ID=client-id
      - GITHUB_CLIENT_SECRET=client-secret
    labels:
      caddy_0: http://auth.example.com
      caddy_0.reverse_proxy: "{{upstreams 3000}}"

  nginx:
    container_name: nginx
    image: nginx
    restart: unless-stopped
    labels:
      caddy_0: http://nginx.example.com
      caddy_0.reverse_proxy: nginx:80

  networks:
    caddy-network:
      name: caddy-network
      driver: bridge
```

You will also need the following `Dockerfile` present in the same directory:

```dockerfile
ARG CADDY_VERSION=2.9.1
FROM caddy:${CADDY_VERSION}-builder AS builder

RUN xcaddy build \
    --with github.com/lucaslorentz/caddy-docker-proxy/v2 \
    --with github.com/mholt/caddy-l4

FROM caddy:${CADDY_VERSION}-alpine

COPY --from=builder /usr/bin/caddy /usr/bin/caddy

CMD ["caddy", "docker-proxy"]
```
