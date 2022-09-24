const mongoose = require("mongoose");

const screen = new mongoose.Schema({
  seats: {
    A: [
      { 1: { type: Boolean, default: false } },
      { 2: { type: Boolean, default: false } },
      { 3: { type: Boolean, default: false } },
      { 4: { type: Boolean, default: false } },
      { 5: { type: Boolean, default: false } },
      { 6: { type: Boolean, default: false } },
      { 7: { type: Boolean, default: false } },
      { 8: { type: Boolean, default: false } },
      { 9: { type: Boolean, default: false } },
      { 10: { type: Boolean, default: false } },
    ],
    B: [
      { 1: { type: Boolean, default: false } },
      { 2: { type: Boolean, default: false } },
      { 3: { type: Boolean, default: false } },
      { 4: { type: Boolean, default: false } },
      { 5: { type: Boolean, default: false } },
      { 6: { type: Boolean, default: false } },
      { 7: { type: Boolean, default: false } },
      { 8: { type: Boolean, default: false } },
      { 9: { type: Boolean, default: false } },
      { 10: { type: Boolean, default: false } },
    ],
    C: [
      { 1: { type: Boolean, default: false } },
      { 2: { type: Boolean, default: false } },
      { 3: { type: Boolean, default: false } },
      { 4: { type: Boolean, default: false } },
      { 5: { type: Boolean, default: false } },
      { 6: { type: Boolean, default: false } },
      { 7: { type: Boolean, default: false } },
      { 8: { type: Boolean, default: false } },
      { 9: { type: Boolean, default: false } },
      { 10: { type: Boolean, default: false } },
    ],
    D: [
      { 1: { type: Boolean, default: false } },
      { 2: { type: Boolean, default: false } },
      { 3: { type: Boolean, default: false } },
      { 4: { type: Boolean, default: false } },
      { 5: { type: Boolean, default: false } },
      { 6: { type: Boolean, default: false } },
      { 7: { type: Boolean, default: false } },
      { 8: { type: Boolean, default: false } },
      { 9: { type: Boolean, default: false } },
      { 10: { type: Boolean, default: false } },
    ],
    E: [
      { 1: { type: Boolean, default: false } },
      { 2: { type: Boolean, default: false } },
      { 3: { type: Boolean, default: false } },
      { 4: { type: Boolean, default: false } },
      { 5: { type: Boolean, default: false } },
      { 6: { type: Boolean, default: false } },
      { 7: { type: Boolean, default: false } },
      { 8: { type: Boolean, default: false } },
      { 9: { type: Boolean, default: false } },
      { 10: { type: Boolean, default: false } },
    ],
    F: [
      { 1: { type: Boolean, default: false } },
      { 2: { type: Boolean, default: false } },
      { 3: { type: Boolean, default: false } },
      { 4: { type: Boolean, default: false } },
      { 5: { type: Boolean, default: false } },
      { 6: { type: Boolean, default: false } },
      { 7: { type: Boolean, default: false } },
      { 8: { type: Boolean, default: false } },
      { 9: { type: Boolean, default: false } },
      { 10: { type: Boolean, default: false } },
    ],
  },
  price: Number,
});

module.exports = mongoose.model("screen", screen);
