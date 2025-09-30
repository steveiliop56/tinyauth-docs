---
title: GitHub Apps OAuth
description: Use the GitHub Apps OAuth screen for authenticating to Tinyauth.
---

# OAuth with Github Apps

Tinyauth also supports Github Apps for authentication instead of OAuth Apps. Github Apps allow more control over permissions and are a bit more complex to setup. For the time being it is recommended you use the simple [OAuth Apps](/docs/guides/github-oauth.md).

## Requirements

Github requires the following to setup an app:

- A domain name (non gTLDs are supported)
- A Github account

## Create the Github App

Firstly open the [Github Apps](https://github.com/settings/apps) site and click **New Github App**. You should see the following screen:

![Github New App Screen](/screenshots/github-app-new.png)

There you need to fill in the following information:

| Name            | Value                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Github App Name | The name for your app, it can be anything, e.g. `Tinyauth`.                                                                                                               |
| Homepage URL    | Again can be anything, you can use `https://tinyauth.app`.                                                                                                                |
| Callback URL    | This is the important part. You need to put the Tinyauth app URL followed by `/api/oauth/callback/github`, e.g. `https://tinyauth.example.com/api/oauth/callback/github`. |

Under webhook make sure to **uncheck** the active checkbox as we will not need any webhooks.

Finally under permissions, click **Account permissions** and set the **Email Addresses** option to **Read-only**.

![Github Emails Section](/screenshots/github-app-email.png)

Then you can create your app and you should be greeted by this screen:

![Github App Home](/screenshots/github-app-home.png)

Here, make sure to note down your client ID as you will need it later. You also need a client secret which you can obtain by clicking the **Generate new client secret** button. You may need to authenticate again but once you do, it will appear like this:

![Github Client Secret](/screenshots/github-app-client-secret.png)

Make sure to also note this down as it will not be available again and you will need it for Tinyauth.

## Configure Tinyauth

Now that you have your client ID and secret, you can add the following environment variables to the Tinyauth docker container:

```yaml
environment:
  - GITHUB_CLIENT_ID=your-github-client-id
  - GITHUB_CLIENT_SECRET=your-github-secret
```

:::warning
OAuth doesn't mean security, with the current setup everybody with a Github account can login to Tinyauth as a normal user. If you would like to limit which users can login with OAuth, you can add the `OAUTH_WHITELIST` environment variable and only allow your email address to login. For more information check the [configuration](/docs/reference/configuration.md) page.
:::

:::tip
Since you have OAuth enabled, you can now remove the `USERS` or `USERS_FILE` environment variables so as you can ony login with your OAuth provider.
:::

And you are done! After you restart Tinyauth and try to login to an app, you should have an additional option to login with Github.
