import { text } from "mermaid/dist/rendering-util/rendering-elements/shapes/text.js";
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lastUpdated: true,
  ignoreDeadLinks: true,
  title: "Documents",
  description: "Documents for My project",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/loog.ico",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "My docs",
    nav: [
      { text: "Index", link: "/" },
      { text: "Start", link: "/start" },
    ],
    logo: "/Amrita.png",

    sidebar: [],
    footer: {
      message: `MIT License Published`,
      copyright: `© My team 2025-${new Date().getFullYear()}`,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/AmritaBot/docs-template" },
    ],
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
});
