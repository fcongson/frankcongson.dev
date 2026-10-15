<script setup lang="ts">
defineProps<{
  index: string;
  label: string;
}>();
</script>

<template>
  <p class="section-label" aria-hidden="true">// {{ index }} — {{ label }}</p>
</template>

<style scoped>
.section-label {
  margin: 0 0 0.75rem;
  font-family: var(--font-family-monospace);
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-blueprint-mark);
}
</style>
