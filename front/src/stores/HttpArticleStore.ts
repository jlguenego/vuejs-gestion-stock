import { defineStore } from "pinia";
import { computed } from "vue";
import { useArticleStore } from "./ArticleStore";

export const useHttpArticleStore = defineStore("http-article", () => {
  const articleStore = useArticleStore();

  const refresh = async () => {
    console.log("http refresh");
    await articleStore.refresh();
  };

  return {
    ...articleStore,
    articles: computed(() => articleStore.articles),
    refresh,
  };
});
