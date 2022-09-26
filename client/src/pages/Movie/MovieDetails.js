import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams, NavLink } from "react-router-dom";
import MovieDetailsIndividual from "./MovieDetailsIndividual";

export const MovieDetails = () => {
  const params = useParams();
  const id = useParams();
  const movieDetails = MovieDetailsIndividual(params);
  var adminCheck = localStorage.getItem("Admin");

  const [hasLoaded, setHasLoaded] = useState(false);

  try {
    const name = movieDetails.name;
    const actors_name = movieDetails.actors;
    const certification = movieDetails.certification;
    const director = movieDetails.director;
    const genre = movieDetails.genre;
    const movie_length = movieDetails.movie_length;
    const release_date = movieDetails.release_date; //.split("T")[0]
    const start_date = movieDetails.start_date; //.split("T")[0]
    const end_date = movieDetails.end_date; //.split("T")[0]
    const first_show = movieDetails.first_show;
    const second_show = movieDetails.second_show;
    const image = movieDetails.image;

    const RenderBookTicketButton = () => {
      let date = new Date();
      let releaseDate = new Date(release_date);

      if (adminCheck === null && releaseDate < date) {
        if (Cookies.get("loggedIn") === "true") {
          return (
            <button className="btn ">
              <NavLink to={`/book-ticket/${id.id}`}>Book Tickets</NavLink>
            </button>
          );
        }
      } else if (adminCheck === "Admin") {
        return (
          <button className="btn ">
            <NavLink to={`/addshows/${id.id}`}>Add Shows</NavLink>
          </button>
        );
      }
    };

    return (
      <>
        <div
          key={name}
          className="conatiner p-1  d-flex justify-content-center align-items-center"
        >
          {/*mt-5 p-2 */}

          <div className="conatiner  " style={{ width: "65vw" }}>
            <div className="card ">
              <div className="row">
                <div className="col">
                  <img
                    src={image}
                    className="card-img-top p-2 card_image "
                    alt="..."
                  />
                </div>
                <div className="col">
                  <div className="card-body h-50">
                    <h5
                      className="card-title"
                      style={{ textTransform: "capitalize" }}
                    >
                      <label className="me-2 fw-bold">Title: </label>
                      <span>
                        <h2>{name}</h2>
                      </span>
                    </h5>
                    <br></br>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Actors: </label>
                      {actors_name}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Director: </label>
                      {director}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Genre: </label>
                      {genre}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Certification: </label>
                      {certification}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Movie length: </label>
                      {movie_length}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Release Date: </label>
                      <span>{release_date}</span>
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">
                        Movie Availabe Date:
                      </label>
                      {start_date}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Movie End Date: </label>
                      {end_date}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">First show: </label>
                      {first_show}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Second show: </label>
                      {second_show}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">
                        Released on: {release_date}
                      </label>
                    </p>
                    <RenderBookTicketButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (e) {
    console.log(e);
  }
};

export default MovieDetails;
//<div className="jumbotron mt-5 p-2 d-flex justify-content-center align-items-center">
