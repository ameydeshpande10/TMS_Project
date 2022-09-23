const express = require("express");
const movie = require("../model/movie");
const multer = require("multer");
const fs = require("fs");
var path = require("path");
const app = express();
app.set("view engine", "ejs");

// storage
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("testImage");

// Add movie
exports.AddMovie = async (req, res) => {
  console.log("hit add move ap");
  try {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(req.body);
        const currentMovie = new movie({
          name: req.body.name,
          actors: req.body.actors,
          director: req.body.director,
          certification: req.body.certification,
          genre: req.body.genre,
          movie_length: req.body.movie_length,
          release_date: req.body.release_date,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
          first_show: req.body.first_show,
          second_show: req.body.second_show,
          image: {
            data: req.file.filename,
            contentType: "image/png",
          },
        });
        console.log("movie created");
        if (currentMovie) {
          console.log("movie created");
        }
        currentMovie.save();
        res.send({ message: "Movie added" });
      }
    });
  } catch (error) {
    res.send({ message: error });
  }
};

//router.post("/movieregister",
exports.AddMovieS = async (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      console.log(error);
    } else {
      try {
        const {
          name,
          actors,
          director,
          certification,
          genre,
          length,
          release_date,
          start_date,
          end_date,
          first_show,
          second_show,
          image,
        } = req.body;
        const newMovie = new movie({
          name,
          actors,
          director,
          certification,
          genre,
          length,
          release_date,
          start_date,
          end_date,
          first_show,
          second_show,
          image,
          // : {
          //     data: fs.readFileSync("uploads/" + req.file.filename),
          //     contentType: 'image/png'
          // }
        });
        //console.log(newMovie);
        console.log("movie added successfully");
        newMovie.save();
        res.status(200).send({ message: "Movie added sucessfully" });
      } catch (error) {
        console.error(error);
      }
    }
  });
};

// get movie by naem
exports.GetMovie = async (req, res) => {
  try {
    const { movie_name } = req.params;
    //const movie_name = req.body.movie_name;
    console.log(movie_name);
    var currentMovie = await movie.findOne({
      name: movie_name,
    });
    console.log(currentMovie);
    res.send(currentMovie);
  } catch (error) {
    res.send({ message: error });
  }
};

// Delete movie by movie name
exports.DeleteMovie = async (req, res) => {
  try {
    var name = req.body.movie_name;
    var movie = await movie
      .findOne({
        name: name,
      })
      .remove()
      .exec();
    res.status(200).send({
      message: "Movie removed sucessfully!",
    });
    console.log("Movie removed!");
  } catch (error) {
    res.send({ message: error });
  }
  console.log(movie);
  res.end();
};

// router.get("/movies",
exports.Movies = async (req, res) => {
  try {
    const movies = await movie.find();
    res.status(200).send({ data: movies });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

//router.get("/moviedetails/:id",
exports.GetMovieDetails = async (req, res) => {
  try {
    const movies = await movie.findById(req.params.id);
    res.status(200).send({ data: movies });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

//router.delete("/delmovie/:id",
exports.DeleteMovie = async (req, res) => {
  try {
    const movies = await movie
      .findOne({ name: req.body.movie_name })
      .remove()
      .exec();
    res.status(200).send({ message: "deleted", name: movies.name });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
