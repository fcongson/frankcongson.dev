<script setup lang="ts">
import projects from "../../../content/projects.json";
import { slugify } from "../../slugify";
import TypewriterHeading from "../TypewriterHeading.vue";
</script>

<template>
  <div class="full-width-bg">
    <section>
      <div :id="slugify(projects.title)" class="container">
        <TypewriterHeading :title="projects.title" :level="2" />
        <TypewriterHeading
          :title="projects.description"
          :level="3"
          :type-time="1800"
        />
        <div
          v-for="projectGroup in projects.projectGroups"
          :key="projectGroup.subtitle"
          class="project-group"
        >
          <h3 class="project-subtitle">{{ projectGroup.subtitle }}</h3>
          <p class="project-description" v-html="projectGroup.description" />
          <div
            v-for="project in projectGroup.projects"
            :key="project.name"
            class="project"
          >
            <h4>
              <a :href="project.url">{{ project.name }}</a>
            </h4>
            <p class="project-description" v-html="project.description" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.full-width-bg {
  width: 100vw;
  background-color: var(--color-section-background);
}
.container {
  margin: 0 1rem;
  padding: 8rem 0;
}
.project-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.project-group {
  margin: 4rem auto;
  border-bottom: 0.5px solid var(--color-border);
}

.project-group:last-of-type {
  border-bottom: none;
}
.project {
  margin: 4rem auto;
}
.project h4 {
  font-size: 1.25rem;
}
p.project-description {
  font-family: var(--font-family-serif);
  line-height: 2;
}
</style>
