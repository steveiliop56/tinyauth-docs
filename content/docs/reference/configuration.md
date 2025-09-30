---
title: Configuration
description: Reference on Tinyauth's configuration.
---

# Configuration

Tinyauth can be either configured with environment variables or CLI flags. The full list of configuration options is available below.

:::info
Every configuration option that has a `FILE_` equivalent (e.g. `USERS` and `USERS_FILE`), allows for the `FILE_` environment variable/CLI flag to be used instead of the original one.
:::

:::info
In some configuration options like the `GENERIC_SCOPES` environment variable, you may need to use spaces (e.g. `GENERIC_SCOPES=openid profile email`). In this case you **_shouldn't_** use quotes as docker can handle the spaces.
:::

## General

| Name                                                  | Description                                                                                                            | Default                                                                        | Required |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------- |
| `PORT`/`--port`                                       | The port the UI and API listens on.                                                                                    | 3000                                                                           | no       |
| `ADDRESS`/`--address`                                 | The address the UI and API listens on.                                                                                 | `0.0.0.0`                                                                      | no       |
| `APP_URL`/`--app-url`                                 | The URL Tinyauth uses for the redirects and the cookie domain.                                                         | -                                                                              | yes      |
| `SECRET`/`--secret`                                   | The secret Tinyauth uses to encrypt the cookies.                                                                       | -                                                                              | yes      |
| `USERS`/`--users`                                     | A comma separated list of Tinyauth users.                                                                              | -                                                                              | yes      |
| `USERS_FILE`/`--users-file`                           | A file containing a list of Tinyauth users.                                                                            | -                                                                              | no       |
| `SECRET_FILE`/`--secret-file`                         | A file containing the cookie secret.                                                                                   | -                                                                              | no       |
| `COOKIE_SECURE`/`--cookie-secure`                     | Send cookie only with HTTPS.                                                                                           | `false`                                                                        | no       |
| `DISABLE_CONTINUE`/`--disable-continue`               | Disable the continue screen.                                                                                           | `false`                                                                        | no       |
| `OAUTH_WHITELIST`/`--oauth-whitelist`                 | A list of usernames that are allowed to login with OAuth (can be a regex if it has the slash prefix and suffix).       | -                                                                              | no       |
| `SESSION_EXPIRY`/`--session-expiry`                   | Set cookie and session expiry in seconds.                                                                              | 86400                                                                          | no       |
| `LOG_LEVEL`/`--log-level`                             | Set the log level for the app from 0 to 5 (debug to fatal).                                                            | 1                                                                              | no       |
| `APP_TITLE`/`--app-title`                             | Set the login screen title.                                                                                            | `Tinyauth`                                                                     | no       |
| `LOGIN_MAX_RETRIES`/`--login-max-retries`             | The max retries to login after which the account gets locked.                                                          | 5                                                                              | no       |
| `LOGIN_TIMEOUT`/`--login-timeout`                     | The timeout in seconds for the locked accounts.                                                                        | 300                                                                            | no       |
| `FORGOT_PASSWORD_MESSAGE`/`--forgot-password-message` | Set a custom message for the forgot password screen.                                                                   | ``You can reset your password by changing the `USERS` environment variable."`` | no       |
| `OAUTH_AUTO_REDIRECT`/`--oauth-auto-redirect`         | Automatically redirect to your OAuth provider on login (available options are `none`,`github`,`google` and `generic`). | `none`                                                                         | no       |
| `BACKGROUND_IMAGE`/`--background-image`               | Use a custom URL for a background image.                                                                               | - _(internal value)_                                                           | no       |

## Github OAuth

| Name                                                      | Description                                 | Default | Required |
| --------------------------------------------------------- | ------------------------------------------- | ------- | -------- |
| `GITHUB_CLIENT_ID`/`--github-client-id`                   | The Github client ID.                       | -       | no       |
| `GITHUB_CLIENT_SECRET`/`--github-client-secret`           | The Github client secret.                   | -       | no       |
| `GITHUB_CLIENT_SECRET_FILE`/`--github-client-secret-file` | A file containing the Github client secret. | -       | no       |

## Google OAuth

| Name                                                      | Description                                 | Default | Required |
| --------------------------------------------------------- | ------------------------------------------- | ------- | -------- |
| `GOOGLE_CLIENT_ID`/`--google-client-id`                   | The Google client ID.                       | -       | no       |
| `GOOGLE_CLIENT_SECRET`/`--google-client-secret`           | The Google client secret.                   | -       | no       |
| `GOOGLE_CLIENT_SECRET_FILE`/`--google-client-secret-file` | A file containing the Google client secret. | -       | no       |

## Generic OAuth

| Name                                                        | Description                                           | Default   | Required |
| ----------------------------------------------------------- | ----------------------------------------------------- | --------- | -------- |
| `GENERIC_CLIENT_ID`/`--generic-client-id`                   | The generic provider client ID.                       | -         | no       |
| `GENERIC_CLIENT_SECRET`/`--generic-client-secret`           | The generic provider client secret.                   | -         | no       |
| `GENERIC_CLIENT_SECRET_FILE`/`--generic-client-secret-file` | A file containing the generic provider client secret. | -         | no       |
| `GENERIC_AUTH_URL`/`--generic-auth-url`                     | The authentication URL for the generic provider.      | -         | no       |
| `GENERIC_TOKEN_URL`/`--generic-token-url`                   | The token URL for the generic provider.               | -         | no       |
| `GENERIC_USER_URL`/`--generic-user-url`                     | The user information URL for the generic provider.    | -         | no       |
| `GENERIC_SCOPES`/`--generic-scopes`                         | The generic provider scopes.                          | -         | no       |
| `GENERIC_NAME`/`--generic-name`                             | The name for the generic client button on the UI.     | `Generic` | no       |
| `GENERIC_SKIP_SSL`/`--generic-skip-ssl`                     | Ignore self-signed certificates.                      | `false`   | no       |

## LDAP Config

| Name                                        | Description                                        | Default    | Required |
| ------------------------------------------- | -------------------------------------------------- | ---------- | -------- |
| `LDAP_ADDRESS`/`--ldap-address`             | LDAP server address (e.g. ldap://localhost:389).   | -          | no       |
| `LDAP_BIND_DN`/`--ldap-bind-dn`             | LDAP bind DN (e.g. uid=user,dc=example,dc=com).    | -          | no       |
| `LDAP_BIND_PASSWORD`/`--ldap-bind-password` | LDAP bind password.                                | -          | no       |
| `LDAP_BASE_DN`/`--ldap-base-dn`             | LDAP base DN (e.g. dc=example,dc=com).             | -          | no       |
| `LDAP_INSECURE`/`--ldap-insecure`           | Skip certificate verification for the LDAP server. | `false`    | no       |
| `LDAP_SEARCH_FILTER`/`--ldap-search-filter` | LDAP search filter for user lookup.                | `(uid=%s)` | no       |

:::tip
For Windows LDAP you will have to use the following search filter: `(&(sAMAccountName=%s))`.
:::
