const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/movie/add-movie", movieController.AddMovie);
router.post("/movieregister", movieController.AddMovieS);
router.get("/movie/remove-movie", movieController.DeleteMovie);
router.get("/movie/get-movie/:movie_name", movieController.GetMovie);
router.get("/movies", movieController.Movies);
router.post("/movie/delete-movie", movieController.DeleteMovie);
router.get("/moviedetails/:id", movieController.GetMovieDetails);
module.exports = router;
