import "./App.css";
import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Axios setup
import axios from "axios";
axios.defaults.withCredentials = true;

// Reducer
import { reducer, initialstate } from "./reducer/useReducer";

// Homepage
import Home from "./pages/index";

// Navbar
import Navbar from "./components/Navbar/navbar";

// User-path
import Signup from "./pages/signup";
import Login from "./pages/login";
import { Logout } from "./pages/logout";
//User-path-show-details
import { UserDetails } from "./pages/userDetails";
import { UserTickets } from "./pages/userTickets";
//User-path-password-reset
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
//User-path-book-ticket
import { TicketBooking } from "./pages/Ticket-Booking/TicketBooking";
import { TicketPayment } from "./pages/Ticket-Booking/TicketPayment";

// Admin-path
import AddMovie from "./pages/Admin-path/AddMovie";
import { DeleteMovie } from "./pages/Admin-path/DeleteMovie";

// Other
import { Aboutus } from "./pages/aboutus";

// Mvoie-path
import MovieDetails from "./pages/Movie/MovieDetails";
import { UpcomingMovies } from "./pages/upcomingMovies";

//context api
export const UserContext = createContext();

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
            <Route path="/book-ticket/:id" element={<TicketBooking />} />
            <Route path="/ticket-payment/:id" element={<TicketPayment />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
