# API

Tinyauth has a very simple API used for both traefik and the web UI, all of the available endpoints are listed below.

## Endpoints

### Healthcheck

Healthcheck for the tinyauth API server.

Endpoint: `/api/healthcheck`
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

Endpoint: `/api/auth`
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

Endpoint: `/api/login`
Method: `POST`

Example request:

```json
{
  "username": "user",
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

Endpoint: `/api/logout`
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

Endpoint: `/api/status`
Method: `GET`

Example response:

```json
{
  "status": 200,
  "message": "Authenticated",
  "username": "user",
  "isLoggedIn": true
}
```
