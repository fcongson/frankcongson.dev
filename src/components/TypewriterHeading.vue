<script lang="ts">
export default {
  props: ["title", "level"],
};
</script>

<template>
  <h1 v-if="level === '1'">{{ title }}<span class="cursor">_</span></h1>
  <h2 v-if="level === '2'">{{ title }}<span class="cursor">_</span></h2>
  <h3 v-if="level === '3'">{{ title }}<span class="cursor">_</span></h3>
  <h4 v-if="level === '4'">{{ title }}<span class="cursor">_</span></h4>
  <h5 v-if="level === '5'">{{ title }}<span class="cursor">_</span></h5>
  <h6 v-if="level === '6'">{{ title }}<span class="cursor">_</span></h6>
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
@keyframes cursor-blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.cursor {
  animation: cursor-blink 1.5s steps(2) infinite;
}
</style>
