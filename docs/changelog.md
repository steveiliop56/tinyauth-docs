# Changelog

Below you can find all release notes from all Tinyauth versions:

## v2.1.1

### Tinyauth v2.1.1

Hello everyone, this is a small unexpected patch fix for an issue in the new access controls. The issue was discovered by @erwinkramer in #28. I also fixed an issue were the internal server error page would redirect to the internal URL instead of the app URL.

### Changelog

#### Fixes

- Check if docker daemon is available before trying to check for container labels
- Redirect to the app URL for the internal server error page

If you face any issues or discover any bugs, feel free to open an issue so I can fix them as soon as possible. Have fun :)

## v2.1.0

### Tinyauth v2.1.0

Hello everyone! This is Tinyauth v2.1.0 bringing basic access controls! You can now control the authorized OAuth and simple auth users by adding the `tinyauth.users` (comma separated list of allowed usernames) and `tinyauth.oauth.whitelist` (comma separated list of allowed OAuth emails) labels to every app protected by Tinyauth. If no users are set everyone is allowed, if a user tries to access a resource they are not allowed to, they will be redirected to an unauthorized page. I also added support for Tailscale OAuth so you can use it to login to your apps. The documentation will be updated as soon as possible with guides for the new features.

#### Full changelog

#### New features

- Tailscale OAuth provider
- Access controls for protected apps

#### Fixes

- Omit the domain port from the cookie domain
- Fix generic OAuth config not getting parsed correctly
- Fix how OAuth providers are displayed

If you face any issues or discover any bugs, feel free to open an issue so I can fix them as soon as possible. Have fun :)

## v2.0.2

### Tinyauth v2.0.2

Hello everyone, this is a small patch in tinyauth fixing issues #18, #19 and #21.

### Full changelog

Below is the full changelog:

#### Improvements

- Handle cross protocol redirection correctly alongside with a verification screen
- The continue screen has a go home button when no redirect URI is provided
- The logger will now not print any sensitive information apart from the email address

#### Fixes

- Split domain correctly to take account a custom port
- Fix the logger printing debug information without a log level set

If you find any bugs please let me know so I can fix them as soon as possible.

## v2.0.1

### Tinyauth v2.0.1

Hello everyone, this is a small patch fix that fixes a small error in the user parsing when only the file is used.

#### Full changelog

Below you can find the full changelog:

#### Fixes

- Do not add comma when the environment variable is empty.
- Trim spaces from users in user file.

## v2.0.0

### Tinyauth v2.0.0

::: warning
This is a breaking release, please check the migration steps below.
:::

Hello everyone, this is an unexpected breaking release and that's because of a typo I made in the environment variables. The major change is that the `WHITELIST` environment variable is not `OAUTH_WHITELIST`. I also decided to change the email/password back to username/password because there was no reason to keep an email. The security has also been upgraded since now the OAuth token is not stored on the client anymore.

#### Migration guide

To migrate you can just change the `WHITELIST` environment variable to `OAUTH_WHITELIST` and everything will work correctly. You can also change all your emails back to usernames if you prefer username/password but tinyauth won't stop you from using an email as a username.

#### Full changelog

Here is the full changelog:

#### New features

- New `SECRETS_FILE` (`--secrets-file`) environment variable allowing you to use a file to store the app secret.
- New `GITHUB_CLIENT_SECRET_FILE` (`--github-client-secret-file`) environment variable allowing you to use a file to store the secret.
- New `GOOGLE_CLIENT_SECRET_FILE` (`--google-client-secret-file`) environment variable allowing you to use a file to store the secret.
- New `GENERIC_CLIENT_SECRERT_FILE` (`--generic-client-secret-file`) environment variable allowing you to use a file to store the secret.
- New `LOG_LEVEL` (`--log-level`) environment variable allowing you to use debug log level for verbose logging.

#### Improvements

- OAuth token is only used to obtain the user email address and it is not stored on the client.
- Login screen allows you to use non-email values.
- Cookie logic has been rewritten to use the cookie store correctly.
- Debug logs have been added everywhere in the app to make debugging easy.
- Users are not a requirement when using OAuth.
- User parsing has been rewritten.

#### Fixes

- Fix the `WHITELIST` environment variable not matching with the `--oauth-whitelist` flag.

If you come across any bugs or issues please let me know so I can fix them as soon as possible.

## v1.0.0

### Tinyauth v1.0.0

::: warning
This is a breaking release, please check the migration steps below.
:::

Hello everyone! This is tinyauth v1.0.0 with full OAuth support! You can now use Google, Github or any generic OAuth provider to login to tinyauth and all of your services. I also decided to change the username/password authentication to email/password to match a regular login screen (this is the breaking part).

#### Migration instructions

The only migration you need to do is to change your username into an email address, this applies for both `USERS` and `USERS_FILE`. Here is an example:

`user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u` becomes `user@example.com:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u`

After this simple change just change the tinyauth version to `v1.0.0` and it should start up normally.

#### OAuth Guides

The documentation has been updated to include guides on how to set up OAuth with Google and Github.

**Google:** https://tinyauth.doesmycode.work/docs/guides/github-oauth.html

**Github:** https://tinyauth.doesmycode.work/docs/guides/google-oauth.html

#### Full changelog

Here is the full changelog:

#### New features

- Support for Google, Github and Generic OAuth providers for authenticating.
- Option to disable continue screen when logging in and immediately redirect to the app.
- Option to set custom expiry for the session cookie.
- Option to whitelist specific email addresses for OAuth.

#### Improvements

- Every API error is now logged and the user sees an internal server error page instead of the raw response.

#### Fixes

- Fix the cookie expiry date set to session mode.
- Split app URL correctly.

If you encounter any bugs or issues please let me know to fix them as soon as possible.

## v0.3.0

### Tinyauth v0.3.0

Hello everyone, this is a new tinyauth release adding some cool features. I focused on cleaning up some parts of the code and using dependency injection instead of passing props around to make the code more readable. This also allows me to easily implement oauth.

#### New features

- Create user command
- Verify user command
- Option to send cookie only through https

#### Improvements

- Use dependency injection pattern to make the code more readable

#### Fixes

- Split `APP_URL` correctly so that the cookie is not set for the root domain if subdomains are being used

## v0.2.0

### Tinyauth v0.2.0

Hello everyone, this is a small update to the configuration of tinyauth that removes the need for the `ROOT_URL` environment variable. I also added a small feature that allows you to configure your users with a file instead of environment variables.
Here is everything in detail:

#### New features

- Allow configuration of users through a file (same as `.htpasswd`).

#### Improvements

- The `ROOT_URL` environment variable is no longer needed as tinyauth gets the root domain from the `APP_URL`.
- The user is displayed as code in the logout screen.

#### Fixes

- Fix the continue screen showing the continue button when no redirect uri is set.

If you find any bugs please let me know so I can fix them as soon as possible.

## v0.1.0

Hello everyone,

This is the initial release of tiny auth, a very simple traefik forward auth middleware that secures all your apps with a login screen. It's still in early stages of development but it should work perfectly in a homelab environment. If you face any issue please let me know in the Issues section. If you wan to try it out there is an available example docker compose file [here](https://github.com/steveiliop56/tinyauth/blob/master/docker-compose.example.yml).

Have fun :)
