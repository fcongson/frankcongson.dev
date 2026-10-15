<script setup lang="ts">
import coreCss from "@fcongson/lagom-tokens/css/variables/_core.css?raw";
import { onMounted, reactive, useTemplateRef } from "vue";
import Ruler from "./Ruler.vue";

const hues = ["grey", "olive", "navy", "violet", "honey", "red"];
const shades = [
  ["darker40", "-40"],
  ["darker35", "-35"],
  ["darker30", "-30"],
  ["darker20", "-20"],
  ["darker10", "-10"],
  ["darker5", "-5"],
  ["base", "base"],
  ["lighter20", "+20"],
  ["lighter40", "+40"],
] as const;

// Read the ladders straight from the package so this stays in step with it.
const available = new Set(
  Array.from(
    coreCss.matchAll(/--lagom-core-colors-([a-z]+)-([a-z0-9]+):/g),
    ([, hue, shade]) => `${hue}-${shade}`,
  ),
);
const ladders = hues.map((hue) => ({
  hue,
  swatches: shades.map(([shade]) => ({
    shade,
    token: `--lagom-core-colors-${hue}-${shade}`,
    present: available.has(`${hue}-${shade}`),
  })),
}));

const space = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];
const radius = ["xs", "sm", "md", "lg", "xl", "xxl"];
const type = ["xs", "sm", "body", "xl", "h3", "h1"];

// Token values are calc() chains, so measure what the browser resolves them to.
const root = useTemplateRef<HTMLElement>("root");
const measured = reactive<Record<string, string>>({});
onMounted(() => {
  root.value
    ?.querySelectorAll<HTMLElement>("[data-measure]")
    .forEach((element) => {
      const [kind = "", key = ""] = (element.dataset.measure ?? "").split(":");
      const style = getComputedStyle(element);
      const value =
        kind === "space"
          ? style.width
          : kind === "radius"
            ? style.borderTopLeftRadius
            : style.fontSize;
      measured[`${kind}:${key}`] = `${Math.round(parseFloat(value) * 10) / 10}`;
    });
});
</script>

<template>
  <div ref="root" class="token-spec" aria-hidden="true">
    <Ruler start-label="lagom-tokens" end-label="core" />

    <div class="block">
      <h5>color</h5>
      <div class="ladder head">
        <span />
        <span v-for="[shade, label] in shades" :key="shade">{{ label }}</span>
      </div>
      <div v-for="ladder in ladders" :key="ladder.hue" class="ladder">
        <span class="hue">{{ ladder.hue }}</span>
        <span
          v-for="swatch in ladder.swatches"
          :key="swatch.shade"
          class="swatch"
          :class="{ missing: !swatch.present }"
          :style="
            swatch.present
              ? { backgroundColor: `var(${swatch.token})` }
              : undefined
          "
          :title="swatch.present ? swatch.token : undefined"
        />
      </div>
    </div>

    <div class="scales">
      <div class="block">
        <h5>space</h5>
        <div class="row">
          <div v-for="key in space" :key="key" class="item">
            <span
              class="square"
              :style="{
                width: `var(--lagom-core-dimension-${key})`,
                height: `var(--lagom-core-dimension-${key})`,
              }"
              :data-measure="`space:${key}`"
            />
            <small>{{ key }}<br />{{ measured[`space:${key}`] }}</small>
          </div>
        </div>
      </div>

      <div class="block">
        <h5>radius</h5>
        <div class="row">
          <div v-for="key in radius" :key="key" class="item">
            <span
              class="corner"
              :style="{
                borderRadius: `var(--lagom-core-border-radius-${key})`,
              }"
              :data-measure="`radius:${key}`"
            />
            <small>{{ key }}<br />{{ measured[`radius:${key}`] }}</small>
          </div>
        </div>
      </div>

      <div class="block">
        <h5>type</h5>
        <div class="row type">
          <div v-for="key in type" :key="key" class="item">
            <span
              class="glyph"
              :style="{ fontSize: `var(--lagom-core-font-sizes-${key})` }"
              :data-measure="`type:${key}`"
              >Aa</span
            >
            <small>{{ key }}<br />{{ measured[`type:${key}`] }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.token-spec {
  margin-top: 2.5rem;
  font-family: var(--font-family-monospace);
}
h5 {
  margin: 0 0 0.75rem;
  font-family: var(--font-family-monospace);
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-blueprint-mark);
}
.block {
  margin-top: 1.5rem;
}

.ladder {
  display: grid;
  grid-template-columns: 3.5rem repeat(9, 1fr);
  gap: 4px;
  align-items: center;
  margin-bottom: 4px;
}
.ladder.head span {
  font-size: 0.5625rem;
  text-align: center;
  color: var(--color-blueprint-mark);
}
.hue {
  font-size: 0.6875rem;
  color: var(--color-blueprint-mark);
}
.swatch {
  height: 1.75rem;
  box-shadow: inset 0 0 0 1px
    color-mix(in srgb, var(--color-foreground) 14%, transparent);
}
.swatch.missing {
  box-shadow: none;
  border: 1px dashed
    color-mix(in srgb, var(--color-blueprint-line) 55%, transparent);
}

.scales {
  display: flex;
  flex-wrap: wrap;
  gap: 0 2rem;
}
.row {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}
.item small {
  font-size: 0.5625rem;
  line-height: 1.3;
  text-align: center;
  color: var(--color-blueprint-mark);
}
.square {
  display: block;
  background-color: var(--color-blueprint-line);
}
.corner {
  display: block;
  width: 1.75rem;
  height: 1.75rem;
  box-sizing: border-box;
  border: 2px solid var(--color-blueprint-mark);
}
.row.type {
  gap: 0.75rem;
  align-items: flex-end;
}
.glyph {
  line-height: 1;
  color: var(--color-foreground);
}
</style>
