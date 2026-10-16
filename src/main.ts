import { createApp, createSSRApp } from "vue";
import App from "./App.vue";
import "./style.css";

const root = document.querySelector("#app");

if (root) {
  // The production build ships prerendered markup to hydrate. The dev server
  // has none, so mount from scratch there.
  (root.hasChildNodes() ? createSSRApp : createApp)(App).mount(root);
}
