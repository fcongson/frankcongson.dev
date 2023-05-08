<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Projects from "./components/Projects.vue";
import Work from "./components/Work.vue";
</script>

<template>
  <Header />
  <main>
    <Intro />
    <Work />
    <Projects />
  </main>
  <Footer />
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
  margin: 0 auto;
}
section {
  width: 100vw;
  max-width: 800px;
  margin: 0 auto;
}
.container {
  margin: 8rem 1rem;
}
.container:last-of-type {
  margin-bottom: 0;
}
</style>
