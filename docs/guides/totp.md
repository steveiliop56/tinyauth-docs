# Two factor authentication with tinyauth

Tinyauth has built-in support for TOTP, this means that you can use your favorite authenticator app to get 2FA codes when trying to login to tinyauth.

## Generating the secret

We firstly need to generate our TOTP secret, to do this we will need our current `username:hash`. Then we can use the tinyauth CLI to create our new user. This can be done like so:

```sh
docker run -i -t --rm ghcr.io/steveiliop56/tinyauth:v3 totp generate --interactive
```

It will prompt you for your user and then give you (a massive) QR code to scan with your authenticator app. After you add it you can copy your newly generated user (the part after the `user=` log message) and add it to your tinyauth user list and restart. Finally every time you try to login tinyauth will prompt your for your TOTP code.

## Verifying your user

If you are unsure if your user is correct you can use the following command to check:

```sh
docker run -i -t --rm ghcr.io/steveiliop56/tinyauth:v3 user verify --interactive
```

It will prompt you for your user (`username:hash:totp`), your username, your password (actual password) and a TOTP code from your authenticator app. If everything succeeds you should see the user verified message.
