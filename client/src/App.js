import "./App.css";
import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

// Reducer
import { reducer, initialstate } from "./reducer/useReducer";

// Homepage
import { Home } from "./pages/index";

// Navbar
import { Navbar } from "./components/Navbar/Navbar";

// User-path
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
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
import { BookMySeats } from "./pages/Ticket-Booking/BookMySeats";

// Admin-path
import { AddMovie } from "./pages/Admin-path/AddMovie";
import { DeleteMovie } from "./pages/Admin-path/DeleteMovie";
import { AddShows } from "./pages/Admin-path/AddShows";

// Other
import { Aboutus } from "./pages/aboutus";

// Mvoie-path
import { MovieDetails } from "./pages/Movie/MovieDetails";
import { UpcomingMovies } from "./pages/Movie/UpcomingMovies";
import { UpcomingMoviesDisplay } from "./pages/Movie/UpcomingMoviesDisplay";

// Axios setup
axios.defaults.withCredentials = true;

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
            <Route path="/" exact element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/user_details" element={<UserDetails />} />
            <Route path="/user_tickets" element={<UserTickets />} />
            <Route path="/About-us" element={<Aboutus />} />
            <Route path="/Upcoming_Movies" element={<UpcomingMovies />} />
            <Route
              path="/upcoming-movies"
              element={<UpcomingMoviesDisplay />}
            />
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
            <Route path="/addshows/:id" element={<AddShows />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;

// <Route path="/bookticket/:id" element={<BookMySeats />} />
