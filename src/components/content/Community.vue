<script setup lang="ts">
import community from "../../../content/community.json";
import { slugify } from "../../slugify";
import TypewriterHeading from "../TypewriterHeading.vue";
</script>

<template>
  <div class="full-width-bg">
    <section>
      <div :id="slugify(community.title)" class="container">
        <TypewriterHeading :title="community.title" :level="2" />
        <TypewriterHeading
          :title="community.description"
          :level="3"
          :type-time="1800"
        />
        <div
          v-for="project in community.projects"
          :key="project.name"
          class="project"
        >
          <img
            class="project-image"
            :src="project.image"
            :alt="project.name"
            loading="lazy"
          />
          <h3 class="project-name">
            <a :href="project.url">
              {{ project.name }}
            </a>
          </h3>
          <p class="project-description" v-html="project.description" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.full-width-bg {
  width: 100vw;
  background-color: var(--color-section-background-violet);
}
.container {
  margin: 0 1rem;
  padding: 8rem 0;
}
.project {
  max-width: 600px;
  width: 100%;
  margin: 4rem auto;
  text-align: center;
}
.project-image {
  max-width: 600px;
  width: 100%;
  border-radius: 0.5rem;
}
p.project-description {
  font-family: var(--font-family-serif);
  line-height: 2;
}
:deep(a) {
  border-bottom-color: var(--color-border-on-violet-bg);
}
:deep(a:hover) {
  border-bottom-color: var(--color-border-on-hover-on-color-bg);
}
</style>
