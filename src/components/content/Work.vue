<script setup lang="ts">
import work from "../../../content/work.json";
import { slugify } from "../../slugify";
import Ruler from "../blueprint/Ruler.vue";
import SectionLabel from "../blueprint/SectionLabel.vue";
import TypewriterHeading from "../TypewriterHeading.vue";

// TODO: content/work.json has Xero "Senior Engineer" ending 2021-12 and
// "Senior Engineer, Design Systems" starting 2022-01. The real month I moved
// to Design Systems is somewhere in Jan-Mar 2022 and still needs confirming.
const formatDate = (date: string) =>
  new Date(date).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
</script>

<template>
  <section>
    <div :id="slugify(work.title)" class="container">
      <SectionLabel index="01" :label="slugify(work.title)" />
      <TypewriterHeading :title="work.title" :level="2" />
      <TypewriterHeading
        :title="work.description"
        :level="3"
        :type-time="1800"
      />
      <div
        v-for="(experienceGroup, index) in work.experienceGroups"
        :key="experienceGroup.subtitle"
        class="experience-group"
      >
        <h3 class="experience-group-subtitle">
          {{ experienceGroup.subtitle }}
        </h3>
        <div class="experience-group-description">
          <p v-for="paragraph in experienceGroup.description" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
        <div class="experiences">
          <div
            v-for="experience in experienceGroup.experiences"
            :key="`${experience.company}-${experience.startDate}`"
            class="experience"
            :class="{ current: experience.current }"
          >
            <h4>
              {{ experience.jobTitle }}<br />@
              <a :href="experience.companyWebsite">{{ experience.company }}</a>
            </h4>
            <p>
              {{ formatDate(experience.startDate) }} -
              {{
                experience.current ? "Current" : formatDate(experience.endDate)
              }}
            </p>
          </div>
        </div>
        <Ruler v-if="index < work.experienceGroups.length - 1" />
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
}

.experience-group:last-of-type {
  margin-bottom: 0;
}
.experience-group:last-of-type .experiences {
  margin-bottom: 0;
}
.experiences {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  margin: 4rem 0;
}
.experience {
  flex: 1;
  min-width: 380px;
}
.experience.current {
  flex-basis: 100%;
}
.experience.current h4 {
  font-size: 1.25rem;
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
  .experience {
    min-width: unset;
  }
}
</style>
