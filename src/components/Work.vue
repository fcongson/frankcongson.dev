<script setup lang="ts">
import work from "../../content/work.json";

const formatDate = (date: string) =>
  new Date(date).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
</script>

<template>
  <section>
    <div class="container">
      <h2>{{ work.title }}</h2>
      <div v-for="experience in work.experiences">
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
