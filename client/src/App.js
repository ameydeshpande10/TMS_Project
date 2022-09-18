import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";

import Home from "./pages/index";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
