# Getting Started

As promised in the readme, tinyauth is extremely easy to get up and running.

## Installation

To get started simply add the tinyauth service next to your traefik container

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
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth
```

::: info
Make sure to set your labels according to your own setup, this guide includes the most basic ones.
:::

::: warning
Tinyauth accepts a comma seperated list of `username:password-hash` combinations. To generate your hash go to [IT Tools](https://it-tools.tech/) and use the bcrypt module. Make sure to escape the hash by doubling every dollar sign. Example:
`user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u` (username is `user` and password is `password`).
:::

Then for every app you want tinyauth to protect just add the following label:

```yaml
traefik.http.routers.nginx.middlewares: tinyauth
```

And that's it! When you try to visit an app you should be redirected to the tinyauth login page.
