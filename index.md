---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Tinyauth
  text: Login screen for your apps
  tagline: The simplest way to protect your apps with a login screen
  image:
    src: /logo.png
    alt: Tinyauth
  actions:
    - theme: brand
      text: Get Started
      link: /docs/getting-started
    - theme: alt
      text: Configuration
      link: /docs/reference/configuration

features:
  - title: Simple
    details: Tinyauth can be configured directly with environment variables eliminating the need for configuration files or fancy dashboards.
  - title: Fast
    details: Tinyauth uses the Gin web framework is ensures that you get the maximum performance out of the API.
  - title: Lightweight
    details: Tinyauth bundles the Vite framework for the Web UI making in extremely lightweight, at just 20mb for the docker image.
---
