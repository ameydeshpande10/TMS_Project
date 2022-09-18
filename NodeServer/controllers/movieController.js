const Movie = require("../model/movie");

// Add movie
exports.addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    console.log(movie);
    res.status(200).send({
      message: "Movie Added Sucessfully!",
    });
    console.log("Movie Added!");
  } catch (error) {
    res.send({ message: error });
  }
  console.log(req.body);
  res.end();
};

// Delete movie by movie name
exports.deleteMovie = async (req, res) => {
  try {
    var name = req.body.movie_name;
    var movie = await Movie.findOne({
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
