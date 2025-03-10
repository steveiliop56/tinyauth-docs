# Getting Started

As promised in the readme, tinyauth is extremely easy to get up and running.

::: info
Tinyauth by default ships with the traefik proxy, if you are using a different proxy there are available guides for [Nginx Proxy Manager](/docs/guides/nginx-proxy-manager) and [Caddy](/docs/community/caddy).
:::

## Installation

To get started simply add the tinyauth service next to your traefik container:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:latest
  environment:
    - SECRET=some-random-32-chars-string
    - APP_URL=https://tinyauth.example.com
    - USERS=your-username-password-hash
  labels:
    traefik.enable: true
    traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
    traefik.http.services.tinyauth.loadbalancer.server.port: 3000
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth/traefik
```

::: info
Make sure to set the labels according to your own setup, this guide includes the most basic ones.
:::

::: warning
Tinyauth accepts a comma separated list of `username:password-hash` combinations. To generate your hash go to [IT Tools](https://it-tools.tech/) and use the bcrypt module. Make sure to escape the hash by doubling every dollar sign. Example:
`user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u` (username is `user` and password is `password`).
:::

::: tip
You can also use the tinyauth CLI to generate your credentials. For more information check the CLI reference [here](./reference/cli.md).
:::

Then for every app you want tinyauth to protect just add the following label:

```yaml
traefik.http.routers.[your-router].middlewares: tinyauth
```

And that's it! When you try to visit an app you should be redirected to the tinyauth login page.

## Example Docker compose file

Here is a full example with traefik, nginx and tinyauth:

```yaml
services:
  traefik:
    container_name: traefik
    image: traefik:v3.3
    command: --api.insecure=true --providers.docker
    ports:
      - 80:80
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  whoami:
    container_name: whoami
    image: traefik/whoami:latest
    labels:
      traefik.enable: true
      traefik.http.routers.nginx.rule: Host(`whoami.example.com`)
      traefik.http.services.nginx.loadbalancer.server.port: 80
      traefik.http.routers.nginx.middlewares: tinyauth

  tinyauth:
    container_name: tinyauth
    image: ghcr.io/steveiliop56/tinyauth:latest
    environment:
      - SECRET=some-random-32-chars-string
      - APP_URL=https://tinyauth.example.com
      - USERS=user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u # user:password
    labels:
      traefik.enable: true
      traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
      traefik.http.services.tinyauth.loadbalancer.server.port: 3000
      traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth/traefik
```
