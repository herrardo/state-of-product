import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { SitemapStream } from "sitemap";
import { defineConfig } from "vitepress";

const links = [];

export default {
  title: "State of the Product",
  description:
    "This is a summary of Product Management events, conferences and certifications",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "assets/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "assets/favicons/favicon-16x16.png",
      },
    ],
    [
      "script",
      {
        defer: true,
        "data-domain": "herrardo.github.io/state-of-product",
        src: "https://plausible.io/js/script.js",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "B4GLSpvMeuym9RTuXF9kfGtkWVzt3RgtecaORHQo5sI",
      },
    ],
  ],
  lang: "en-US",
  themeConfig: {
    logo: "assets/logo-color.png",
    nav: [
      {
        text: "Events",
        link: "/events/2023/product.md",
      },
      {
        text: "Certifications",
        link: "/certifications/scrum/",
      },
      {
        text: "Courses",
        link: "/courses/",
      },
      {
        text: "Media",
        link: "/media/podcasts/",
      },
    ],
    sidebar: [
      {
        text: "Events",
        items: [
          {
            text: "2023 Product Events",
            link: "/events/2023/product.md",
          },
          {
            text: "2023 Agile Events",
            link: "/events/2023/agile.md",
          },
          {
            text: "2023 UX/Design Events",
            link: "/events/2023/ux.md",
          },
        ],
      },
      {
        text: "Certifications",
        items: [
          {
            text: "Scrum.org",
            link: "/certifications/scrum/",
          },
          {
            text: "Scrum Alliance",
            link: "/certifications/scrum-alliance/",
          },
        ],
      },
      {
        text: "Courses",
        items: [
          {
            text: "Product Courses",
            link: "/courses/",
          },
        ],
      },
      {
        text: "Media",
        items: [
          {
            text: "Podcasts",
            link: "/media/podcasts/",
          },
          {
            text: "Books",
            link: "/media/books/",
          },
          {
            text: "Slack Communities",
            link: "/media/slack/",
          },
          {
            text: "Blogs/Newsletters",
            link: "/media/blogs/",
          },
        ],
      },
    ],
    editLink: {
      pattern:
        "https://github.com/herrardo/state-of-product/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/herrardo/state-of-product",
      },
    ],
    footer: {
      message: `Released under the MIT License.<br /><a href="https://www.flaticon.com/free-icons/product">Product icons created by Freepik - Flaticon</a>`,
      copyright: "Powered by VitePress",
    },
  },
  lastUpdated: true,
  base: "/state-of-product/",
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
        lastmod: pageData.lastUpdated,
      });
  },

  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: "https://herrardo.github.io/state-of-product/",
    });
    const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
    sitemap.pipe(writeStream);
    links.forEach((link) => sitemap.write(link));
    sitemap.end();
    await new Promise((r) => writeStream.on("finish", r));
  },
};
