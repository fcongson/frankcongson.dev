<script setup lang="ts">
import work from "../../../content/work.json";
import TypewriterHeading from "../TypewriterHeading.vue";

const formatDate = (date: string) =>
  new Date(date).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
</script>

<template>
  <section>
    <div class="container">
      <TypewriterHeading v-bind:title="work.title" level="2" />
      <TypewriterHeading
        v-bind:title="work.description"
        level="3"
        v-bind:typeTime="1800"
      />
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
              experience.current ? "Current" : formatDate(experience.endDate)
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: 0 1rem;
  padding: 8rem 0;
}
.experience-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.experience-group {
  margin: 4rem auto;
  border-bottom: 0.5px solid var(--color-border);
}

.experience-group:last-of-type {
  border-bottom: none;
}
.experience {
  margin: 4rem auto;
}
</style>
