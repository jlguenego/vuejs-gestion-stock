<script lang="ts" setup>
const props = defineProps({
  title: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <Teleport to="head">
    <title>Gestion Stock: {{ props.title }}</title>
  </Teleport>
</template>
