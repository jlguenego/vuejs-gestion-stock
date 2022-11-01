import type { Article, NewArticle } from "@gestionstock/common";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useArticleStore } from "./ArticleStore";
import axios from "axios";

const url = "/api/articles";

export const useHttpArticleStore = defineStore("http-article", () => {
  const articleStore = useArticleStore();

  const refresh = async () => {
    console.log("http refresh");
    const response = await fetch(url);
    console.log("response: ", response);
    const json = await response.json();
    articleStore.articles = json;
  };

  const add = async (newArticle: NewArticle) => {
    await axios.post(url, newArticle);
  };

  const remove = async (selectedArticles: Set<Article>) => {
    const ids = [...selectedArticles].map((a) => a.id);
    await axios.delete(url, {
      data: ids,
    });
  };

  return {
    ...articleStore,
    articles: computed(() => articleStore.articles),
    refresh,
    add,
    remove,
  };
});
