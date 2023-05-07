<script lang="ts">
export default {
  props: ["title", "level"],
  setup() {
    let typed = "";
    return {
      typed,
    };
  },
  mounted(this) {
    window.setInterval(() => {
      this.typed = this.$props.title.slice(0, this.typed.length + 1);
      this.$forceUpdate();
    }, 70);
  },
};
</script>

<template>
  <h1 v-if="level === '1'">{{ typed }}<span class="cursor">_</span></h1>
  <h2 v-if="level === '2'">{{ typed }}<span class="cursor">_</span></h2>
  <h3 v-if="level === '3'">{{ typed }}<span class="cursor">_</span></h3>
  <h4 v-if="level === '4'">{{ typed }}<span class="cursor">_</span></h4>
  <h5 v-if="level === '5'">{{ typed }}<span class="cursor">_</span></h5>
  <h6 v-if="level === '6'">{{ typed }}<span class="cursor">_</span></h6>
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
