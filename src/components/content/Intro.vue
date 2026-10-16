<script setup lang="ts">
import community from "../../../content/community.json";
import intro from "../../../content/intro.json";
import projects from "../../../content/projects.json";
import work from "../../../content/work.json";
import writing from "../../../content/writing.json";
import { slugify } from "../../slugify";
import RegistrationMarks from "../blueprint/RegistrationMarks.vue";
import Ruler from "../blueprint/Ruler.vue";
import SectionLabel from "../blueprint/SectionLabel.vue";
import TypewriterHeading from "../TypewriterHeading.vue";

const sections = [work, projects, writing, community].map(({ title }) => ({
  title,
  id: slugify(title),
}));
</script>

<template>
  <div class="hero blueprint-grid">
    <RegistrationMarks />
    <section>
      <div class="container">
        <SectionLabel index="00" label="intro" />
        <div class="headline">
          <span class="dimension" aria-hidden="true">
            <span>H1 · 54 / 66</span>
          </span>
          <TypewriterHeading :title="intro.headline" :level="1" />
        </div>
        <TypewriterHeading
          :title="intro.tagline"
          :level="2"
          :type-time="1800"
          :visible-threshold="0.25"
        />
        <Ruler class="hero-ruler" start-label="0" end-label="800" />
      </div>
    </section>
  </div>
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
.hero {
  width: 100vw;
  display: flow-root;
}
.headline {
  position: relative;
  width: fit-content;
  max-width: 100%;
}
.dimension {
  display: none;
}
@media (min-width: 900px) {
  .dimension {
    display: block;
    position: absolute;
    top: 8px;
    bottom: calc(1rem + 8px);
    left: -18px;
    width: 8px;
    border-left: 1px solid var(--color-blueprint-mark);
  }
  .dimension::before,
  .dimension::after {
    content: "";
    position: absolute;
    left: -4px;
    width: 9px;
    border-top: 1px solid var(--color-blueprint-mark);
  }
  .dimension::before {
    top: 0;
  }
  .dimension::after {
    bottom: 0;
  }
  .dimension span {
    position: absolute;
    top: 50%;
    left: -22px;
    transform: translate(-50%, -50%) rotate(-90deg);
    padding: 0 6px;
    font-family: var(--font-family-monospace);
    font-size: 10px;
    line-height: 1.5;
    white-space: nowrap;
    color: var(--color-blueprint-mark);
    background-color: var(--color-background);
  }
}
.hero-ruler {
  margin: 2.5rem 0 0;
}
@media (min-width: 800px) {
  .hero-ruler {
    margin-inline: -1rem;
  }
}
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
