<template>
  <img alt="Frank Congson logo" src="./assets/logo.svg" width="128" height="128" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <HelloWorld msg="> frankcongson.dev waiting to sprout 🌱 _" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
@font-face {
  font-family: "silkamono";
  src: url("./assets/silkamono-regular-webfont.woff2") format("woff2");
}
#app {
  font-family: "silkamono", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
