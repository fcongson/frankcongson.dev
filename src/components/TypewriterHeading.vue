<script lang="ts">
export default {
  props: ["title", "level", "typeDelay", "typeTime", "visibleThreshold"],
  setup() {
    let typed = "";
    return {
      typed,
    };
  },
  mounted(this) {
    const { title, typeDelay, typeTime, visibleThreshold } = this.$props;

    const DEFAULT_TYPEDELAY = 70;
    const DEFAULT_THRESHOLD = 0.7;

    let interval = typeDelay ?? DEFAULT_TYPEDELAY;
    if (typeTime) {
      interval = typeTime / title.length;
    }
    const initTyping = () =>
      window.setInterval(() => {
        this.typed = title.slice(0, this.typed.length + 1);
        this.$forceUpdate();
      }, interval);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initTyping();
            observer.unobserve(this.$refs.target as Element);
          }
        });
      },
      {
        root: null,
        threshold: visibleThreshold ?? DEFAULT_THRESHOLD,
      }
    );

    observer.observe(this.$refs.target as Element);
  },
};
</script>

<template>
  <div class="typewriter" ref="target">
    <div class="hidden">
      <h1 v-if="level === '1'">{{ title }}<span class="cursor">_</span></h1>
      <h2 v-if="level === '2'">{{ title }}<span class="cursor">_</span></h2>
      <h3 v-if="level === '3'">{{ title }}<span class="cursor">_</span></h3>
      <h4 v-if="level === '4'">{{ title }}<span class="cursor">_</span></h4>
      <h5 v-if="level === '5'">{{ title }}<span class="cursor">_</span></h5>
      <h6 v-if="level === '6'">{{ title }}<span class="cursor">_</span></h6>
    </div>
    <div class="visible">
      <h1 v-if="level === '1'">{{ typed }}<span class="cursor">_</span></h1>
      <h2 v-if="level === '2'">{{ typed }}<span class="cursor">_</span></h2>
      <h3 v-if="level === '3'">{{ typed }}<span class="cursor">_</span></h3>
      <h4 v-if="level === '4'">{{ typed }}<span class="cursor">_</span></h4>
      <h5 v-if="level === '5'">{{ typed }}<span class="cursor">_</span></h5>
      <h6 v-if="level === '6'">{{ typed }}<span class="cursor">_</span></h6>
    </div>
  </div>
</template>

<style scoped>
.typewriter {
  display: grid;
}
.typewriter .hidden,
.typewriter .visible {
  grid-area: 1 / 1;
  width: 100%;
}
.typewriter .hidden {
  visibility: hidden;
  z-index: 0;
}
.typewriter .visible {
  z-index: 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-family-monospace);
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
</style>
