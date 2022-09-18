const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  address: String,
  password: String,
  email: String,
  contact_number: Number,
  date_of_birth: { type: String, default: Date },
  age: {
    type: Number,
    default: function () {
      return getAge(this.date_of_birth);
    },
  },
  user_type: { type: String, default: "user" },
  tickets: [
    {
      movie: String,
      date: { type: String, default: Date },
      time_slot: String,
    },
  ],
});

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
module.exports = mongoose.model("user", User);
