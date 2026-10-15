<script setup lang="ts">
const { startLabel, endLabel } = defineProps<{
  startLabel?: string;
  endLabel?: string;
}>();
</script>

<template>
  <div
    class="ruler"
    :class="{ labelled: startLabel || endLabel }"
    aria-hidden="true"
  >
    <div class="line" />
    <div class="ticks" />
    <div class="ticks major" />
    <div class="cap start" />
    <div class="cap end" />
    <small v-if="startLabel" class="start">{{ startLabel }}</small>
    <small v-if="endLabel" class="end">{{ endLabel }}</small>
  </div>
</template>

<style scoped>
.ruler {
  position: relative;
  height: 18px;
}
.ruler.labelled {
  height: 34px;
}
.line,
.ticks {
  position: absolute;
  left: 0;
  right: 0;
  top: 4px;
}
.line {
  border-top: 1px solid var(--color-blueprint-line);
}
.ticks {
  height: 6px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-blueprint-line) 0 1px,
    transparent 1px 24px
  );
}
.ticks.major {
  height: 12px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-blueprint-mark) 0 1px,
    transparent 1px 120px
  );
}
.cap {
  position: absolute;
  top: 0;
  width: 1px;
  height: 18px;
  background: var(--color-blueprint-mark);
}
.cap.start {
  left: 0;
}
.cap.end {
  right: 0;
}
small {
  position: absolute;
  top: 20px;
  font-family: var(--font-family-monospace);
  font-size: 10px;
  line-height: 1.5;
  color: var(--color-blueprint-mark);
}
small.start {
  left: 0;
}
small.end {
  right: 0;
}
</style>
