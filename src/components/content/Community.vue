<script setup lang="ts">
import community from "../../../content/community.json";
import TypewriterHeading from "../TypewriterHeading.vue";
</script>

<template>
  <div class="full-width-bg">
    <section>
      <div
        class="container"
        v-bind:id="`${community.title.toLowerCase().replace(' ', '-')}`"
      >
        <TypewriterHeading v-bind:title="community.title" level="2" />
        <TypewriterHeading
          v-bind:title="community.description"
          level="3"
          v-bind:typeTime="1800"
        />
        <div v-for="project in community.projects" class="project">
          <!-- <a v-bind:href="project.url"> -->
          <img class="project-image" v-bind:src="project.image" />
          <!-- </a> -->
          <h3 class="project-name">
            <a v-bind:href="project.url">
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
