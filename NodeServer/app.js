const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/db");
require("dotenv").config();

const User = require("./model/user");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sign_up", async (req, res) => {
  try {
    const myUser = new User(req.body);
    await myUser.save();
    res.send(myUser);
  } catch (error) {
    res.send({ message: error });
  }
  console.log(req.body);
});

app.post("/find_user", async (req, res) => {
  try {
    var email = req.body.email;
    var myUser = await User.findOne({
      email: email,
    });
  } catch (error) {
    res.send({ message: error });
  }
  console.log(myUser);
  res.send(myUser);
  res.end();
});

app.post("/login", async (req, res) => {
  try {
    var email = req.body.email;
    var password = req.body.password;
    var myUser = await User.findOne({
      email: email,
    });
    if (myUser.password == password) {
      console.log("login sucessfull");
      console.log(myUser);
      res.send(myUser);
    } else {
      res.send("password is not correct");
    }
  } catch (error) {
    res.send({ message: error });
  }

  res.end();
});

app.post("/delete_user", async (req, res) => {
  try {
    var email = req.body.email;
    var myUser = await User.findOne({
      email: email,
    })
      .remove()
      .exec();
  } catch (error) {
    res.send({ message: error });
  }
  console.log(myUser);
  res.end();
});

//Connecting to MongoDB atlas
const URI = process.env.URI;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => console.log(error));

//db.connect;

// Listening on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
