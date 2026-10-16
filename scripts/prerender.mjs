// Bakes the rendered app into the built index.html so crawlers and link
// previews see real content. Run after both builds (see "build" in package.json):
//   node scripts/prerender.mjs [clientDir] [ssrDir]
import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const [clientDir = "dist", ssrDir = "dist-ssr"] = process.argv.slice(2);

const { render } = await import(
  pathToFileURL(resolve(root, ssrDir, "entry-server.js")).href
);
const html = await render();

const indexPath = resolve(root, clientDir, "index.html");
const template = await readFile(indexPath, "utf8");
const placeholder = '<div id="app"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`Expected ${placeholder} in ${indexPath}`);
}

// A replacer function stops `$&` and friends in the markup being interpreted.
await writeFile(
  indexPath,
  template.replace(placeholder, () => `<div id="app">${html}</div>`),
);
await rm(resolve(root, ssrDir), { recursive: true, force: true });

console.log(`Prerendered ${html.length} characters into ${indexPath}`);
