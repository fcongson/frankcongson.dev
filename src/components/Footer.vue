<script setup lang="ts">
import { email, socials } from "../../content/contact.json";
</script>

<template>
  <footer>
    <div id="logo">
      <img
        alt="Frank Congson logo"
        src="../assets/logo.svg"
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
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-size: 0.75rem;
  width: 100vw;
  border-top: 0.5px solid var(--lagom-colors-grey-darker20);
  background-color: var(--lagom-colors-grey-darker40);
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
  margin-bottom: 4rem;
}
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  margin: 0 2rem;
}
a {
  color: var(--lagom-colors-grey-lighter40);
  border-bottom-color: var(--lagom-colors-olive-darker20);
}
a:hover {
  border-bottom-color: var(--lagom-colors-olive-lighter40);
}
</style>
