import "./Movie.css";
import React from "react";
import MovieCard from "./MovieCard";

const Movie = () => {
  return (
    <div className="container  movie_container">
      <div className="movie_cards">
        <MovieCard data={"Movie Details"} />
      </div>
    </div>
  );
};

export default Movie;
