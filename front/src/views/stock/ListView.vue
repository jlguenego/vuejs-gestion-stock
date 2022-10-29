<script lang="ts" setup>
import { useArticleStore } from "@/stores/ArticleStore";

const articleStore = useArticleStore();
const articles = articleStore.articles;
</script>

<template>
  <main>
    <h1>List view</h1>
    <div class="content">
      <nav>
        <button>Rafraîchir</button>
        <button @click="$router.push($route.path + '/create')">Ajouter</button>
        <button>Supprimer</button>
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
          <tr v-for="a in articles" :key="a.id">
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
