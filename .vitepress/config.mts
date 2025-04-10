import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
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
          items: [
            { text: "About Tinyauth", link: "/docs/about" },
            { text: "Getting started", link: "/docs/getting-started" },
          ],
        },
        {
          text: "Reference",
          items: [
            { text: "Configuration", link: "/docs/reference/configuration" },
            { text: "API", link: "/docs/reference/api" },
            { text: "Flow", link: "/docs/reference/flow" },
            { text: "CLI", link: "/docs/reference/cli" },
            { text: "Headers", link: "/docs/reference/headers" },
          ],
        },
        {
          text: "Guides",
          items: [
            { text: "Github OAuth", link: "/docs/guides/github-oauth" },
            { text: "Google OAuth", link: "/docs/guides/google-oauth" },
            { text: "Github App OAuth", link: "/docs/guides/github-app-oauth" },
            { text: "Access controls", link: "/docs/guides/access-controls" },
            {
              text: "Two factor authentication",
              link: "/docs/guides/totp",
            },
            { text: "Tinyauth with Runtipi", link: "/docs/guides/runtipi" },
            {
              text: "Tinyauth with Nginx Proxy Manager",
              link: "/docs/guides/nginx-proxy-manager",
            },
          ],
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
          items: [
            { text: "Caddy", link: "/docs/community/caddy" },
            { text: "Kubernetes", link: "/docs/community/kubernetes" },
          ],
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
      [
        "script",
        {},
        `
      const umamiAttributes = {
          src: "https://analytics.doesmycode.work/script.js",
          "data-website-id": "ed560a2b-b321-4745-b2f8-d7de846aeb7f",
      };

      const umamiScript = document.createElement("script");

      Object.entries(umamiAttributes).forEach(([key, value]) =>
        umamiScript.setAttribute(key, value),
      );

      document.head.appendChild(umamiScript);
    `,
      ],
    ],
    sitemap: {
      hostname: "https://tinyauth.app",
    },
  }),
);
