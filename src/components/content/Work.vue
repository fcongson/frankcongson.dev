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
        <h3 class="experience-group-subtitle">
          {{ experienceGroup.subtitle }}
        </h3>
        <div class="experience-group-description">
          <p v-for="paragraph in experienceGroup.description">
            {{ paragraph }}
          </p>
        </div>
        <div class="experiences">
          <div
            v-for="experience in experienceGroup.experiences"
            class="experience"
          >
            <h4>
              {{ experience.jobTitle }}<br />@
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
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: 0 1rem;
  padding: 8rem 0;
}
.experience-group-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.experience-group {
  margin: 4rem auto;
  border-bottom: 0.5px solid var(--color-border);
}

.experience-group:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
}
.experience-group:last-of-type .experiences {
  margin-bottom: 0;
}
.experiences {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  text-align: center;
  margin: 4rem 0;
}
.experience {
  flex: 1;
}
.experience-group-description {
  margin: 4rem auto;
  font-family: var(--font-family-serif);
  line-height: 2;
}
@media screen and (max-width: 568px) {
  .experiences {
    flex-direction: column;
  }
}
</style>
