import type { Article } from "@gestionstock/common";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useArticleStore = defineStore("articles", () => {
  const articles = ref([
    { id: "a1", name: "Tournevis", price: 2.99, qty: 100 },
    { id: "a2", name: "Pelle", price: 5, qty: 34 },
  ] as Article[]);

  return { articles };
});

setTimeout(() => {
  useArticleStore().articles.push({
    id: "a3",
    name: "Pioche",
    price: 5.5,
    qty: 5,
  });
}, 2000);
