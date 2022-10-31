<script lang="ts" setup>
import { ARTICLE_STORE_KEY } from "@/injections";
import type { ArticleStore } from "@/interfaces/ArticleStore";
import { sleep, type NewArticle } from "@gestionstock/common";
import { inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const isAdding = ref(false);

const router = useRouter();
const route = useRoute();

const articleStore = inject(ARTICLE_STORE_KEY) as ArticleStore;

const newArticle = ref<NewArticle>({ name: "Truc", price: 0.01, qty: 1 });

const submit = async () => {
  try {
    isAdding.value = true;
    await sleep(2000);
    await articleStore.add(newArticle.value);
    await router.push(route.matched[0].path);
  } catch (err) {
    console.log("err: ", err);
  } finally {
    isAdding.value = false;
  }
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
      <button class="primary">
        <fa-icon
          :icon="'fa-solid ' + (isAdding ? 'fa-circle-notch' : 'fa-plus')"
          :spin="isAdding"
        ></fa-icon>
        <span>Ajouter</span>
      </button>
    </form>
    {{ newArticle }}
  </main>
</template>
