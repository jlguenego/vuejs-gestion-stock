<script lang="ts" setup>
import type { NewArticle } from "@gestionstock/common";
import { ref } from "vue";

const newArticle = ref<NewArticle>({ name: "Truc", price: 0.01, qty: 1 });
</script>

<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form>
      <label>
        <div>Nom</div>
        <input type="text" v-model="newArticle.name" />
      </label>
      <label>
        <div>Prix</div>
        <input type="number" v-model="newArticle.price" />
      </label>
      <label>
        <div>Quantité</div>
        <input type="qty" v-model="newArticle.qty" />
      </label>
      <button
        class="primary"
        type="button"
        @click="$router.push($route.matched[0].path)"
      >
        Ajouter
      </button>
    </form>
    {{ newArticle }}
  </main>
</template>
