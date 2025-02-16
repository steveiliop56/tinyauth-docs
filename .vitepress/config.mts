import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Tinyauth",
  description: "Login screen for your apps",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/getting-started" },
      { text: "Screenshots", link: "/docs/screenshots" },
    ],

    sidebar: [
      {
        text: "Get Started",
        items: [{ text: "Getting started", link: "/docs/getting-started" }],
      },
      {
        text: "Reference",
        items: [
          { text: "Configuration", link: "/docs/reference/configuration" },
          { text: "API", link: "/docs/reference/api" },
          { text: "Flow", link: "/docs/reference/flow" },
          { text: "CLI", link: "/docs/reference/cli" },
        ],
      },
      {
        text: "Guides",
        items: [
          { text: "Github OAuth", link: "/docs/guides/github-oauth" },
          { text: "Google OAuth", link: "/docs/guides/google-oauth" },
          { text: "Tailscale OAuth", link: "/docs/guides/tailscale-oauth" },
          { text: "Github App OAuth", link: "/docs/guides/github-app-oauth" },
          { text: "Access controls", link: "/docs/guides/access-controls" },
          { text: "Tinyauth with Nginx Proxy Manager", link: "/docs/guides/nginx-proxy-manager" },
        ]
      },
      {
        text: "Contributing",
        items: [{ text: "Contributing", link: "/docs/contributing" }],
      },
      {
        text: "Advanced configs",
        items: [{ text: "Advanced configs", link: "/docs/advanced" }],
      },
      {
        text: "Community",
        items: [{ text: "Caddy", link: "/docs/community/caddy" }],
      },
      {
        text: "Changelog",
        items: [{ text: "Changelog", link: "/docs/changelog" }],
      },
      {
        text: "Screenshots",
        items: [{ text: "Screenshots", link: "/docs/screenshots" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/steveiliop56/tinyauth" },
      { icon: "discord", link: "https://discord.gg/eHzVaCzRRd" },
    ],
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
});
