// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";
import mermaid from "astro-mermaid";
import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://tinyauth.app",
  server: (command) => {
    if (command.command === "preview") {
      return {
        host: "0.0.0.0",
        port: 3000,
        allowedHosts: true,
      };
    }
    return {};
  },
  integrations: [
    mermaid({
      theme: "forest",
      autoTheme: true,
    }),
    starlight({
      plugins: [starlightThemeRapide()],
      customCss: [
        "./src/styles/theme.css",
        "./src/styles/home.css",
        "./src/styles/4-to-5.css",
        "./src/styles/tools.css",
      ],
      components: {
        Footer: "./src/components/Footer.astro",
      },
      title: "Tinyauth",
      credits: true,
      logo: {
        src: "./public/tinyauth.png",
      },
      favicon: "/favicon.svg",
      editLink: {
        baseUrl: "https://github.com/steveiliop56/tinyauth-docs/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/steveiliop56/tinyauth",
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
          items: [
            {
              label: "GitHub OAuth",
              slug: "docs/guides/github-oauth",
            },
            {
              label: "GitHub OAuth Apps",
              slug: "docs/guides/github-app-oauth",
            },
            {
              label: "Google OAuth",
              slug: "docs/guides/google-oauth",
            },
            {
              label: "Pocket ID OAuth",
              slug: "docs/guides/pocket-id",
            },
            {
              label: "LDAP",
              slug: "docs/guides/ldap",
            },
            {
              label: "Two-Factor Authentication",
              slug: "docs/guides/totp",
            },
            {
              label: "Access Controls",
              slug: "docs/guides/access-controls",
            },
            {
              label: "OpenID Connect",
              slug: "docs/guides/oidc",
            },
            {
              label: "Nginx Proxy Manager",
              slug: "docs/guides/nginx-proxy-manager",
            },
            {
              label: "Runtipi",
              slug: "docs/guides/runtipi",
            },
            {
              label: "Using the Binary",
              slug: "docs/guides/using-the-binary",
            },
            {
              label: "Advanced Configurations",
              slug: "docs/guides/advanced",
            },
          ],
        },
        {
          label: "Integrations",
          collapsed: true,
          items: [
            {
              label: "Zerobyte",
              slug: "docs/integrations/zerobyte",
            },
          ],
        },
        {
          label: "Reference",
          collapsed: true,
          items: [
            {
              label: "Configuration",
              slug: "docs/reference/configuration",
            },
            {
              label: "Labels",
              slug: "docs/reference/labels",
            },
            {
              label: "CLI",
              slug: "docs/reference/cli",
            },
            {
              label: "Headers",
              slug: "docs/reference/headers",
            },
            {
              label: "Telemetry",
              slug: "docs/reference/telemetry",
            },
            {
              label: "Flow",
              slug: "docs/reference/flow",
            },
            {
              label: "Changelog",
              slug: "docs/reference/changelog",
            },
          ],
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
    umami({
      hostUrl: "https://analytics.doesmycode.work",
      endpointUrl: "https://analytics.doesmycode.work",
      id: "ed560a2b-b321-4745-b2f8-d7de846aeb7f",
    }),
  ],
});
