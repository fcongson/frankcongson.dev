<script setup lang="ts">
import Community from "./components/content/Community.vue";
import Intro from "./components/content/Intro.vue";
import Projects from "./components/content/Projects.vue";
import Work from "./components/content/Work.vue";
import Writing from "./components/content/Writing.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <Header />
  <main>
    <Intro />
    <Work />
    <Projects />
    <Writing />
    <Community />
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
  max-width: var(--layout-max-width);
  margin: 0 auto;
}
.container {
  margin: 8rem 1rem;
}
.container:last-of-type {
  margin-bottom: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}
p {
  text-wrap: pretty;
}
</style>
