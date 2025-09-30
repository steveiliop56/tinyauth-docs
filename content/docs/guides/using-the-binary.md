---
title: Binary
description: Use the Tinyauth binary instead of the docker image for more advanced setups.
---

# Using the binary

If you prefer using bare-metal over docker you can do so by using the Tinyauth binary. This setup is ideal for LXC containers or machines that don't need to run docker but you would still like to use Tinyauth to protect your services.

## Downloading the binary

To begin with, simply download the binary from the [latest](https://github.com/steveiliop56/tinyauth/releases/latest) Github release. There are builds available for both arm64 and amd64 linux machines. I suggest renaming the binary to `tinyauth` as that's what we will use for the rest of this guide. I also suggest ensuring that the binary is executable:

```shellscript
chmod +x tinyauth
```

## Configuring

To configure Tinyauth you can either use CLI flags or environment variables (recommended). To use environment variables you will need to download the example environment file from Github:

```shellscript
curl -o tinyauth.env https://raw.githubusercontent.com/steveiliop56/tinyauth/refs/heads/main/.env.example
```

Then you can simply edit the `tinyauth.env` file and either replace the template values with actual values or simply remove the environment variables you do not need.

Alternatively you can use CLI flags to configure Tinyauth. This is not recommended as it can get quite complex and your shell may parse the values incorrectly. Make sure to always use quotes (`'`) to ensure that the values are given to Tinyauth correctly.

A full list of environment variables and CLI flags is available in the [Configuration](/docs/reference/configuration.md) page.

## Running

After you are done with configuration you can start Tinyauth. If you are using an environment variables you need to set them in your shell, this can be done by running:

```shellscript
export $(grep -v '^#' .env | xargs -d '\n')
```

:::tip
If you like, you can unset the environment variables (perhaps for security reasons) with `unset $(grep -v '^#' .env | sed -E 's/(.*)=.*/\1/' | xargs)`.
:::

Finally you can start up the Tinyauth server with:

```shellscript
./tinyauth
```

If you chose to use CLI flags you need to pass them to Tinyauth with:

```shellscript
./tinyauth --secret=example --app-url=https://tinyauth.example.com
```

## Running as a systemd service

if you need Tinyauth to autostart on boot you can do so by creating a systemd service (assuming you are using systemd as your init system). Firstly you will need to create the `/etc/systemd/system/tinyauth.service` file with the following content:

```
[Unit]
Description=Tinyauth service
After=network.target

[Service]
EnvironmentFile=/some/path/tinyauth.env
ExecStart=/some/path/tinyauth
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

:::info
Make sure to replace the paths in the service with the actual locations of your environment and binary file.
:::

:::tip
If you are using CLI flags, you can remove the `EnvironmentFile` line and add your flags to to the `ExecStart` line, e.g. `ExecStart=/some/path/tinyauth --secret=secret --app-url=https://tinyauth.example.com`.
:::

Finally we need to reload the systemd daemon:

```shellscript
sudo systemctl daemon-reload
```

And start our new service:

```shellscript
sudo systemctl enable --now tinyauth
```

You can view the logs of Tinyauth by running:

```shellscript
sudo journalctl -efu tinyauth
```

That's it! Tinyauth should automatically start on boot now!
