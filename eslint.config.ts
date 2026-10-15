import pluginVue from "eslint-plugin-vue";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default defineConfigWithVueTs(
  { ignores: ["dist/**", "node_modules/**"] },
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  {
    rules: {
      // v-html only renders our own content/*.json
      "vue/no-v-html": "off",
      // Single-page site: components are named after their section
      "vue/multi-word-component-names": "off",
      // Optional typed props are allowed to be undefined
      "vue/require-default-prop": "off",
    },
  },
  skipFormatting,
);
