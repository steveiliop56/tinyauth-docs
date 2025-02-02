# Setting up access controls with Tinyauth

Tinyauth supports basic access controls with docker labels. You can use them to restrict access to specific applications to only a small amount of users. Let's see how you can set them up.

## Modifying the Tinyauth container

We firstly need to make some small changes to the Tinyauth container. We will use the example from the getting started guide and modify it like this:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:latest
  environment:
    - SECRET=some-random-32-chars-string
    - APP_URL=https://tinyauth.example.com
    - USERS=your-username-password-hash
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock # <- Added line
  labels:
    traefik.enable: true
    traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
    traefik.http.services.tinyauth.loadbalancer.server.port: 3000
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth
```

In this example let's assume your users are `user1` and `user2` and your OAuth whitelist includes `user1@example.com` and `user2@example.com`.

## Modifying the App

Now let's take the Nginx example from the getting started guide and add the access controls:

```yaml
nginx:
  container_name: nginx
  image: nginx:latest
  labels:
    traefik.enable: true
    traefik.http.routers.nginx.rule: Host(`nginx.example.com`)
    traefik.http.services.nginx.loadbalancer.server.port: 80
    traefik.http.routers.nginx.middlewares: tinyauth
    tinyauth.oauth.whitelist: user2@example.com # <- Added line
    tinyauth.users: user1 # <- Added line
```

In this example, only `user1` will have access with simple username/password authentication and only `user2@example.com` will be able to access the app with OAuth. If either `user2` or `user1@example.com` try to access the app, they will be redirected to an unauthorized screen.

That's it! You just configured access controls in Tinyauth!
