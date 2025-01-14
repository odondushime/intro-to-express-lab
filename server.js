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
    res.json(collectibles[index]);
  } else {
    res.status(404).send("Collectible not found");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
