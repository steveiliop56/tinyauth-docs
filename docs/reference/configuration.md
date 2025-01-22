# Configuration

Tinyauth has a very simple configuration and everything is configurable with either CLI arguments or environment variables. The available environment variables/CLI options are:

| Name          | Environment Variable | CLI Argument      | Description                                                                                                    | Default   | Required |
| ------------- | -------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- | --------- | -------- |
| Port          | `PORT`               | `--port`          | The port that the API/UI listens on.                                                                           | `3000`    | no       |
| Address       | `ADDRESS`            | `--address`       | The address the API/UI listens on.                                                                             | `0.0.0.0` | no       |
| App URL       | `APP_URL`            | `--app-url`       | The URL that tinyauth uses when redirecting for authentication.                                                | -         | yes      |
| Users         | `USERS`              | `--users`         | A comma seperated list of `user:bcrypt-hash` combinations used for logging in (needs to be escaped in docker). | -         | yes      |
| Users File    | `USERS_FILE`         | `--users-file`    | A file with a list of of `user:bcrypt-hash` combinations in every line (`.htpasswd` equivalent)                | -         | no       |
| Cookie Secure | `COOKIE_SECURE`      | `--cookie-secure` | Send cookie only with a secure connection (https).                                                             | false     | no       |
