# Configuration

Tinyauth has a very simple configuration and everything is configurable with either CLI arguments or environment variables. The available environment variables/CLI options are:

| Name                  | Environment Variable    | CLI Argument              | Description                                                                                                     | Default   | Required |
| --------------------- | ----------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- | --------- | -------- |
| Port                  | `PORT`                  | `--port`                  | The port that the API/UI listens on.                                                                            | `3000`    | no       |
| Address               | `ADDRESS`               | `--address`               | The address the API/UI listens on.                                                                              | `0.0.0.0` | no       |
| App URL               | `APP_URL`               | `--app-url`               | The URL that tinyauth uses when redirecting for authentication.                                                 | -         | yes      |
| Secret                | `SECRET`                | `--secret`                | A 32 character long key used to encrypt the cookies.                                                            | -         | yes      |
| Users                 | `USERS`                 | `--users`                 | A comma separated list of `email:bcrypt-hash` combinations used for logging in (needs to be escaped in docker). | -         | yes      |
| Users File            | `USERS_FILE`            | `--users-file`            | A file with a list of of `email:bcrypt-hash` combinations in every line (`.htpasswd` equivalent)                | -         | no       |
| Cookie Secure         | `COOKIE_SECURE`         | `--cookie-secure`         | Send cookie only with a secure connection (https).                                                              | false     | no       |
| Github Client ID      | `GITHUB_CLIENT_ID`      | `--github-client-id`      | Client ID to use for Github OAuth.                                                                              | -         | no       |
| Github Client Secret  | `GITHUB_CLIENT_SECRET`  | `--github-client-secret`  | Client secret to use for Github OAuth.                                                                          | -         | no       |
| Google Client ID      | `GOOGLE_CLIENT_ID`      | `--google-client-id`      | Client ID to use for Google OAuth.                                                                              | -         | no       |
| Google Client Secret  | `GOOGLE_CLIENT_SECRET`  | `--google-client-secret`  | Client secret to use for Google OAuth.                                                                          | -         | no       |
| Generic Client ID     | `GENERIC_CLIENT_ID`     | `--generic-client-id`     | Client ID to use for Generic OAuth.                                                                             | -         | no       |
| Generic Client Secret | `GENERIC_CLIENT_SECRET` | `--generic-client-secret` | Client secret to use for Generic OAuth.                                                                         | -         | no       |
| Generic Scopes        | `GENERIC_SCOPES`        | `--generic-scopes`        | Comma separated list of scopes to use in Generic OAuth.                                                         | -         | no       |
| Generic Auth URL      | `GENERIC_AUTH_URL`      | `--generic-auth-url`      | Authentication URL to use for Generic OAuth.                                                                    | -         | no       |
| Generic Token URL     | `GENERIC_TOKEN_URL`     | `--generic-token-url`     | The URL to use when requesting the token for Generic OAuth.                                                     | -         | no       |
| Generic User URL      | `GENERIC_USER_URL`      | `--generic-user-url`      | The URL to use when retrieving user information in Generic OAuth.                                               | -         | no       |
| Disable Continue      | `DISABLE_CONTINUE`      | `--disable-continue`      | Disables the continue screen and immediately redirects when the user logins.                                    | `false`   | no       |
| Whitelist             | `WHITELIST`             | `--whitelist`             | Comma separated list of emails to whitelist for OAuth.                                                          |
| Cookie Expiry         | `COOKIE_EXPIRY`         | `--cookie-expiry`         | Set cookie max age in seconds.                                                                                  | 3600      | no       |
