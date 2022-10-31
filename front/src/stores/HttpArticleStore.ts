import { defineStore } from "pinia";
import { computed } from "vue";
import { useArticleStore } from "./ArticleStore";

const url = "http://localhost:3000/api/articles";

export const useHttpArticleStore = defineStore("http-article", () => {
  const articleStore = useArticleStore();

  const refresh = async () => {
    console.log("http refresh");
    const response = await fetch(url);
    console.log("response: ", response);
    const json = await response.json();
    articleStore.articles = json;
  };

  return {
    ...articleStore,
    articles: computed(() => articleStore.articles),
    refresh,
  };
});
