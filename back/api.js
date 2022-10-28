const express = require("express");

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 200 },
  { id: "a2", name: "Pelle", price: 5, qty: 15 },
];

const app = express.Router();

app.get("/articles", (req, res) => {
  res.json(articles);
});

module.exports = { api: app };
