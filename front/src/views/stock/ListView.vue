<script lang="ts" setup>
import { useArticleStore } from "@/stores/ArticleStore";
import { sleep, type Article } from "@gestionstock/common";
import { computed, reactive, ref } from "vue";

const isRefreshing = ref(false);
const isRemoving = ref(false);

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
  try {
    isRefreshing.value = true;
    await sleep(1000);
    await articleStore.refresh();
  } catch (err) {
    console.log("err: ", err);
  } finally {
    isRefreshing.value = false;
  }
};

const remove = async () => {
  try {
    isRemoving.value = true;
    await sleep(1000);
    await articleStore.remove(selectedArticles);
    selectedArticles.clear();
  } catch (err) {
    console.log("err: ", err);
  } finally {
    isRemoving.value = false;
  }
};
</script>

<template>
  <main>
    <h1>List view</h1>
    <div class="content">
      <nav>
        <button @click="refresh" title="Rafraîchir">
          <fa-icon
            icon="fa-solid fa-rotate-right"
            :spin="isRefreshing"
          ></fa-icon>
        </button>
        <button @click="$router.push($route.path + '/create')" title="Ajouter">
          <fa-icon icon="fa-solid fa-plus"></fa-icon>
        </button>
        <button
          :hidden="selectedArticles.size === 0"
          @click="remove"
          title="Supprimer"
        >
          <fa-icon
            :icon="
              'fa-solid ' + (isRemoving ? 'fa-circle-notch' : 'fa-trash-alt')
            "
            :spin="isRemoving"
          ></fa-icon>
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
