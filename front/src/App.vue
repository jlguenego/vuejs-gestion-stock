<script lang="ts" setup>
import { provide } from "vue";
import BodyLayout from "./components/layout/BodyLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import { ARTICLE_STORE_KEY } from "./injections";
import { useHttpArticleStore } from "./stores/HttpArticleStore";

provide(ARTICLE_STORE_KEY, useHttpArticleStore());
</script>

<template>
  <div>
    <HeaderLayout />
    <BodyLayout>
      <RouterView></RouterView>
    </BodyLayout>
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
