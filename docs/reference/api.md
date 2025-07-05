---
sidebar_position: 4
---

# API

Tinyauth has a very simple API used for both the reverse proxies and the web UI. All of the available endpoints are listed below.

## Authentication

The Tinyauth API supports authentication using the `Authorization` header and basic auth. This can be useful when you want to permanently access a service protected with Tinyauth using a headless client like `curl` or a custom script. For example, if you have an app hosted in `http://myapp.example.com` which is protected by Tinyauth you can authenticate using curl:

```shell
curl -u user:password http://myapp.example.com # the user:password is the username and password you use in Tinyauth
```

In order for this to work you need to follow [RFC 7617](https://datatracker.ietf.org/doc/html/rfc7617) which means that your `Authorization` header needs to look like this:

```
Authorization: Basic base64(username:password)
```

:::warning
Basic auth is permanent authorization meaning that if somebody obtains your header he can use it to login everywhere and it **won't** expire like the cookie will.
:::

:::note
Basic auth is disabled for accounts with TOTP configured for security reasons.
:::

When using basic auth or a client that does not include `text/html` in the `Accept` header, Tinyauth assumes you are running in _API_ mode meaning that it will never return a redirect or plain html (e.g. the `/api/auth/traefik` endpoint will return 302 if you are not logged in), instead it will return API compatible responses like:

```json
{
  "status": 401,
  "message": "Unauthorized"
}
```

## Endpoints

### Healthcheck

Healthcheck for the Tinyauth API server.

Endpoint: `/api/healthcheck`<br />
Method: `GET`

Example response:

```json
{
  "status": 200,
  "message": "OK"
}
```

### Auth

Authentication endpoint used by proxies.

Endpoint: `/api/auth/:proxy` (can be `traefik`/`nginx`/`caddy`)<br />
Method: `GET`

Example response:

```json
{
  "status": 200,
  "message": "Authenticated"
}
```

:::info
The API will redirect to the login page if the user is not authenticated (when not running in API mode).
:::

### Login

Endpoint used for authenticating the users through the login page and setting the session cookie.

Endpoint: `/api/login`<br />
Method: `POST`

Example request:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

Example response:

```json
{
  "status": 200,
  "message": "Logged in",
  "totpPending": "false"
}
```

:::info
Alongside with the JSON response the API will also return the required cookies that need to be set by the browser for the user to be authenticated on the next request.
:::

### TOTP Verify

Endpoint used for verifying TOTP authentication codes and allowing users to login.

Endpoint: `/api/totp`<br />
Method: `POST`

Example request:

```json
{
  "code": "123456"
}
```

Example response:

```json
{
  "status": 200,
  "message": "Logged in"
}
```

:::info
Alongside with the JSON response the API will also return the required cookies that need to be set by the browser for the user to be authenticated on the next request.
:::

### Logout

Endpoint used to delete the session cookie and in turn log out the user.

Endpoint: `/api/logout`<br />
Method: `POST`

Example response:

```json
{
  "status": 200,
  "message": "Logged out"
}
```

:::warning
The logout function doesn't invalidate the session, it just tells the client to "forget" the cookie. This means that if somebody gets access to this token he can use it login. Nevertheless the cookie still includes a built-in expiration to increase security.
:::

### App context

Endpoint used to retrieve app information that are global for all users. It is used by the app context provider in the frontend.

Endpoint: `/api/app`<br />
Method: `GET`

Example response:

```json
{
  "message": "OK",
  "status": 200,
  "disableContinue": false,
  "title": "Tinyauth",
  "genericName": "Generic",
  "domain": "example.com",
  "forgotPasswordMessage": "You can reset your password by changing the `USERS` environment variable.",
  "oauthAutoRedirect": "none"
}
```

### User context

Endpoint used to retrieve user information. It is used by the user context provider in the frontend.

Endpoint: `/api/user`<br />
Method: `GET`

Example response:

```json
{
  "message": "OK",
  "status": 200,
  "isLoggedIn": true,
  "username": "user",
  "name": "User",
  "email": "user@example.com",
  "provider": "username",
  "oauth": false,
  "totpPending": "false"
}
```

### OAuth URL

Endpoint that generates an authentication URL for the specified provider.

Endpoint: `/api/oauth/url/:provider` (can be `github`/`google`/`generic`)<br />
Method: `GET`<br />
Query Parameters: `redirect_uri`

Example response:

```json
{
  "status": 200,
  "message": "OK",
  "url": "some-url"
}
```

### OAuth Callback

Endpoint used to retrieve, validate and login a user with OAuth.

Endpoint: `/api/oauth/callback/:provider` (can be `github`/`google`/`generic`)<br />
Method: `GET`<br />
Query Parameters: `code`

Example response:

```json
{
  "status": 200,
  "message": "Logged in"
}
```

:::info
The callback will try to get a redirect URI from the `tinyauth-redirect-xxxxxx` cookie. If the cookie does not exist the API will redirect to the login screen (when not running in API mode).
:::
