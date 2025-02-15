# Changelog

Below you can find all release notes from all Tinyauth versions:

## v2.1.1

### Fixes

- Check if docker daemon is available before trying to check for container labels
- Redirect to the app URL for the internal server error page

## v2.1.0

### New features

- Tailscale OAuth provider
- Access controls for protected apps

### Fixes

- Omit the domain port from the cookie domain
- Fix generic OAuth config not getting parsed correctly
- Fix how OAuth providers are displayed

## v2.0.2

### Improvements

- Handle cross protocol redirection correctly alongside with a verification screen
- The continue screen has a go home button when no redirect URI is provided
- The logger will now not print any sensitive information apart from the email address

### Fixes

- Split domain correctly to take account a custom port
- Fix the logger printing debug information without a log level set

## v2.0.1

### Fixes

- Do not add comma when the environment variable is empty.
- Trim spaces from users in user file.

## v2.0.0

### Migration guide

To migrate you can just change the `WHITELIST` environment variable to `OAUTH_WHITELIST` and everything will work correctly. You can also change all your emails back to usernames if you prefer username/password but tinyauth won't stop you from using an email as a username.

### New features

- New `SECRETS_FILE` (`--secrets-file`) environment variable allowing you to use a file to store the app secret.
- New `GITHUB_CLIENT_SECRET_FILE` (`--github-client-secret-file`) environment variable allowing you to use a file to store the secret.
- New `GOOGLE_CLIENT_SECRET_FILE` (`--google-client-secret-file`) environment variable allowing you to use a file to store the secret.
- New `GENERIC_CLIENT_SECRERT_FILE` (`--generic-client-secret-file`) environment variable allowing you to use a file to store the secret.
- New `LOG_LEVEL` (`--log-level`) environment variable allowing you to use debug log level for verbose logging.

### Improvements

- OAuth token is only used to obtain the user email address and it is not stored on the client.
- Login screen allows you to use non-email values.
- Cookie logic has been rewritten to use the cookie store correctly.
- Debug logs have been added everywhere in the app to make debugging easy.
- Users are not a requirement when using OAuth.
- User parsing has been rewritten.

### Fixes

- Fix the `WHITELIST` environment variable not matching with the `--oauth-whitelist` flag.

## v1.0.0

### Migration instructions

The only migration you need to do is to change your username into an email address, this applies for both `USERS` and `USERS_FILE`. Here is an example:

`user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u` becomes `user@example.com:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u`

After this simple change just change the tinyauth version to `v1.0.0` and it should start up normally.

### New features

- Support for Google, Github and Generic OAuth providers for authenticating.
- Option to disable continue screen when logging in and immediately redirect to the app.
- Option to set custom expiry for the session cookie.
- Option to whitelist specific email addresses for OAuth.

### Improvements

- Every API error is now logged and the user sees an internal server error page instead of the raw response.

### Fixes

- Fix the cookie expiry date set to session mode.
- Split app URL correctly.

## v0.3.0

### New features

- Create user command
- Verify user command
- Option to send cookie only through https

### Improvements

- Use dependency injection pattern to make the code more readable

### Fixes

- Split `APP_URL` correctly so that the cookie is not set for the root domain if subdomains are being used

## v0.2.0

### New features

- Allow configuration of users through a file (same as `.htpasswd`).

### Improvements

- The `ROOT_URL` environment variable is no longer needed as tinyauth gets the root domain from the `APP_URL`.
- The user is displayed as code in the logout screen.

### Fixes

- Fix the continue screen showing the continue button when no redirect uri is set.
