<script setup lang="ts">
import { name, info, contacts } from "../../content/header.json";
</script>

<template>
  <header>
    <div id="logo">
      <img
        alt="Frank Congson logo"
        src="../assets/logo.svg"
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
      <div id="contact">
        <ul>
          <li v-for="contact in contacts">
            <a v-bind:href="contact.url">{{ contact.name }}</a>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<style scoped>
div#logo {
  background-color: var(--lagom-colors-grey-darker40);
  height: 32px;
  width: 100vw;
  min-width: 100vw;
  padding: 0;
  text-align: center;
}
header {
  font-size: 0.75rem;
}
section {
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#info {
  text-align: left;
  margin: 0 1rem;
}
#contact {
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
