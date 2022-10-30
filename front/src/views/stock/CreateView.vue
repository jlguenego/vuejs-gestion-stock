<script lang="ts" setup>
import { useArticleStore } from "@/stores/ArticleStore";
import type { NewArticle } from "@gestionstock/common";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const articleStore = useArticleStore();

const newArticle = ref<NewArticle>({ name: "Truc", price: 0.01, qty: 1 });

const submit = async () => {
  await articleStore.add(newArticle.value);
  await router.push(route.matched[0].path);
};
</script>

<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form @submit.prevent="submit">
      <label>
        <div>Nom</div>
        <input type="text" v-model="newArticle.name" v-focus="'selectall'" />
      </label>
      <label>
        <div>Prix</div>
        <input type="number" v-model="newArticle.price" step="0.01" />
      </label>
      <label>
        <div>Quantité</div>
        <input type="qty" v-model="newArticle.qty" />
      </label>
      <button class="primary">Ajouter</button>
    </form>
    {{ newArticle }}
  </main>
</template>
