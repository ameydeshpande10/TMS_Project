import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie/Movie";

export const Home = () => {
  return (
    <div>
      <Movie />
    </div>
  );
};

export default Home;
