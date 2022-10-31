<script lang="ts" setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>{{ props.message }}</div>
</template>

<style scoped>
div {
  height: 2em;
  display: flex;
  align-items: center;
  font-weight: bold;
}
</style>
