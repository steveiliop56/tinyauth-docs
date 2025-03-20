# Setting up access controls with tinyauth

Tinyauth supports basic access controls with docker labels. You can use them to restrict access to specific applications to only a small amount of users. Let's see how you can set them up.

## Modifying the tinyauth container

We firstly need to make some small changes to the tinyauth container. We will use the example from the getting started guide and modify it like this:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:v3
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

In this example let's assume your users are `user1` and `user2` and your OAuth whitelist includes `user1@example.com` and `user2@example.com`.

## Modifying the app

Now let's take the nginx example from the getting started guide and add the access controls:

```yaml
whoami:
  container_name: whoami
  image: traefik/whoami:latest
  labels:
    traefik.enable: true
    traefik.http.routers.nginx.rule: Host(`whoami.example.com`)
    traefik.http.routers.nginx.middlewares: tinyauth
    tinyauth.oauth.whitelist: user2@example.com # <- Added line
    tinyauth.users: user1 # <- Added line
```

In this example, only `user1` will have access with simple username/password authentication and only `user2@example.com` will be able to access the app with OAuth. If either `user2` or `user1@example.com` try to access the app, they will be redirected to an unauthorized screen.

That's it! You just configured access controls in tinyauth!
