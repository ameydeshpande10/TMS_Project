const express = require("express");
const app = express();
const db = require("./config/db");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

// for cross origin access
var cors = require("cors");
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.json({ Hello: "Hello! Welcome to Ticket Managament System!" });
});

//user routes
app.use(userRoutes);

//Connecting to MongoDB atlas
db.connect();

// Listening on port 3000
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
