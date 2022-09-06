const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const User = require("./model/user");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("First request!!!!");
});

app.get("/users", (req, res) => {
  let users = ["amey", "jetha", "nezuko"];
  res.send({ users: users });
});

app.post("/create_user", async (req, res) => {
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
});

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("mongodb connected");
});

app.listen(3000, () => {
  console.log("Listening to 3000.");
});
