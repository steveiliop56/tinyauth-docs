# Tinyauth with Zitadel

_Contributor: [@WilliamB78](https://github.com/WilliamB78)._

Tinyauth has built-in support for any generic OAuth provider, and in this guide we will use Zitadel to authenticate our users. Let's get started!

## Requirements

For this guide, you will need the following:

- A domain name (gTLD required)
- A Zitadel instance (cloud or self-hosted).

## Create the Zitadel OAuth app

To begin with, you need to create an app in Zitadel. This can be done by visiting the Zitadel Console. You need to create a new project, for the app just use Tinyauth.

Then create a new application by clicking on the "+" blue button.

Follow the wizard and configure the app like this:

| Name                  | Value                                                     |
| --------------------- | --------------------------------------------------------- |
| Name                  | Tinyauth                                                  |
| Type                  | Web                                                       |
| Authentication Method | Code                                                      |
| Redirect URI          | `https://tinyauth.example.com/api/oauth/callback/generic` |

Finalize by clicking on the **Create** button, and copy the client ID and the client secret.

After your application gets created, you should have a screen like this:

![Zitadel configuration view](/screenshots/zitadel-configuration-view.png)

![Zitadel redirect view](/screenshots/zitadel-redirect-view.png)

## Configure Tinyauth

In order for Tinyauth to work with Zitadel we will need to use the generic OAuth provider, to do so, we will need to add the following environment variables to the Tinyauth docker container:

```yaml
environment:
  - GENERIC_SCOPES=openid profile email preferred_username groups
  - GENERIC_AUTH_URL=https://zitadel.example.com/oauth/v2/authorize
  - GENERIC_TOKEN_URL=https://zitadel.example.com/oauth/v2/token
  - GENERIC_USER_URL=https://zitadel.example.com/oidc/v1/userinfo
  - GENERIC_CLIENT_ID=your-zitadel-client-id
  - GENERIC_CLIENT_SECRET=your-zitadel-client-secret
  - GENERIC_NAME=Zitadel
```

:::warning
OAuth doesn't mean security, with the current setup everybody with a Zitadel account can login to Tinyauth as a normal user. If you would like to limit which users can login with OAuth, you can add the `OAUTH_WHITELIST` environment variable and only allow your email address to login. For more information check the [configuration](/docs/reference/configuration.md) page.
:::

:::tip
Since you have OAuth enabled, you can now remove the `USERS` or `USERS_FILE` environment variables so as you can ony login with your OAuth provider.
:::

And you are done! After you restart Tinyauth and try to login to an app, you should have an additional option to login with Zitadel.
