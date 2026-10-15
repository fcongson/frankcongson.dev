<script setup lang="ts">
import community from "../../../content/community.json";
import intro from "../../../content/intro.json";
import projects from "../../../content/projects.json";
import work from "../../../content/work.json";
import writing from "../../../content/writing.json";
import { slugify } from "../../slugify";
import TypewriterHeading from "../TypewriterHeading.vue";

const sections = [work, projects, writing, community].map(({ title }) => ({
  title,
  id: slugify(title),
}));
</script>

<template>
  <section>
    <div class="container">
      <TypewriterHeading :title="intro.headline" :level="1" />
      <TypewriterHeading
        :title="intro.tagline"
        :level="2"
        :type-time="1800"
        :visible-threshold="0.25"
      />
    </div>
  </section>
  <div class="full-width-bg">
    <section>
      <div class="container">
        <div class="description">
          <p v-for="text in intro.description" :key="text" v-html="text" />
        </div>
        <div class="nav">
          <ol>
            <li v-for="section in sections" :key="section.id">
              <a :href="`#${section.id}`">{{ section.title }}</a>
            </li>
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
