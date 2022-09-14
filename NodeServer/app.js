const express = require("express");
const app = express();
const db = require("./config/db");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello! Welcome to Ticket Managament System!");
});

//user routes
app.use(userRoutes);

//Connecting to MongoDB atlas
db.connect();

// Listening on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
