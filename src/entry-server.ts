import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import App from "./App.vue";

// Used at build time by scripts/prerender.mjs to bake the page into index.html.
export const render = () => renderToString(createSSRApp(App));
