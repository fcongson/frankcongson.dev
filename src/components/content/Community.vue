<script setup lang="ts">
import community from "../../../content/community.json";
import { slugify } from "../../slugify";
import SectionLabel from "../blueprint/SectionLabel.vue";
import TypewriterHeading from "../TypewriterHeading.vue";
</script>

<template>
  <div class="full-width-bg">
    <section>
      <div :id="slugify(community.title)" class="container">
        <SectionLabel index="04" :label="slugify(community.title)" />
        <TypewriterHeading :title="community.title" :level="2" />
        <TypewriterHeading
          :title="community.description"
          :level="3"
          :type-time="1800"
        />
        <div
          v-for="(project, index) in community.projects"
          :key="project.name"
          class="project"
        >
          <div class="project-frame">
            <img
              class="project-image"
              :src="project.image"
              :alt="project.name"
              loading="lazy"
            />
          </div>
          <p class="project-fig" aria-hidden="true">
            fig. {{ String(index + 1).padStart(2, "0") }}
          </p>
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
.project-frame {
  --mark: var(--color-blueprint-mark);
  --arm: 14px;
  position: relative;
}
/* crop marks just outside the logo, like an artboard selection */
.project-frame::before {
  content: "";
  position: absolute;
  inset: -10px;
  pointer-events: none;
  background:
    linear-gradient(var(--mark), var(--mark)) top left / var(--arm) 1px,
    linear-gradient(var(--mark), var(--mark)) top left / 1px var(--arm),
    linear-gradient(var(--mark), var(--mark)) top right / var(--arm) 1px,
    linear-gradient(var(--mark), var(--mark)) top right / 1px var(--arm),
    linear-gradient(var(--mark), var(--mark)) bottom left / var(--arm) 1px,
    linear-gradient(var(--mark), var(--mark)) bottom left / 1px var(--arm),
    linear-gradient(var(--mark), var(--mark)) bottom right / var(--arm) 1px,
    linear-gradient(var(--mark), var(--mark)) bottom right / 1px var(--arm);
  background-repeat: no-repeat;
}
.project-image {
  display: block;
  max-width: 600px;
  width: 100%;
  border-radius: 0.5rem;
}
.project-fig {
  margin: 1.25rem 0 0;
  font-family: var(--font-family-monospace);
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-blueprint-mark);
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
