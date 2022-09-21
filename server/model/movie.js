const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  movie_name: String,
  release_date: { type: Date },
  shows: [
    {
      time: String,
    },
  ],
  actors: [
    {
      actor_name: String,
    },
  ],
  director: String,
  genre: String,
  movie_length: String,
  certification: String,
  poster_img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("movie", movie);
