<script setup lang="ts">
import work from "../../content/work.json";
import TypewriterHeading from "./TypewriterHeading.vue";

const formatDate = (date: string) =>
  new Date(date).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
</script>

<template>
  <section>
    <div class="container">
      <!-- <h2>{{ work.title }}</h2> -->
      <TypewriterHeading v-bind:title="work.title" level="2" />
      <div
        v-for="experienceGroup in work.experienceGroups"
        class="experience-group"
      >
        <h3 class="experience-subtitle">{{ experienceGroup.subtitle }}</h3>
        <div
          v-for="experience in experienceGroup.experiences"
          class="experience"
        >
          <h4>
            {{ experience.jobTitle }} @
            <a v-bind:href="experience.companyWebsite">{{
              experience.company
            }}</a>
          </h4>
          <p>
            {{ formatDate(experience.startDate) }} -
            {{
              experience.current ? "current" : formatDate(experience.endDate)
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.experience-group {
  border-bottom: 0.5px solid var(--color-border);
}
.experience {
  margin: 4rem auto;
}
</style>
