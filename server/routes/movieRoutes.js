const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/movie/add-movie", movieController.AddMovie);
router.get("/movie/remove-movie", movieController.DeleteMovie);
router.get("/movie/get-movie/:movie_name", movieController.GetMovie);

module.exports = router;
