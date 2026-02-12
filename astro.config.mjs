// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://tinyauth.app",
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: true,
  },
  integrations: [
    mermaid({
      theme: "forest",
      autoTheme: true,
    }),
    starlight({
      plugins: [starlightThemeRapide()],
      customCss: ["./src/styles/theme.css", "./src/styles/home.css"],
      title: "Tinyauth",
      logo: {
        src: "./public/tinyauth.png",
      },
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/steveiliop56/tinyath",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/eHzVaCzRRd",
        },
      ],
      sidebar: [
        {
          label: "Home",
          items: [
            {
              label: "About",
              slug: "docs/about",
            },
            {
              label: "Getting Started",
              slug: "docs/getting-started",
            },
          ],
        },
        {
          label: "Guides",
          autogenerate: { directory: "docs/guides" },
        },
        {
          label: "Reference",
          collapsed: true,
          autogenerate: { directory: "docs/reference" },
        },
        {
          label: "Community",
          collapsed: true,
          autogenerate: {
            directory: "docs/community",
          },
        },
        {
          label: "Breaking Updates",
          collapsed: true,
          autogenerate: {
            directory: "docs/breaking-updates",
          },
        },
        {
          label: "Contributing",
          collapsed: true,
          autogenerate: {
            directory: "docs/contributing",
          },
        },
      ],
    }),
  ],
});
