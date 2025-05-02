# Setting up tinyauth with Zitadel

_Contributor: [@WilliamB78](https://github.com/WilliamB78)._

Tinyauth has built-in support for any generic OAuth provider, and in this guide we will use Zitadel to authenticate our users. Let's get started!

## Requirements

For this guide, you will need the following:

- A valid domain (e.g., `.com`, `.org`, `.work`). `.local` will **not** work.
- A Zitadel instance (cloud or self-hosted).

## Create the Zitadel OAuth app

To begin with, we need to create an app in Zitadel. This can be done by visiting the Zitadel Console. You need to create a new project, for the app just use Tinyauth.

Then create a new application by clicking on the "+" blue button.

Follow the wizard and configure the app like this :

**Name** -> Tinyauth

**Type** -> Web

**Authentication Method** -> Code

**Redirect URI** -> `https://tinyauth.example.com/api/oauth/callback/generic`

Finalize by clicking on the "Create" button, and copy the client ID and the client secret.

After your application gets created, you should have a screen like this:

![Zitadel configuration view](/screenshots/zitadel-configuration-view.png)

![Zitadel redirect view](/screenshots/zitadel-redirect-view.png)

## Configure Tinyauth

Now that we have our Client ID and Secret, we can pass it to the tinyauth Docker container:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:v3
  restart: unless-stopped
  environment:
    - SECRET=some-random-32-chars-string
    - APP_URL=https://tinyauth.example.com
    - GENERIC_SCOPES="openid profile email preferred_username groups"
    - GENERIC_AUTH_URL=https://zitadel.example.com/oauth/v2/authorize
    - GENERIC_TOKEN_URL=https://zitadel.example.com/oauth/v2/token
    - GENERIC_USER_URL=https://zitadel.example.com/oidc/v1/userinfo
    - GENERIC_CLIENT_ID= # Paste from previous step
    - GENERIC_CLIENT_SECRET= # Paste from previous step
    - GENERIC_NAME=Zitadel
    - OAUTH_AUTO_REDIRECT=generic
    - DISABLE_CONTINUE=true
  labels:
    traefik.enable: true
    traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth/traefik
    traefik.http.middlewares.tinyauth.forwardauth.authResponseHeaders: Remote-User, Remote-Email, Remote-Name, Remote-Groups
```

::: warning
OAuth doesn't mean security, with the current setup everybody with a Zitadel account can login to tinyauth as a normal user. If you would like to limit which users can login with OAuth, you can add the `OAUTH_WHITELIST` environment variable and allow only your email address to login. For more information check [here](../reference/configuration.md)
:::

And we are done! After you restart your Docker container and go to the tinyauth login screen, you should have an additional option to log in with Zitadel.
