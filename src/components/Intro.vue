<script setup lang="ts">
import intro from "../../content/intro.json";
</script>

<template>
  <section>
    <div class="container">
      <h1>{{ intro.headline }}</h1>
      <h2>{{ intro.tagline }}</h2>
    </div>
  </section>
  <section>
    <div class="container">
      <p>{{ intro.description }}</p>
    </div>
  </section>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "silkamono", monospace;
}
</style>
