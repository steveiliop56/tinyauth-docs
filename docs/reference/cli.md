---
sidebar_position: 2
---

# CLI

Tinyauth offers a very simple CLI that aims to help you to configure the app and manage users.

## Commands

All commands can be run from the standalone Tinyauth binary:

```sh
./tinyauth [options]
```

As well as when the app is running through docker:

```sh
docker run -i -t --rm ghcr.io/steveiliop56/tinyauth:v3 [options]
```

:::info
If you are using docker compose you can also use `docker compose run tinyauth [options]`.
:::

### Main command

The main command is the one run when you run the app without any flags/arguments. It starts the API and web UI and waits for incoming connections. All the options are configurable with both CLI flags and environment variables. A list of available configuration options is located in the [configuration](./configuration.md) page.

### Create user command

You can use the create command to easily create a user without needing any other tools. To create a user simply run:

```sh
./tinyauth user create --interactive
```

This command will launch an interactive TUI where you can provide a username and a password and it will generate the `username:hash` format required by tinyauth. It can also auto format it for docker if you would like to use it within a docker compose file. Apart from the interactive mode you can also create a user with flags:

```sh
./tinyauth user create --username user@example.com --password password
```

The full list of available flags:

| Flag            | Description                                          | Default | Required                  |
| --------------- | ---------------------------------------------------- | ------- | ------------------------- |
| `--username`    | The username to use.                                 | -       | no (if using interactive) |
| `--password`    | The password to use.                                 | -       | no (if using interactive) |
| `--docker`      | Format the output for use with docker compose files. | false   | no                        |
| `--interactive` | Use an interactive TUI for creating the user.        | false   | no                        |

### Verify user command

In addition to the create command, Tinyauth offers a verify command to make sure your username and password match with the `username:hash`. To use it just run:

```sh
./tinyauth user verify --interactive
```

A TUI will be launched prompting you for your `username:hash` combination, your username and password and then it will check if the credentials match. You can also use the non-interactive mode like so:

```sh
./tinyauth user verify --user 'user@example.com:$2a$10$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u' --username user@example.com --password password --totp 123456
```

:::note
Make sure to use quotes (`'`) when typing this in a bash shell so your hash gets passed correctly to Tinyauth.
:::

The full list of available options for the verify command are the following:

| Flag            | Description                                   | Default | Required                  |
| --------------- | --------------------------------------------- | ------- | ------------------------- |
| `--user`        | The `username:hash` combination to verify.    | -       | no (if using interactive) |
| `--username`    | The username to use.                          | -       | no (if using interactive) |
| `--password`    | The password to use.                          | -       | no (if using interactive) |
| `--interactive` | Use an interactive TUI for creating the user. | false   | no                        |
| `--totp`        | Optional TOTP code if you are using TOTP      | -       | no                        |

### Generate TOTP command

Tinyauth can auto generate TOTP codes for you, the combination is `username:hash:secret`. You can generate a TOTP user with:

```sh
./tinyauth totp generate -i
```

It will prompt you for your current user (`username:hash`) and then give you your new user (`username:hash:secret`) alongside with a QR code so as you can add it to your authenticator app. You can also use the non-interactive mode like this:

```sh
./tinyauth totp generate --user 'user@example.com:$2a$10$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u'
```

:::note
Make sure to use quotes (`'`) when typing this in a bash shell so your hash gets passed correctly to Tinyauth.
:::

The full list of available options for the generate command are the following:

| Flag            | Description                                   | Default | Required                  |
| --------------- | --------------------------------------------- | ------- | ------------------------- |
| `--user`        | The `username:hash` combination to verify.    | -       | no (if using interactive) |
| `--interactive` | Use an interactive TUI for creating the user. | false   | no                        |
