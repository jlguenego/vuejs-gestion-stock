<script lang="ts" setup>
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import BodyLayout from "./components/layout/BodyLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
</script>

<template>
  <div>
    <HeaderLayout />
    <BodyLayout />
    <FooterLayout />
  </div>
</template>

<style scoped>
div {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
</style>
