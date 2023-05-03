<script setup lang="ts">
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
</script>

<template>
  <Header />
  <main>
    <Intro />
  </main>
</template>

<style>
#app {
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
}
</style>
