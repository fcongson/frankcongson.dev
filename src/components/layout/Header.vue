<script setup lang="ts">
import { name, info, socials } from "../../../content/contact.json";
</script>

<template>
  <header>
    <div id="logo">
      <img
        alt="Frank Congson logo"
        src="../../assets/logo.svg"
        width="32"
        height="32"
      />
    </div>
    <section>
      <div id="info">
        <p>
          <strong>{{ name }}</strong>
        </p>
        <p v-for="item in info">{{ item }}</p>
      </div>
      <div id="socials">
        <ul>
          <li v-for="social in socials">
            <a v-bind:href="social.url">{{ social.name }}</a>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<style scoped>
div#logo {
  background-color: var(--lagom-core-colors-grey-darker40);
  height: 32px;
  width: 100vw;
  min-width: 100vw;
  padding: 0;
  text-align: center;
}
header {
  font-size: max(0.75rem, 12px);
}
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#info {
  text-align: left;
  margin: 0 1rem;
}
#socials {
  text-align: right;
  margin: 0 1rem;
}
p,
ul,
li {
  margin: 0.5rem auto;
}
ul {
  list-style-type: none;
}
</style>
