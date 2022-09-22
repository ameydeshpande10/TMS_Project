const movie = require("../model/movie");
const multer = require("multer");
const fs = require("fs");
var path = require("path");

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
