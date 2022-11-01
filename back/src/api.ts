import { Article, generateId, NewArticle } from "@gestionstock/common";
import express from "express";
import { json } from "express";

let articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 200 },
  { id: "a2", name: "Pelle", price: 5, qty: 15 },
];

const app = express.Router();

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle: NewArticle = req.body;
  const article = { ...newArticle, id: generateId() };
  articles.push(article);
  res.status(201).json({ id: article.id });
});

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

export const api = app;
