<script setup lang="ts">
import projects from "../../../content/projects.json";
import { slugify } from "../../slugify";
import Ruler from "../blueprint/Ruler.vue";
import SectionLabel from "../blueprint/SectionLabel.vue";
import ThemeChip from "../blueprint/ThemeChip.vue";
import TokenSpec from "../blueprint/TokenSpec.vue";
import TypewriterHeading from "../TypewriterHeading.vue";

interface Project {
  name: string;
  url: string;
  description: string;
  showSpec?: boolean;
  theme?: { background: string; accent: string };
}

const projectGroups: {
  subtitle: string;
  description: string;
  projects: Project[];
}[] = projects.projectGroups;
</script>

<template>
  <div class="full-width-bg">
    <section>
      <div :id="slugify(projects.title)" class="container">
        <SectionLabel index="02" :label="slugify(projects.title)" />
        <TypewriterHeading :title="projects.title" :level="2" />
        <TypewriterHeading
          :title="projects.description"
          :level="3"
          :type-time="1800"
        />
        <div
          v-for="(projectGroup, index) in projectGroups"
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
            <TokenSpec v-if="project.showSpec" />
            <ThemeChip
              v-if="project.theme"
              :background="project.theme.background"
              :accent="project.theme.accent"
            />
          </div>
          <Ruler v-if="index < projectGroups.length - 1" />
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
