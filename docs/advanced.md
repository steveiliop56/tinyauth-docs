# Advanced configs

## Host network and traefik

When using `network_mode: host` in docker alongside with traefik, the `redirect_uri` in tinyauth will always be the app URL instead of of the actual redirect URI. This is because traefik does not respect the `X-Forwarded-Host` header from NAT IP addresses such as the docker internal one. This can be easily fixed by either using the following traefik config:

```yaml
entryPoints:
  web:
    address: ":80"
    forwardedHeaders:
      trustedIPs:
        - "127.0.0.1/32"
        - "172.16.0.0/12"
```

Or by using the following CLI arguments:

```shellscript
--entryPoints.web.address=:80
--entryPoints.web.forwardedHeaders.trustedIPs=127.0.0.1/32,172.16.0.0/12
```

_See issue [#35](https://github.com/steveiliop56/tinyauth/issues/35) by [Aleksey](https://github.com/liveder)_
