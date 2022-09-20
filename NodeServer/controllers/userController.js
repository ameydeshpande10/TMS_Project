const User = require("../model/user");

let express = require("express");
let cookieParser = require("cookie-parser");
const { json } = require("body-parser");
//setup express app
let app = express();

app.use(cookieParser());
// sign up user
exports.sign_up = async (req, res) => {
  try {
    const myUser = new User(req.body);
    await myUser.save();
    console.log(myUser);
    res.status(200).send({
      message: "Sucessfull signup!",
    });
    console.log("user created!");
  } catch (error) {
    res.send({ message: error });
  }
  console.log(req.body);
  res.end();
};

// to find user by email (pk)
exports.find_user = async (req, res) => {
  try {
    var email = req.body.email;
    var myUser = await User.findOne({
      email: email,
    });
    console.log(myUser);
    const jsonContent = JSON.stringify(myUser);
    res.end(jsonContent);
  } catch (error) {
    res.send({ message: error });
  }
};

// for login
exports.login = async (req, res) => {
  try {
    var email = req.body.email;
    var password = req.body.password;
    var myUser = await User.findOne({
      email: email,
    });
    if (myUser.password == password) {
      console.log("login sucessfull");
      //console.log(myUser);
      console.log(JSON.stringify(myUser));
      const userJson = JSON.stringify(myUser);

      res.cookie("user", userJson, {
        httpOnly: true,
      });

      //console.log(req.cookies.jwt);
      res.status(200).send({
        message: "Sucessfull login!",
      });
    } else {
      res.status(200).send({
        message: "password is not correct",
      });
    }
  } catch (error) {
    res.send({ message: error });
  }

  res.end();
};

// to delete user
exports.delete_user = async (req, res) => {
  try {
    var email = req.body.email;
    var myUser = await User.findOne({
      email: email,
    })
      .remove()
      .exec();
    res.send("user deleted");
  } catch (error) {
    res.send({ message: error });
  }
  console.log(myUser);
  res.end();
};

// To get tickets
exports.get_tickets = async (req, res) => {
  try {
    var email = req.body.email;
    var myUser = await User.findOne({
      email: email,
    });
    res.send(myUser.tickets);
  } catch (error) {
    res.send({ message: error });
  }
  console.log(myUser);
  res.end();
};

// To get details
exports.get_details = async (req, res) => {
  try {
    var email = req.body.email;
    console.log(email);
    var myUser = await User.findOne({
      email: email,
    });
    console.log(myUser);
    const jsonContent = JSON.stringify(myUser);
    res.end(jsonContent);
  } catch (error) {
    res.send({ message: error });
  }
  res.end();
};

//reset password
exports.reset_password = async (req, res) => {
  try {
    var email = req.body.email;
    var myUser = await User.findOne({
      email: email,
    });
    if (!myUser) {
      res.status(200).send({
        message: "Password incorrect!",
      });
    } else {
      res.status(200).send({
        message: "Email to reset password send.",
      });
    }
    console.log(myUser);
  } catch (error) {
    res.send({ message: error });
  }
  res.end();
};
