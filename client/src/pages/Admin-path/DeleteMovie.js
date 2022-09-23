import React, { useState } from "react";
import axios from "axios";

export const DeleteMovie = () => {
  const [movie_name, setMovie_name] = useState("");
  const [message, setMessage] = useState("");
  async function deleteMovie(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/movie/delete-movie", {
          movie_name,
        })
        .then((res) => {
          console.log(res.data.message);
          setMessage(res.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "10% auto",
        boxShadow: "0px 0px 10px black",
        width: "30vw",
        padding: "35px",
      }}
      className="container-fluid d-flex justify-content-center"
    >
      <form onSubmit={deleteMovie}>
        <h5>Enter your Movie name to delete the movie </h5>
        <br></br>
        <br></br>
        <div className="mb-3">
          <label className="form-label">Movie Name</label>
          <input
            style={{
              backgroundColor: "whitesmoke",
              //width: "35vw",
              //padding: "20px",
              color: "grey",
            }}
            value={movie_name}
            onChange={(e) => setMovie_name(e.target.value)}
            type="text"
            className="form-control "
          />
        </div>

        <button
          style={{
            width: "25vw",
            padding: "10px",
          }}
          type="submit"
          className="btn btn-primary"
        >
          Delete Movie
        </button>

        <div className="alert " role="alert">
          {message && <div>{message}</div>}
        </div>
      </form>
    </div>
  );
};
