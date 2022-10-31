import { Article } from "@gestionstock/common";
import express from "express";
import cors from "cors";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 200 },
  { id: "a2", name: "Pelle", price: 5, qty: 15 },
];

const app = express.Router();

app.use(cors());

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
