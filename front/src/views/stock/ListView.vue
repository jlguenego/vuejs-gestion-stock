<script lang="ts" setup>
import type { Article } from "@gestionstock/common";
import { ref, type Ref } from "vue";
const articles: Ref<Article[]> = ref([
  { id: "a1", name: "Tournevis", price: 2.99, qty: 100 },
  { id: "a2", name: "Pelle", price: 5, qty: 34 },
]);

setTimeout(() => {
  articles.value.push({ id: "a3", name: "Pioche", price: 5.5, qty: 5 });
}, 2000);
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
