# Getting Started

As promised in the readme, tinyauth is extremely easy to get up and running.

::: info
Tinyauth by default ships with the traefik proxy, if you are using a different proxy there are available guides for [Nginx Proxy Manager](/docs/guides/nginx-proxy-manager) and [Caddy](/docs/community/caddy).
:::

## Installation

To get started simply add the tinyauth service next to your traefik container:

```yaml
tinyauth:
  image: ghcr.io/steveiliop56/tinyauth:v3
  container_name: tinyauth
  environment:
    - SECRET=some-random-32-chars-string
    - APP_URL=https://tinyauth.example.com
    - USERS=your-username-password-hash
  labels:
    traefik.enable: true
    traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth/traefik
```

::: info
Make sure to set the labels according to your own setup, this guide includes the most basic ones.
:::

::: info
Tinyauth accepts a comma separated list of `username:hash` combinations. Make sure escape the dollar signs by doubling them. If you are unsure on how to create your user you can use the tinyauth CLI by running `docker run -i -t --rm --name tinyauth ghcr.io/steveiliop56/tinyauth:v3 user create --interactive` or use [IT Tools](https://it-tools.tech/bcrypt) to generate the password hash.
:::

::: tip
Use this command to generate the `SECRET` value: `tr -dc A-Za-z0-9 </dev/urandom | head -c 32; echo`
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
    image: traefik:v3.3
    container_name: traefik
    command: --api.insecure=true --providers.docker
    ports:
      - 80:80
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  whoami:
    image: traefik/whoami:latest
    container_name: whoami
    labels:
      traefik.enable: true
      traefik.http.routers.nginx.rule: Host(`whoami.example.com`)
      traefik.http.routers.nginx.middlewares: tinyauth

  tinyauth:
    image: ghcr.io/steveiliop56/tinyauth:v3
    container_name: tinyauth
    environment:
      - SECRET=some-random-32-chars-string
      - APP_URL=https://tinyauth.example.com
      - USERS=user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u # user:password
    labels:
      traefik.enable: true
      traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
      traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth/traefik
```
