<script setup lang="ts">
import projects from "../../../content/projects.json";
import TypewriterHeading from "../TypewriterHeading.vue";
</script>

<template>
  <div class="full-width-bg">
    <section>
      <div class="container">
        <TypewriterHeading v-bind:title="projects.title" level="2" />
        <TypewriterHeading
          v-bind:title="projects.description"
          level="3"
          v-bind:typeTime="1800"
        />
        <div
          class="project-group"
          v-for="projectGroup in projects.projectGroups"
        >
          <h3>{{ projectGroup.subtitle }}</h3>
          <div v-for="project in projectGroup.projects" class="project">
            <h4>{{ project.name }}</h4>
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
  padding: 8rem 0;
}
</style>
