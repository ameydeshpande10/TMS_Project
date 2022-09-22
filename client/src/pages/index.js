import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movie_name, setMovie_name] = useState("");
  useEffect(() => {
    async function GetMovies(movieName) {
      try {
        await axios
          .get(`localhost:3001/movie/get-movie/${movieName}`)
          .then((res) => {});
      } catch (error) {
        console.log(error);
      }
    }

    GetMovies();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1>Home</h1>
    </div>
  );
};

export default Home;
