// importing modules
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
let express = require("express");
let bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// importing from files
const User = require("../model/user");
const authenticate = require("../middleware/authenticate");

//setup express app
let app = express();

// sign up user
exports.SignUp = async (req, res) => {
  const {
    name,
    address,
    email,
    contact_number,
    password,
    cpassword,
    date_of_birth,
  } = req.body;
  //check for fields validation
  if (
    !name ||
    !email ||
    !contact_number ||
    !password ||
    !cpassword ||
    !date_of_birth
  ) {
    return res.status(422).json({ error: "please fill all required fields" });
  }
  //if user is unique
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matching" });
    } else {
      //if not exists
      const user = new User({
        name,
        address,
        email,
        contact_number,
        password,
        cpassword,
        date_of_birth,
      });
      //calls hashing method before saving
      await user.save();
      res.status(201).json("user registered successfully");
    }
  } catch (err) {
    console.log(err.response);
  }
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
