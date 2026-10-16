<script setup lang="ts">
import { email, name, site, socials } from "../../../content/contact.json";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="blueprint-grid">
    <div id="logo">
      <img
        alt="Frank Congson logo"
        src="../../assets/logo.svg"
        width="32"
        height="32"
      />
    </div>
    <div id="socials">
      <ul>
        <li>
          <a :href="'mailto:' + email">Contact me</a>
        </li>
        <li v-for="social in socials" :key="social.name">
          <a :href="social.url">{{ social.name }}</a>
        </li>
        <li>
          <a :href="site">.COM</a>
        </li>
      </ul>
    </div>
    <small class="copyright">Copyright © {{ year }} {{ name }}</small>
  </footer>
</template>

<style scoped>
footer {
  font-size: max(0.75rem, 12px);
  width: 100vw;
  /* border-top: 0.5px solid var(--lagom-core-colors-grey-darker20); */
  background-color: var(--lagom-core-colors-grey-darker40);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* the footer stays dark in light mode, so pin the grid color and fade */
  --color-blueprint-grid: color-mix(
    in srgb,
    var(--lagom-core-colors-olive-lighter20) 34%,
    transparent
  );
  --blueprint-grid-mask: linear-gradient(to top, transparent 5%, #000 90%);
}
div#logo {
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
}
div#socials {
  width: 100%;
  max-width: 400px;
  margin-bottom: 2.5rem;
}
.copyright {
  margin-bottom: 2rem;
  padding: 0 1rem;
  text-align: center;
  font-family: var(--font-family-monospace);
  font-size: max(0.6875rem, 11px);
  color: var(--lagom-core-colors-olive-lighter20);
}
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 1rem;
  margin: 0;
}
a {
  color: var(--lagom-core-colors-grey-lighter40);
  border-bottom-color: var(--lagom-core-colors-olive-darker20);
}
a:hover {
  border-bottom-color: var(--lagom-core-colors-olive-lighter40);
}
</style>
