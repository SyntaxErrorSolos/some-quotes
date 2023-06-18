// <<--------- EXPRESS ---------->>
const express = require("express");
const app = express();
const cors = require("cors");
app.listen(5000);
app.use(cors());

// <<--------- BASIC ---------->>
app.get("/", (req, res) => {
  res.json({ error: "Send a GET request to /quote" });
});

// <<--------- QUOTES ---------->>
app.get("/quote", (req, res) => {
  const quotes = require("./qoutes.json");
  const quotes_length = quotes.length;
  const randomizer = Math.floor(Math.random() * quotes_length);
  const random_quote = quotes[randomizer];
  res.json({ quote: random_quote });
});


