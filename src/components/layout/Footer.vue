<script setup lang="ts">
import { email, site, socials } from "../../../content/contact.json";
</script>

<template>
  <footer>
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
          <a v-bind:href="'mailto:' + email">Contact me</a>
        </li>
        <li v-for="social in socials">
          <a v-bind:href="social.url">{{ social.name }}</a>
        </li>
        <li>
          <a v-bind:href="site">.COM</a>
        </li>
      </ul>
    </div>
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
  margin-bottom: 4rem;
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
