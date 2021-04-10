<template>
  <img
    alt="Frank Congson logo"
    src="./assets/logo.svg"
    width="128"
    height="128"
  />
  <Sprout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sprout from "./components/Sprout.vue";

export default defineComponent({
  name: "App",
  components: {
    Sprout,
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
  color: #111111;
  margin-top: 60px;
}
</style>
