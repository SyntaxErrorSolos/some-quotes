// <<--------- EXPRESS ---------->>
const express = require("express");
const app = express();
const cors = require("cors");
app.listen(process.env.PORT || 8080)
app.use(cors());
console.log("App started")

// <<--------- BASIC ---------->>
app.get("/", (req, res) => {
  res.json({ error: "Send a GET request to /quote" });
});

// <<--------- QUOTES ---------->>
app.get("/quote", (req, res) => {
  const quotes = require("./src/qoutes.json");
  const quotes_length = quotes.length;
  const randomizer = Math.floor(Math.random() * quotes_length);
  const random_quote = quotes[randomizer];
  res.json({ quote: random_quote });
});


