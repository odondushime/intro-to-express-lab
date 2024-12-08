const express = require("express");
const app = express(); // This function initializes the Express application.

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

// Defining the home page
app.get("/", (req, res) => {
  res.send("Welcome to the Home page!");
});

// Defining a route for /greetings
app.get("/greetings/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello, ${username}!`);
});

// Defining rolling dice
app.get("/roll/:dice", (req, res) => {
  const dice = req.params.dice;
  res.send(`Rolling a ${dice}!`);
});

// Defining collectibles
app.get("/collectibles/:index", (req, res) => {
  const index = parseInt(req.params.index, 10); // Convert the index to an integer
  if (index >= 0 && index < collectibles.length) {
    const collectible = collectibles[index];
    res.send(
      `So, you want the shiny ball? For 5.95, it can be yours! Collectible: ${collectible.name}, Price: $${collectible.price.toFixed(2)}`
    );
  } else {
    res.status(404).send("This item is not yet in stock. Check back soon!");
  }
});

// /shoes route
app.get("/shoes", (req, res) => {
  const { minPrice, maxPrice, type } = req.query;

  let filteredShoes = shoes;

  // Filter by minimum price
  if (minPrice) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.price >= parseFloat(minPrice)
    );
  }

  // Filter by maximum price
  if (maxPrice) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.price <= parseFloat(maxPrice)
    );
  }

  // Filter by type
  if (type) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.type.toLowerCase() === type.toLowerCase()
    );
  }

  // Respond with the filtered list
  res.json(filteredShoes);
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
