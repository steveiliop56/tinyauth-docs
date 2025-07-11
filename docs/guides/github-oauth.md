# OAuth with Github OAuth

Tinyauth has builtin support for Github OAuth with just two environment variables. Most of the hard work happens on the Github side rather than Tinyauth.

## Requirements

For this guide you will need the following:

- A domain name (non gTLDs are supported)
- A Github account

## Create the Github OAuth app

The first thing you need to do is create a Github OAuth app, this can be done by going to the [Github developer settings](https://github.com/settings/developers) and clicking **New OAuth App**. There you need to fill in the following information:

| Name                       | Value                                                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application name           | Can be anything, e.g. `Tinyauth`.                                                                                                                                                |
| Homepage URL               | Again can be anything, you can use `https://tinyauth.app`.                                                                                                                       |
| Authorization Callback URL | The only thing that is important here, you should fill in your domain and the `/api/oauth/callback/github` suffix, e.g. `https://tinyauth.example.com/api/oauth/callback/github` |

![Github new OAuth app](/screenshots/github-new-oauth-app.png)

After you fill in your information, click **Register Application**.

## Get your credentials

After you create your application, you should see a screen like this:

![Github OAuth app homepage](/screenshots/github-oauth-app-homepage.png)

Here make sure to note down your client ID. Now, let's create the client secret, this can be done by clicking the **Generate a new client secret** button. When you click it, Github will prompt you to login again and then it will create your secret which it will present like this:

![Github OAuth Client Secret](/screenshots/github-oauth-client-secret.png)

Make sure to note this down as well since we will need it later and that's it, we are done with Github.

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
