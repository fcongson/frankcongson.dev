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
  list-style: none;
  counter-reset: section;
  padding: 0;
}
ol li:before {
  counter-increment: section;
  content: counter(section);
  font-family: var(--font-family-monospace);
  font-size: 1.25rem;
  position: absolute;
  left: 0;
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
:deep(a) {
  border-bottom-color: var(--color-border-on-navy-bg);
}
:deep(a:hover) {
  border-bottom-color: var(--color-border-on-hover-on-color-bg);
}
</style>
