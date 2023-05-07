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
      <div v-for="experience in work.experiences" class="experience">
        <h3>
          {{ experience.jobTitle }} @
          <a v-bind:href="experience.companyWebsite">{{
            experience.company
          }}</a>
        </h3>
        <p>
          {{ formatDate(experience.startDate) }} -
          {{ experience.current ? "current" : formatDate(experience.endDate) }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  margin: 4rem auto;
}
</style>
