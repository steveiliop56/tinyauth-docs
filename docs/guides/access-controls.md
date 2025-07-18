# Access controls

Tinyauth supports basic access controls with docker labels. You can use them to restrict or allow access to applications. Let's see how you can set them up.

## Modifying the Tinyauth container

We firstly need to make one small change to the Tinyauth container. You will need to add the following volume:

```yaml
services:
  # ...
  tinyauth:
    # ...
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

Make sure to restart Tinyauth after setting the volume.

:::tip
For increased security, use a Docker socket proxy like [Tecnativa's](https://github.com/Tecnativa/docker-socket-proxy). You can then configure Tinyauth to use the proxy instead of binding to the socket. This can be done by adding the following environment variable to the Tinyauth container:

```yaml
services:
  # ...
  tinyauth:
    # ...
    environment:
      DOCKER_HOST: tcp://docker-socket-proxy:2375
```

Make sure that Tinyauth can reach the docker socket proxy container.
:::

## Label discovery

Tinyauth by default retrieves all the container names from docker and searches for a container name that matches the one of the subdomain in the request. For example, if the request host is `myapp.example.com`, Tinyauth will check for labels in the container named `myapp`. This can sometimes be inconvenient, that's why the `domain` label exists. You can use it in your protected app like this:

```yaml
tinyauth.domain: myapp.example.com
```

After you restart the app, Tinyauth will be able to locate labels regardless of the container name.

## Users whitelist

Let's say we have two users, `user1` and `user2` and we need to restrict access to our app to only `user1`. This can be done by adding the `users` label to it:

```yaml
tinyauth.users: user1
```

After you restart the app, only `user1` will be able to access the app while `user2` will be redirected to unauthorized screen.

:::tip
The `tinyauth.users` label can be either a comma separated list of users or a regex string if it has the slash (`/`) prefix and suffix.
:::

:::info
The whitelist also applies for LDAP users.
:::

## OAuth whitelist

The above example also applies to OAuth users so, let's use `user1@example.com` and `user2@example.com` and we need to restrict access to our app to only `user1@example.com`. This can be done by using the `oauth.whitelist` label:

```yaml
tinyauth.oauth.whitelist: user1@example.com
```

After you restart the app, only `user1@example.com` will be able to access the app while `user2@example.com` will be redirected to unauthorized screen.

:::tip
The `tinyauth.users` label can be either a comma separated list of users or a regex string if it has the slash (`/`) prefix and suffix.
:::

## Allowed paths

Tinyauth also supports skipping authentication for specific paths. This can be useful if you need an API path to be accessed without needing to login to Tinyauth. You can allow a path using the `allowed` label:

```yaml
tinyauth.allowed: ^\/api
```

After you restart the app, Tinyauth will allow access to the `/api` endpoint regardless if the user is logged in or not.

:::info
The `tinyauth.allowed` label uses a regex string to match the URL path.

For example, `^\/api` matches any path starting with `/api`, and `^\/ping$` matches the exact path `/ping`.

Be careful with regexes such as `\/api`, because that matches any path with `/api` anywhere in the path, including `/example/api/abc`
:::

## Allowing and restricting access based on IP address or CIDRs

Sometimes it's needed to limit resources to specific IP addresses or completely block parts of a network from accessing a resource. You can allow access to a specific IP address by adding the `ip.allow` label to an app:

```yaml
tinyauth.ip.allow: 10.10.5.5
```

Or a CIDR:

```yaml
tinyauth.ip.allow: 10.10.10.0/24
```

Or both:

```yaml
tinyauth.ip.allow: 10.10.5.5,10.10.10.0/24
```

After you restart the app, only the user with the IP address of `10.10.5.5` or a user in the `10.10.10.0/24` CIDR will be able to access the app while other users will be redirected to an unauthorized screen. You can do the same process with `tinyauth.ip.block` to completely block IP addresses or subnets from accessing an app.

## Bypassing Tinyauth authentication for IP addresses or CIDRs

With Tinyauth you can also completely disable authentication for specific IP addresses or subnets. This can be done by using the `ip.bypass` label:

```yaml
tinyauth.ip.bypass: 10.10.5.5,10.10.10.0/24
```

After you restart the app, Tinyauth will allow the user with the IP address of `10.10.5.5` or all users of which the IP address is included in the `10.10.10.0/24` subnet to access the app without requesting login.

## Access controls using OIDC groups

Some OIDC servers like Pocket ID support user groups in the OIDC response. If your OIDC server supports this, you can use groups to manage access controls. To begin with you will need to make sure that the `GENERIC_SCOPES`/`--generic-scopes` config option includes the `groups` scope. Then you just add the `oauth.groups` label to your app:

```yaml
tinyauth.oauth.groups: admin
```

Now when you use the generic OAuth provider, only users that are in the `admin` group will be allowed to access the resource.

:::info
The OAuth groups label is only supported for the generic OAuth provider **_not_** for Google or Github.
:::

That's it! You just configured access controls in Tinyauth!
