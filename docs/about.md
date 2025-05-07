# About tinyauth

Before installing tinyauth you may be wondering _Why should I use tinyauth instead of Authelia/Authentik/Keycloack?_ which is a really valid question and I would like to answer in depth.

## The issue with authentication in homelabs

Most of us like using an authentication middleware in front of our apps to either protect them when they don't offer a login screen or just to add an additional layer of authentication. While the projects mentioned above can certainly do the job and offer a variety of configuration options, they can be hard to configure for new users, resource hungry (apps like Authentik and Keycloack are designed for businesses and not the average homelabber) or simply too annoying to set up and maintain. This is where tinyauth comes in.

## Why I created tinyauth

Tinyauth was created to test my skills in making a quite complex app and most importantly to solve the issues mentioned above. I tried a wide variety of authentication projects but most of them didn't even support traefik's forward auth out of the box and they needed weird plugins requiring more and more containers. When I created tinyauth I only had one thing in mind, make it as simple as possible, no fancy dashboards, no complex configuration files, no databases and the entire configuration could be done with simple environment variables everyone knows and loves.

## The use case for tinyauth

Tinyauth by no means is made for production use cases, by this I mean that it is designed solely for adding a login screen to the apps of an average homelaber that just wants to secure his infrastructure a bit more. While I consider tinyauth secure enough to even be exposed in the internet, it has some limitations like being completely stateless (meaning that the server cannot expire a session) and not being able to get configured dynamically (e.g. updating the users requires a restart). If you need an app to handle multiple users and support more advanced backends (like LDAP) my recommendation is Authentik.

## The future plans for tinyauth

Tinyauth has reached a really good state where it supports almost everything you would ever need from an app like this. It supports what I believe are the most important features like OAuth, TOTP and even access controls and it also integrates very well with the most popular proxies like nginx, traefik and caddy. I am planning to keep the app in this state while slowly adding QOL updates. I am not planning to add any fancy dashboards or configuration files since I do not want to change the project's base idea.
