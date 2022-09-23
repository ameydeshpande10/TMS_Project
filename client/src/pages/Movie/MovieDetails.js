import React from "react";
import { useParams } from "react-router-dom";
import MovieDetailsIndividual from "./MovieDetailsIndividual";

const MovieDetails = () => {
  const params = useParams();
  const movieDetails = MovieDetailsIndividual(params);
  console.log(movieDetails);
  try {
    const name = movieDetails.name;
    console.log(name);
    const actors_name = movieDetails.actors;
    const certification = movieDetails.certification;
    const director = movieDetails.director;
    const genre = movieDetails.genre;
    const movie_length = movieDetails.movie_length;
    const release_date = movieDetails.release_date.split("T")[0];
    const start_date = movieDetails.start_date.split("T")[0];
    const end_date = movieDetails.end_date.split("T")[0];
    const first_show = movieDetails.first_show;
    const second_show = movieDetails.second_show;
    const image = movieDetails.image;
    // var base64 = btoa(
    //     new Uint8Array(movieDetails.image.data.data)
    //         .reduce((data, byte) => data + String.fromCharCode(byte), '')
    // );
    return (
      <>
        <div className="conatiner p-2  d-flex justify-content-center align-items-center">
          {/*mt-5 p-2 */}

          <div className="conatiner  " style={{ width: "65vw" }}>
            <div className="card ">
              <div className="row">
                <div className="col">
                  <img
                    src={image}
                    className="card-img-top p-2"
                    alt="..."
                    style={{ height: "550px", width: "425px" }}
                  />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ "text-transform": "capitalize" }}
                    >
                      <label className="me-2 fw-bold">Title:</label>
                      <h2>{name}</h2>
                    </h5>
                    <br></br>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Actors:</label>
                      {actors_name}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Director:</label>
                      {director}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Genre:</label>
                      {genre}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Certification:</label>
                      {certification}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Movie length:</label>
                      {movie_length}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Release Date:</label>
                      {release_date}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">
                        Movie Availabe Date:
                      </label>
                      {start_date}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Movie End Date:</label>
                      {end_date}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">First show:</label>
                      {first_show}
                    </p>
                    <p className="card-text">
                      <label className="me-2 fw-bold">Second show:</label>
                      {second_show}
                    </p>
                    <p className="card-text">
                      <label class="me-2 fw-bold">
                        Released on: {release_date}
                      </label>
                    </p>
                    <button className="btn btn-primary">Book Tickets</button>
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
