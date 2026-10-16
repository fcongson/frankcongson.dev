<script setup lang="ts">
const corners = ["top-left", "top-right", "bottom-left", "bottom-right"];
</script>

<!-- Crosshairs in the corners of its parent, which needs position: relative.
     Set --registration-inset on the parent to move them in or out. -->
<template>
  <div class="registration-marks" aria-hidden="true">
    <svg
      v-for="corner in corners"
      :key="corner"
      class="mark"
      :class="corner"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
    >
      <path d="M9 0v18M0 9h18" />
    </svg>
  </div>
</template>

<style scoped>
.registration-marks {
  position: absolute;
  inset: var(--registration-inset, 12px);
  pointer-events: none;
  color: var(--color-blueprint-mark);
}
.mark {
  position: absolute;
  width: 18px;
  height: 18px;
}
.top-left {
  top: 0;
  left: 0;
}
.top-right {
  top: 0;
  right: 0;
}
.bottom-left {
  bottom: 0;
  left: 0;
}
.bottom-right {
  right: 0;
  bottom: 0;
}
</style>
