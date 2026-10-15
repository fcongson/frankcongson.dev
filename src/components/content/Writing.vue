<script setup lang="ts">
import writing from "../../../content/writing.json";
import { slugify } from "../../slugify";
import SectionLabel from "../blueprint/SectionLabel.vue";
import TypewriterHeading from "../TypewriterHeading.vue";
</script>

<template>
  <div class="full-width-bg">
    <section>
      <div :id="slugify(writing.title)" class="container">
        <SectionLabel index="03" :label="slugify(writing.title)" />
        <TypewriterHeading :title="writing.title" :level="2" />
        <TypewriterHeading
          :title="writing.description"
          :level="3"
          :type-time="1800"
        />
        <ol>
          <li v-for="article in writing.articles" :key="article.url">
            <a :href="article.url">{{ article.title }}</a>
            <span class="arrow" aria-hidden="true">→</span>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<style scoped>
.full-width-bg {
  width: 100vw;
  background-color: var(--color-section-background-navy);
}
.container {
  margin: 0 1rem;
  padding: 8rem 0;
}
ol {
  --gutter-x: 2.75rem;
  list-style: none;
  counter-reset: section;
  padding: 0;
  position: relative;
}
/* gutter rule, like the line-number column in an editor */
ol::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--gutter-x);
  width: 1px;
  background-color: var(--color-blueprint-line);
}
ol li:before {
  counter-increment: section;
  content: counter(section);
  font-family: var(--font-family-monospace);
  font-size: 1.25rem;
  position: absolute;
  left: 0;
  color: var(--color-blueprint-mark);
  transition: color 200ms ease-in-out;
}
ol li:has(a:hover):before,
ol li:has(a:focus-visible):before {
  color: var(--color-foreground);
}
/* tick across the rule, level with the first line of each title */
ol li::after {
  content: "";
  position: absolute;
  top: 1.0625rem;
  left: calc(var(--gutter-x) - 4px);
  width: 9px;
  height: 1px;
  background-color: var(--color-blueprint-mark);
}
ol li:nth-child(-n + 9):before {
  content: "0" counter(section);
}
li {
  margin: 4rem auto;
  font-size: 1.25rem;
  position: relative;
  padding-left: 4rem;
}
.arrow {
  margin-left: 0.5rem;
  font-family: var(--font-family-monospace);
  color: var(--color-blueprint-mark);
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}
li:has(a:hover) .arrow,
li:has(a:focus-visible) .arrow {
  opacity: 1;
}
@media (prefers-reduced-motion: no-preference) {
  .arrow {
    display: inline-block;
    transform: translateX(-4px);
    transition:
      opacity 200ms ease-in-out,
      transform 200ms ease-in-out;
  }
  li:has(a:hover) .arrow,
  li:has(a:focus-visible) .arrow {
    transform: translateX(0);
  }
}
:deep(a) {
  border-bottom-color: var(--color-border-on-navy-bg);
}
:deep(a:hover) {
  border-bottom-color: var(--color-border-on-hover-on-color-bg);
}
</style>
