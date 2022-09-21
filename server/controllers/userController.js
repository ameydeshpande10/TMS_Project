// importing modules
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

let express = require("express");
let bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

require("dotenv").config();

// importing from files
const User = require("../model/user");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

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

// login user
exports.LogIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      res.cookie("email", email, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      jwt.sign(
        {
          data: email,
        },
        "secret",
        { expiresIn: "1h" }
      );
      if (!isMatch) {
        res.send({ message: "Invalid credentials" });
        //res.status(400).json({ error: "Invalid credentials" });
      } else if (userLogin.work === "Admin") {
        res.json({ message: "Admin Login successful", name: name });
        //res.status(201).json({ message: "Admin Login" });
      } else {
        var jsonContent = JSON.stringify(userLogin);
        var jsonContentParsed = JSON.parse(jsonContent);
        var name = jsonContentParsed["name"];

        res.json({ message: "Login successful", name: name });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};

// To get details
exports.GetDetails = async (req, res) => {
  try {
    var email = req.cookies.email;

    var user = await User.findOne({
      email: email,
    });
    var userJson = JSON.stringify(user);
    res.send(user);
  } catch (error) {
    res.send({ message: "error in getting user details" });
    //res.status(400).json({ error: "error in getting user details" });
  }
};

// logout
exports.LogOut = async (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.clearCookie("loggedIn");
  res.clearCookie("email");
  res.status(200).send("logout");
};

// get user name
exports.GetUserName = async (req, res) => {
  try {
    var email = req.cookies.email;
    var myUser = await User.findOne({
      email: email,
    });

    var jsonContent = JSON.stringify(myUser);
    var jsonContentParsed = JSON.parse(jsonContent);
    var name = jsonContentParsed["name"];
    res.end(name);
  } catch (error) {
    res.send({ message: error });
  }
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
exports.GetTickets = async (req, res) => {
  try {
    var email = req.cookies.email;
    var myUser = await User.findOne({
      email: email,
    });
    var userJson = JSON.stringify(myUser);

    res.send(myUser.tickets);
    //res.send(userJson.tickets);
  } catch (error) {
    res.send({ message: error });
  }
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

// update database add ticket
exports.UpdateTicket = async (req, res) => {
  try {
    var email = req.cookies.email;

    var user = await User.findOne({
      email: email,
    });
    var movie = {
      movie: req.body.tickets.movie,
      date: req.body.tickets.date,
      time_slot: req.body.tickets.time_slot,
    };

    //Object.assign(user, req.body);
    user.tickets.push(movie);

    user.save();

    //res.send(req.body.tickets.movie);
    res.send("ticket updated");
  } catch (error) {
    res.send({ message: error });
  }
};
