const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/movie/add_movie", movieController.addMovie);
router.get("/movie/remove_movie", movieController.deleteMovie);

module.exports = router;
