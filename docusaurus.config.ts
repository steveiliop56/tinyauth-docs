import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Tinyauth",
  tagline: "Simple login screen for your apps.",
  favicon: "img/favicon.ico",
  themes: ["@docusaurus/theme-mermaid"],

  future: {
    v4: true,
  },

  url: "https://tinyauth.app",
  baseUrl: "/",

  organizationName: "steveiliop56",
  projectName: "tinyauth-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/steveiliop56/tinyauth-docs/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      ({
        websiteID: "ed560a2b-b321-4745-b2f8-d7de846aeb7f",
        analyticsDomain: "analytics.doesmycode.work",
      })
    ]
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Tinyauth",
      logo: {
        alt: "Tinyauth Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "https://github.com/steveiliop56/tinyauth",
          label: "GitHub",
          position: "right",
        },
        {
          to: "https://discord.gg/eHzVaCzRRd",
          label: "Discord",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Tinyauth`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
