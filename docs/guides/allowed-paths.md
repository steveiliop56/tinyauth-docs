# Allowed Paths

Sometimes you may want to allow a specific path of your application (like `/api`) to be available without having the Tinyauth login screen since these paths usually have their own authentication. This is why Tinyauth supports a regex ignore list for this exact reason.

## Modifying the Tinyauth container

We firstly need to make some small changes to the Tinyauth container. We will use the example from the getting started guide and modify it like this:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:v3
  restart: unless-stopped
  environment:
    - SECRET=some-random-32-chars-string
    - APP_URL=https://tinyauth.example.com
    - USERS=your-username-password-hash
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock # <- Added line
  labels:
    traefik.enable: true
    traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth/traefik
```

## Modifying the app

Now let's use the Nginx example from the getting started guide and add the access controls:

```yaml
whoami:
  container_name: whoami
  image: traefik/whoami:latest
  restart: unless-stopped
  labels:
    traefik.enable: true
    traefik.http.routers.nginx.rule: Host(`whoami.example.com`)
    traefik.http.routers.nginx.middlewares: tinyauth
    tinyauth.allowed: \/api.*
```

In this example if you visit `http://whoami.example.com` you will be redirected to Tinyauth's login screen but if you try to access `http://whoami.example.com/api` you will be allowed to use it.

:::info
If you need help building your regex string, I recommend [https://regex101.com](https://regex101.com), an entire IDE just for regex.
:::
