const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  address: String,
  password: String,
  email: String,
  contact_number: Number,
  date_of_birth: { type: String, default: Date },
});

module.exports = mongoose.model("user", User);
