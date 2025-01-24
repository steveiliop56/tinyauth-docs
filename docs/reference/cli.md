# CLI

Tinyauth offers a very simple CLI that aims to help you both configure the app and generate/verify the users.

## Commands

All commands can be both run when the app is run as an executable:

```sh
./tinyauth [options]
```

As well as when the app is running through docker:

```sh
docker run -it ghcr.io/steveiliop56/tinyauth:latest [options]
```

### Main command

The main command is the one run when you run the app without any flags/arguments. It stars the API and web UI and waits for iconming connections. All the options are configurable with both CLI flags and environment variables. To find a list of available configuration options please go to the [configuration](./configuration.md) section.

### Create user command

Tinyauth offers simple utlities for creating and verifying users in required format without having to use utilities like `htpasswd`. To use it simple run:

```sh
./tinyauth user create --interactive
```

This will launch an interactive TUI where you can provide an email and a password and it will generate the `email:hash` format required by the app. It can also auto format it for docker, if you would like to use it within a docker compose file. Apart from the interactive mode you can also create a user with flags like so:

```sh
./tinyauth user create --email user@example.com --password password
```

The full list of available flags:

| Flag            | Description                                          | Default | Required |
| --------------- | ---------------------------------------------------- | ------- | -------- |
| `--email`       | The email to use.                                    | -       | yes      |
| `--password`    | The password to use.                                 | -       | yes      |
| `--docker`      | Format the output for use with docker compose files. | false   | no       |
| `--interactive` | Use an interactive TUI for creating the user.        | false   | no       |

### Verify user command

In addition to the create command, tinyauth offers a verify command to make sure your email/password match with the email/hash. To use it just type:

```sh
./tinyauth user verify --interactive
```

Again, tinyauth will launch a TUI that will prompt you for your `email:hash` combination, your email and password and it will also ask if the string is formatted for docker and then it will check if the credentials match. You can also use the non-interactive mode like so:

```sh
./tinyauth user verify --user 'user@example.com:$2a$10$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u' --email user@example.com --password password
```

::: note
Make sure to use quotes (`'`) when typing this in a bash shell, so your hash gets passed correctly yo tinyauth.
:::

The full list of available options for the verify command are the following:

| Flag            | Description                                                                                                                               | Default | Required |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| `--user`        | The `email:hash` combination to verify.                                                                                                   | -       | yes      |
| `--email`       | The email to use.                                                                                                                         | -       | yes      |
| `--password`    | The password to use.                                                                                                                      | -       | yes      |
| `--docker`      | Use this if you escaped the hash or used the `--docker` flag in the create command to make sure the hash gets passed correctly to bcrypt. | false   | no       |
| `--interactive` | Use an interactive TUI for creating the user.                                                                                             | false   | no       |
