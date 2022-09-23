import "./App.css";
import React, { createContext, useReducer } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import axios from "axios";

import Home from "./pages/index";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { UserDetails } from "./pages/userDetails";
import { UserTickets } from "./pages/userTickets";
import { Aboutus } from "./pages/aboutus";
import { UpcomingMovies } from "./pages/upcomingMovies";
import { Logout } from "./pages/logout";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
//import { AddMovie } from "./pages/Admin-path/AddMovieAmey";
import AddMovie from "./pages/Admin-path/AddMovie";
import { reducer, initialstate } from "./reducer/useReducer";
import MovieDetails from "./pages/Movie/MovieDetails";
import { DeleteMovie } from "./pages/Admin-path/DeleteMovie";

//context api
export const UserContext = createContext();

axios.defaults.withCredentials = true;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Movies" exact element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/user_details" element={<UserDetails />} />
            <Route path="/user_tickets" element={<UserTickets />} />
            <Route path="/About-us" element={<Aboutus />} />
            <Route path="/Upcoming_Movies" element={<UpcomingMovies />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/delete-movie" element={<DeleteMovie />} />
            <Route
              path="/reset_password/:id/:token"
              element={<ResetPassword />}
            />
            <Route path="/reset_password/" element={<ResetPassword />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
