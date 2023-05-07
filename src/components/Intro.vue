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
  <section>
    <div class="container">
      <p>{{ intro.description }}</p>
    </div>
  </section>
</template>
