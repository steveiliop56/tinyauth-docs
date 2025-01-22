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
        text: "Contributing",
        items: [{ text: "Contributing", link: "/docs/contributing" }],
      },
      {
        text: "Screenshots",
        items: [{ text: "Screenshots", link: "/docs/screenshots" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/steveiliop56/tinyauth" },
    ],
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
});
