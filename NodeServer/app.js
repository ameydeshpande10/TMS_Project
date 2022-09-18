const express = require("express");
const app = express();
const db = require("./config/db");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
//const multer = require("multer");

// for cross origin access
var cors = require("cors");
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//user routes
app.use(userRoutes);

//movie routes
app.use(movieRoutes);

//Connecting to MongoDB atlas
db.connect();

// Listening on port 3000
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
