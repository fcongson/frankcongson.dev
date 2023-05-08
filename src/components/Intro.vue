<script setup lang="ts">
import intro from "../../content/intro.json";
import TypewriterHeading from "./TypewriterHeading.vue";
</script>

<template>
  <section>
    <div class="container">
      <TypewriterHeading v-bind:title="intro.headline" level="1" />
      <TypewriterHeading v-bind:title="intro.tagline" level="2" />
    </div>
  </section>
  <div class="full-width-bg">
    <section>
      <div class="container description">
        <p v-for="text in intro.description" v-html="text" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.container:first-of-type {
  margin-top: 6rem;
}
.full-width-bg {
  width: 100vw;
  background-color: var(--color-container-background);
}
.container.description {
  font-size: 1.25rem;
  font-weight: 600;
  padding: 4rem 0;
}

.description ::v-deep a {
  border-bottom-color: var(--color-border-on-container-background);
}
.description ::v-deep a:hover {
  border-bottom-color: var(--color-border-on-hover);
}
</style>
