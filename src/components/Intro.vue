<script setup lang="ts">
import intro from "../../content/intro.json";
</script>

<template>
  <section>
    <div class="container">
      <h1>{{ intro.headline }}</h1>
      <h2>{{ intro.tagline }}</h2>
      <p>lorem ipsum dolor sit amet.</p>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
}
.container {
  margin: 0 1rem;
}
</style>
