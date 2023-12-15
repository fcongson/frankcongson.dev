<script setup lang="ts">
import intro from "../../../content/intro.json";
import TypewriterHeading from "../TypewriterHeading.vue";
</script>

<template>
  <section>
    <div class="container">
      <TypewriterHeading v-bind:title="intro.headline" level="1" />
      <TypewriterHeading
        v-bind:title="intro.tagline"
        level="2"
        v-bind:typeTime="1800"
        v-bind:visibleThreshold="0.25"
      />
    </div>
  </section>
  <div class="full-width-bg">
    <section>
      <div class="container">
        <div class="description">
          <p v-for="text in intro.description" v-html="text" />
        </div>
        <div class="nav">
          <ol>
            <li><a href="#work-experience">Work Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#writing">Writing</a></li>
            <li><a href="#community">Community</a></li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container:first-of-type {
  margin-top: 6rem;
}
.full-width-bg {
  width: 100vw;
  background-color: var(--color-container-background);
}

.container {
  padding: 4rem 0;
}

.container .description {
  font-family: var(--font-family-serif);
  font-size: 1.25rem;
  margin: 4rem 0;
}

.container :deep(a) {
  border-bottom-color: var(--color-border-on-container-background);
}
.container :deep(a:hover) {
  border-bottom-color: var(--color-border-on-hover);
}

.container .nav {
  margin: 4rem 0;
}
.container .nav ol {
  list-style: none;
  counter-reset: section;
  padding: 0;
}
.container .nav ol li:before {
  counter-increment: section;
  content: counter(section);
  font-family: var(--font-family-monospace);
  font-size: 2rem;
  position: absolute;
  left: 0;
}
.container .nav ol li:nth-child(-n + 9):before {
  content: "0" counter(section);
}
.container .nav li {
  margin: 1rem auto;
  font-size: 2rem;
  position: relative;
  padding-left: 4rem;
}

.nav a {
  font-family: var(--font-family-monospace);
  font-size: 2rem;
}
</style>
