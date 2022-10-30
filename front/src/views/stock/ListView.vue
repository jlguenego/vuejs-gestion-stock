<script lang="ts" setup>
import { useArticleStore } from "@/stores/ArticleStore";
import type { Article } from "@gestionstock/common";
import { computed, reactive } from "vue";

const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);

const selectedArticles = reactive(new Set<Article>());
const toggle = (a: Article) => {
  if (selectedArticles.has(a)) {
    selectedArticles.delete(a);
    return;
  }
  selectedArticles.add(a);
};

const refresh = async () => {
  await articleStore.refresh();
};

const remove = async () => {
  await articleStore.remove(selectedArticles);
  selectedArticles.clear();
};
</script>

<template>
  <main>
    <h1>List view</h1>
    <div class="content">
      <nav>
        <button @click="refresh">Rafraîchir</button>
        <button @click="$router.push($route.path + '/create')">Ajouter</button>
        <button :hidden="selectedArticles.size === 0" @click="remove">
          Supprimer
        </button>
      </nav>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="a in articles"
            :key="a.id"
            :class="{ selected: selectedArticles.has(a) }"
            @click="toggle(a)"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price">{{ a.price }} €</td>
            <td class="qty">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
div.content {
  display: flex;
  flex-flow: column;
  gap: 0.5em;
}

nav {
  display: flex;
  gap: 0.3em;
}
</style>
