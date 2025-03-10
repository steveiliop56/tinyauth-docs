# Setting up tinyauth with Github OAuth

Tinyauth has builtin support for Github OAuth with just two environment variables. Most of the hard work happens on the Github side rather than tinyauth :).

## Requirements

For this guide you will need the following:

- Any domain name (`.local` works too)
- A Github account

## Create the Github OAuth app

The first thing we need to do is create a Github OAuth app, this can be done by going to the Github developer settings [here](https://github.com/settings/developers) and clicking _New OAuth App_. There we need to fill in the following information:

**Application name** -> Can be anything, e.g. `Tinyauth`

**Homepage URL** -> It is required for some reason, so simply put `https://tinyauth.app`, but it can be anything

**Authorization Callback URL** -> The only thing that is important here, you should fill in your domain and the `/api/oauth/callback/github` suffix, e.g. `https://tinyauth.example.com/api/oauth/callback/github`

![Github new OAuth app](/screenshots/github-new-oauth-app.png)

After you fill in your information, click Register Application.

## Get your credentials

After you create your application, you should see a screen like this:

![Github OAuth app homepage](/screenshots/github-oauth-app-homepage.png)

Here make sure to note down your client ID. Now, let's create our client secret, this can be done by clicking the _Generate a new client secret_ button, when you click it Github will prompt you to login again and then it will create your secret which it will present like so:

![Github OAuth Client Secret](/screenshots/github-oauth-client-secret.png)

Make sure to note this too as we will need it later and that's it, we are done with Github.

## Configure tinyauth

Now that we have our client ID and secret, we can pass it to the tinyauth docker container:

```yaml
tinyauth:
  container_name: tinyauth
  image: ghcr.io/steveiliop56/tinyauth:v3
  environment:
    - SECRET=some-random-32-chars-string
    - APP_URL=https://tinyauth.example.com
    - USERS=your-email-password-hash
    - GITHUB_CLIENT_ID=your-github-client-id
    - GITHUB_CLIENT_SECRET=your-github-secret
  labels:
    traefik.enable: true
    traefik.http.routers.tinyauth.rule: Host(`tinyauth.example.com`)
    traefik.http.services.tinyauth.loadbalancer.server.port: 3000
    traefik.http.middlewares.tinyauth.forwardauth.address: http://tinyauth:3000/api/auth/traefik
```

::: warning
OAuth doesn't mean security, with the current setup everybody with a Github account can login to tinyauth as a normal user. If you would like to limit which users can login with OAuth, you can add the `OAUTH_WHITELIST` environment variable and allow only your email address to login. For more information check [here](../reference/configuration.md)
:::

And we are done! After you restart your docker container and go to the tinyauth login screen, you should have an additional option to login with Github.
