<script setup lang="ts">
defineProps<{
  background: string;
  accent: string;
}>();

const roles = [
  ["primary", "var(--lagom-core-colors-olive-base)"],
  ["secondary", "var(--lagom-core-colors-navy-base)"],
  ["tertiary", "var(--lagom-core-colors-violet-base)"],
] as const;
</script>

<template>
  <div class="theme-chip" aria-hidden="true">
    <div class="preview" :style="{ backgroundColor: background }">
      <span class="pill" :style="{ backgroundColor: accent }" />
      <span class="line" />
      <span class="line short" />
    </div>
    <div class="details">
      <div class="swatches">
        <div class="item">
          <span class="swatch" :style="{ backgroundColor: background }" />
          <small>bg</small>
        </div>
        <div class="item">
          <span class="swatch" :style="{ backgroundColor: accent }" />
          <small>accent</small>
        </div>
        <span class="divider" />
        <div v-for="[role, color] in roles" :key="role" class="item">
          <span class="swatch" :style="{ backgroundColor: color }" />
          <small>{{ role }}</small>
        </div>
      </div>
      <p class="caption">bg {{ background }} · accent {{ accent }}</p>
    </div>
  </div>
</template>

<style scoped>
.theme-chip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-top: 1.5rem;
  font-family: var(--font-family-monospace);
}
.preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 5.5rem;
  height: 3.75rem;
  padding: 0 0.75rem;
  box-sizing: border-box;
  border-radius: var(--lagom-core-border-radius-md);
  box-shadow: inset 0 0 0 1px
    color-mix(in srgb, var(--color-foreground) 18%, transparent);
}
.pill {
  width: 1.5rem;
  height: 0.5rem;
  border-radius: 999px;
}
.line {
  height: 3px;
  border-radius: 2px;
  background-color: rgb(255 255 255 / 0.55);
}
.line.short {
  width: 60%;
}
.swatches {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}
.swatch {
  width: 1.75rem;
  height: 1.75rem;
  box-shadow: inset 0 0 0 1px
    color-mix(in srgb, var(--color-foreground) 18%, transparent);
}
small {
  font-size: 0.5625rem;
  color: var(--color-blueprint-mark);
}
.divider {
  align-self: stretch;
  width: 1px;
  margin: 0 0.25rem;
  background-color: var(--color-blueprint-line);
}
.caption {
  margin: 0.5rem 0 0;
  font-size: 0.6875rem;
  line-height: 1.5;
  color: var(--color-blueprint-mark);
}
</style>
