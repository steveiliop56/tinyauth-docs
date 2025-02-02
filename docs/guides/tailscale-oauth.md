# Setting up Tinyauth with Tailscale OAuth

Tailscale is widely used in the homelab space so it is a requirement for Tinyauth to support it as an authentication method. The entire thing can be set up in less than 5 minutes and just a few clicks. Let's get started!

## Requirements

Tailscale is even simpler in its requirements! You just need the following:

- Any domain name (literally everything, even `.local`/`.lan`/`localhost`)
- A Tailscale account

## Create the Tailscale OAuth app

You firstly need to create the Tailscale OAuth application, this can be done by opening the settings [here](https://login.tailscale.com/admin/settings/oauth) and clicking Generate OAuth Client. You should see a screen like this:

![Tailscale Generate OAuth](/screenshots/tailscale-oauth-generate.png)

There just fill in a description, e.g. "Tinyauth" and make sure you tick the Read checkbox in the Users category, then just click Generate Client. A new pop-up should appear with your Client ID and secret, make sure you note these down as we will need them later. That's it! We are done with Tailscale!

## Configure Tinyauth

Now that we have our client ID and secret, we can pass it to the tinyauth docker container:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:latest
  environment:
    - SECRET=some-random-32-chars-string
    - APP_URL=https://tinyauth.example.com
    - TAILSCALE_CLIENT_ID=your-tailscale-client-id
    - TAILSCALE_CLIENT_SECRET=your-tailscale-secret
  labels:
    traefik.enable: true
    traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
    traefik.http.services.tinyauth.loadbalancer.server.port: 3000
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth
```

::: warning
OAuth doesn't mean security, with the current setup everybody with a Tailscale account can login to Tinyauth as a normal user. If you would like to limit which users can login with OAuth, you can add the `OAUTH_WHITELIST` environment variable and allow only your email address to login. For more information check [here](../reference/configuration.md)
:::

And we are done! After you restart your docker container and go to the tinyauth login screen, you should have an additional option to login with Tailscale.
