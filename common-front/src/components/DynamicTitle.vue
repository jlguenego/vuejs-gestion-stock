<script lang="ts" setup>
import { inject } from "vue";
import { DEFAULT_TITLE_PREFIX_KEY } from "../keys";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
});

const defaultTitlePrefix = inject(DEFAULT_TITLE_PREFIX_KEY, "Nice app");
</script>

<template>
  <Teleport to="head">
    <title>{{ defaultTitlePrefix }}: {{ props.title }}</title>
  </Teleport>
</template>
