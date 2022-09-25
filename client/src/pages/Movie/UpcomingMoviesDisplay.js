import "./Movie.css";
import React from "react";
import { UpcomingMovies } from "./UpcomingMovies";

export const UpcomingMoviesDisplay = () => {
  return (
    <div className="container mt-5 movie_container">
      <div className="movie_cards">
        <UpcomingMovies data={"Movie Details"} />
      </div>
    </div>
  );
};
