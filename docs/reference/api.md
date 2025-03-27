# API

Tinyauth has a very simple API used for both traefik and the web UI, all of the available endpoints are listed below.

## Authentication

The tinyauth API supports authentication using the `Authorization` header and basic auth, this can be useful when you want to permanently access a service protected with tinyauth using a headless client like `curl` or a custom script. For example, if you have an app hosted in `http://myapp.example.com` which is protected by tinyauth you can authenticate using curl:

```shell
curl -u user:password http://myapp.example.com # the user:password is the username and password you use in tinyauth
```

In order for this to work you need to follow [RFC 7617](https://datatracker.ietf.org/doc/html/rfc7617) which means that your `Authorization` header needs to look like this:

```
Authorization: Basic base64(username:password)
```

::: warning
Basic auth is permanent authorization meaning that if somebody obtains your header he can use it to login everywhere and it **won't** expire like the cookie will.
:::

When using basic auth, tinyauth assumes you are running in _API_ mode meaning that it will never return a redirect or plain html (e.g. the `/api/auth/traefik` endpoint will return 302 if you are not logged in), instead it will return API compatible responses like:

```json
{
  "status": 401,
  "message": "Unauthorized"
}
```

Tinyauth will also assume you are running in _API_ mode when your client does not accept `text/html`.

## Endpoints

### Healthcheck

Healthcheck for the tinyauth API server.

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

Authentication endpoint used by traefik forward auth.

Endpoint: `/api/auth/:proxy` (can be `traefik`/`nginx`/`caddy`)<br />
Method: `GET`

Example response:

```json
{
  "status": 200,
  "message": "Authenticated"
}
```

::: info
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

::: info
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

::: warning
The logout function doesn't invalidate the session it just tells the client to forget the cookie. This means that if somebody gets access to this token he can use it login.
:::

### Status

Endpoint used to retrieve user information based on the session cookie, it is used by the user context provider in the frontend.

Endpoint: `/api/status`<br />
Method: `GET`

Example response:

```json
{
  "status": 200,
  "message": "Authenticated",
  "email": "user@example.com",
  "isLoggedIn": true,
  "oauth": false,
  "provider": "",
  "configuredProviders": ["google", "github"],
  "disableContinue": false,
  "title": "My SSO",
  "genericName": "My Provider",
  "totpPending": false
}
```

### OAuth URL

Endpoint that generates an authentication URL for the specified provider.

Endpoint: `/api/oauth/url/:provider` (can be `github`/`google`/`tailscale`/`generic`)<br />
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

Endpoint: `/api/oauth/callback/:provider` (can be `github`/`google`/`tailscale`/`generic`)<br />
Method: `GET`<br />
Query Parameters: `code`

Example response:

```json
{
  "status": 200,
  "message": "Logged in"
}
```

::: info
The callback will redirect to the `redirect_uri` that was set while the frontend redirected you to the provider's login page, if the cookie is not set it will just show the 200 OK message.
:::
