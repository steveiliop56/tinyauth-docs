# Tinyauth with Pocket ID

[Pocket ID](https://pocket-id.org) is a really popular OIDC server that allows you to login to your apps with passkeys. Most proxies do not support OIDC/OAuth servers for authentication meaning that Pocket ID cannot be connected with them. With Tinyauth you can connect Pocket ID to your favorite proxy and use it to secure your apps.

## Requirements

This guide assumes you have a working Pocket ID installation. If you don't already have one you can check out [Pocket ID's documentation](https://pocket-id.org/docs/setup/installation) on how to install it.

## Configuring Pocket ID

To begin with you should visit Pocket ID's admin dashboard which should look like this:

![Pocket ID Admin Page](/screenshots/pocket-id-home.png)

There you should go to the **OIDC Clients** tab and click **Add OIDC Client**. A new menu will appear prompting you to provide some information. We only need to set two of these fields.

| Name          | Value                                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name          | Give your client a name. You can use `Tinyauth`.                                                                                                                       |
| Callback URLs | Here, you will need to fill in your Tinyauth app URL followed by `/api/oauth/callback/generic`. For example `https://tinyauth.example.com/api/oauth/callback/generic`. |

![Pocket ID Create Client](/screenshots/pocket-id-new-client.png)

You can also upload a logo for your OIDC client. You can download the Tinyauth logo from [Github](https://github.com/steveiliop56/tinyauth/blob/main/frontend/public/logo.png).

Finally click **Save**. A new page should be appear containing your OIDC credentials:

![Pocket ID Client Page](/screenshots/pocket-id-client-page.png)

Make sure to note down your client ID and secret as we will need them later.

## Configuring Tinyauth

In order for Pocket ID to work with Tinyauth we will need to use the generic provider. An example configuration will look like:

```yaml
tinyauth:
  image: ghcr.io/steveiliop56/tinyauth:v3
  container_name: tinyauth
  restart: unless-stopped
  environment:
    - SECRET=some-random-32-chars-string
    - APP_URL=https://tinyauth.example.com
    - GENERIC_CLIENT_ID=your-pocket-id-client-id
    - GENERIC_CLIENT_SECRET=your-pocket-id-client-secret
    - GENERIC_AUTH_URL=https://pocket-id.example.com/authorize
    - GENERIC_TOKEN_URL=https://pocket-id.example.com/api/oidc/token
    - GENERIC_USER_URL=https://pocket-id.example.com/api/oidc/userinfo
    - GENERIC_SCOPES=openid email profile groups
    - GENERIC_NAME=Pocket ID
  labels:
    traefik.enable: true
    traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth/traefik
```

:::tip
You can set the `OAUTH_AUTO_REDIRECT` environment variable to `generic` so every time you access a Tinyauth protected app, you will be automatically redirected to Pocket ID.
:::

:::warning
OAuth doesn't mean security, with the current setup everybody with a Pocket ID account can login to Tinyauth as a normal user. If you would like to limit which users can login with OAuth, you can add the `OAUTH_WHITELIST` environment variable and only allow your email address to login. For more information check the [configuration](/docs/reference/configuration.md) page.
:::

And you are done! After you restart Tinyauth and try to login to an app, you should have an additional option to login with Pocket ID.

## Access controls with Pocket ID groups

Pocket ID has support for user groups, this can be useful for managing your access controls entirely through Pocket ID and not through whitelists on Tinyauth. To use groups you will firstly need to create one. To do so firstly go to the **User Groups** tab and click **Add Group**. There you should give it a name and click **Save**.

![Pocket ID New Group](/screenshots/pocket-id-new-group.png)

After you create your group, you will be prompted to select the users included in it. You can select as many users as you like.

![Pocket ID Group Home](/screenshots/pocket-id-group-home.png)

Finally you will need to configure the Tinyauth protected apps to require OAuth groups. This can be configured with a simple label:

```yaml
whoami:
  container_name: whoami
  image: traefik/whoami:latest
  restart: unless-stopped
  labels:
    traefik.enable: true
    traefik.http.routers.nginx.rule: Host(`whoami.example.com`)
    traefik.http.routers.nginx.middlewares: tinyauth
    tinyauth.oauth.groups: admins # <-- Added line
```

In this example, only the Pocket ID users within the `admins` group will be able to access the app. Users not included in the group will be redirected to an unauthorized page.

:::warning
In order for the access controls to work the app must have the same container name as the subdomain it is exposed at, e.g. container name should be `hello` and the app should be exposed at `hello.example.com`. Using a different subdomain will **_not_** work.
:::

:::info
The OAuth and user whitelist can be a regular regex expression if it has the slash (`/`) prefix and suffix.
:::
