import {
  type Article,
  type NewArticle,
  generateId,
} from "@gestionstock/common";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useArticleStore = defineStore("articles", () => {
  const articles = ref([
    { id: "a1", name: "Tournevis", price: 2.99, qty: 100 },
    { id: "a2", name: "Pelle", price: 5, qty: 34 },
  ] as Article[]);

  const add = async (newArticle: NewArticle) => {
    const article = { ...newArticle, id: generateId() };
    articles.value.push(article);
  };

  const remove = async (selectedArticles: Set<Article>) => {
    articles.value = articles.value.filter((a) => !selectedArticles.has(a));
  };

  return { articles, add, remove };
});
