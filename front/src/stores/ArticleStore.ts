import {
  type Article,
  type NewArticle,
  generateId,
} from "@gestionstock/common";
import { defineStore } from "pinia";
import { ref } from "vue";

const ARTICLE_KEY = "articles";

const getArticles = (): Article[] => {
  const str = localStorage.getItem(ARTICLE_KEY);
  if (str === null) {
    return [
      { id: "a1", name: "Tournevis", price: 2.99, qty: 100 },
      { id: "a2", name: "Pelle", price: 5, qty: 34 },
    ];
  }
  return JSON.parse(str);
};

export const useArticleStore = defineStore("articles", () => {
  const articles = ref(getArticles());

  const save = () => {
    localStorage.setItem(ARTICLE_KEY, JSON.stringify(articles.value));
  };

  const add = async (newArticle: NewArticle) => {
    const article = { ...newArticle, id: generateId() };
    articles.value.push(article);
    save();
  };

  const remove = async (selectedArticles: Set<Article>) => {
    articles.value = articles.value.filter((a) => !selectedArticles.has(a));
    save();
  };

  const refresh = async () => {
    articles.value = getArticles();
  };

  return { articles, add, remove, refresh };
});
