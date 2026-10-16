import vue from "@vitejs/plugin-vue";
import { readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";

const SITE_URL = "https://frankcongson.dev";

const contact = JSON.parse(
  readFileSync(new URL("./content/contact.json", import.meta.url), "utf8"),
) as {
  name: string;
  info: string[];
  site: string;
  socials: { name: string; url: string }[];
};

// Fills in the site URL and a schema.org Person built from content/contact.json,
// so the profile links in search results can't drift from the ones on the page.
const seo = (): Plugin => ({
  name: "seo",
  transformIndexHtml: {
    order: "pre",
    handler: (html) => ({
      html: html.replaceAll("%SITE_URL%", SITE_URL),
      tags: [
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: contact.name,
            jobTitle: contact.info[0],
            url: `${SITE_URL}/`,
            sameAs: [contact.site, ...contact.socials.map(({ url }) => url)],
            address: { "@type": "PostalAddress", addressCountry: "NZ" },
          }),
          injectTo: "head",
        },
      ],
    }),
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), seo()],
});
