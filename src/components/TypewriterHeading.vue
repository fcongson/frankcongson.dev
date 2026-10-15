<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";

const {
  title,
  level,
  typeDelay = 70,
  typeTime,
  visibleThreshold = 0.7,
} = defineProps<{
  title: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  typeDelay?: number;
  typeTime?: number;
  visibleThreshold?: number;
}>();

const tag = computed(() => `h${level}`);
const typedLength = ref(0);
const typed = computed(() => title.slice(0, typedLength.value));
const target = useTemplateRef<HTMLElement>("target");

let observer: IntersectionObserver | undefined;
let interval: number | undefined;

const startTyping = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typedLength.value = title.length;
    return;
  }
  const delay = typeTime ? typeTime / title.length : typeDelay;
  interval = window.setInterval(() => {
    typedLength.value++;
    if (typedLength.value >= title.length) {
      window.clearInterval(interval);
    }
  }, delay);
};

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        observer?.disconnect();
        startTyping();
      }
    },
    { threshold: visibleThreshold },
  );
  if (target.value) {
    observer.observe(target.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
  window.clearInterval(interval);
});
</script>

<template>
  <component :is="tag" ref="target" class="typewriter">
    <span class="sr-only">{{ title }}</span>
    <span class="placeholder" aria-hidden="true"
      >{{ title }}<span class="cursor">_</span></span
    >
    <span class="typed" aria-hidden="true"
      >{{ typed }}<span class="cursor">_</span></span
    >
  </component>
</template>

<style scoped>
.typewriter {
  display: grid;
  font-family: var(--font-family-monospace);
  overflow-wrap: break-word;
  text-wrap: unset;
}
.placeholder,
.typed {
  grid-area: 1 / 1;
}
.placeholder {
  visibility: hidden;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
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
  display: inline-block;
}
@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }
}
</style>
