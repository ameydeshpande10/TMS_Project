import "./App.css";
import React, { createContext, useReducer } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";

import Home from "./pages/index";
import Login from "./pages/login";
import Signup from "./pages/signup";

import { reducer, initialstate } from "./reducer/useReducer";

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
            <Route path="/" exact element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
