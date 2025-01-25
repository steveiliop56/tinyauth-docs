# API

Tinyauth has a very simple API used for both traefik and the web UI, all of the available endpoints are listed below.

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

Endpoint: `/api/auth`<br />
Method: `GET`

Example response:

```json
{
  "status": 200,
  "message": "Authenticated"
}
```

::: info
The API will redirect to the login page if the user is not authenticated.
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
  "message": "Logged in"
}
```

::: info
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
  "disableContinue": false
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

::: info
The callback will redirect to the `redirect_uri` that was set while the frontend redirected you to the provider's login page, if the cookie is not set it will just show the 200 OK message.
:::
