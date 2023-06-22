// <<--------- EXPRESS ---------->>
const express = require("express");
const app = express();
const cors = require("cors");
app.listen(process.env.PORT || 8080);
app.use(cors());
console.log("App started");

// <<--------- BASIC ---------->>
app.get("/", (req, res) => {
  res.json({ error: "Available endpoints: /quote and /fact (GET)" });
});

// <<--------- QUOTES ---------->>
app.get("/quote", (req, res) => {
  const quotes = require("./qoutes.json");
  const quotes_length = quotes.length;
  const randomizer = Math.floor(Math.random() * quotes_length);
  const random_quote = quotes[randomizer];
  res.json({ quote: random_quote, Warning: "Quote may be incorrect" });
});

// <<--------- FACTS ---------->>
app.get("/fact", (req, res) => {
  const facts = require("./facts.json");
  const facts_length = facts.length;
  const randomizer = Math.floor(Math.random() * facts_length);
  const random_fact = facts[randomizer];
  res.json({ fact: random_fact, Warning: "Facts may be incorrect" });
});
