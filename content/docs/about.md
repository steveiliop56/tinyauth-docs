---
title: About
description: A few words about Tinyauth.
---

Before installing Tinyauth you may be wondering _Why should I use Tinyauth instead of Authelia/Authentik/Keycloack?_ which is a really valid question and I would like to answer in depth.

## The issue with authentication in homelabs

Most of us like using an authentication middleware in front of our apps to either protect them when they don't offer a login screen or just to add an additional layer of security. While the projects mentioned above can certainly do the job and offer a variety of configuration options, they can often be hard to configure for new users, resource hungry (apps like Authentik and Keycloack are designed for businesses and not the average homelab) or simply too annoying to set up and maintain. This is where Tinyauth comes in.

## Why I created Tinyauth

Tinyauth was created to test my skills in making a quite complex app and most importantly to solve the issues mentioned above. I tried a wide variety of authentication projects but most of them didn't even support Traefik's forward auth out of the box and needed fancy plugins requiring more and more containers. When I created Tinyauth I only had one thing in mind, make it as simple as possible. No fancy dashboards, no complex configuration files, no external dependencies and the entire configuration could be done with simple environment variables everyone knows and loves.

## Use cases

Tinyauth by no means is made for production use cases. By this I mean that it is designed solely for adding a login screen to the apps of an average homelab that and perhaps for sharing resources with family and friends. If you need an app to handle multiple users and support more advanced backends my recommendation is Authentik.

## Future plans

Tinyauth has reached a really good state where it supports almost everything you would ever need from an app like this. It supports what I believe are the most important features like OAuth, TOTP, LDAP and even access controls while also integrating very well with the most popular proxies like Nginx, Traefik and Caddy. I am planning to keep the app in this state while slowly adding QOL updates. I am not planning to add any fancy dashboards or configuration files since I do not want to change the project's base idea.
