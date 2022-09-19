import "../App.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, redirect, useNavigate } from "react-router-dom";

import { UserContext } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function postLogin(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/user/login", {
          email,
          password,
        })
        .then((Response) => {
          setMessage(Response.data.message);
          dispatch({ type: "USER", payload: true });
          navigate("/Movies");
        });
    } catch (error) {
      setMessage(Response.data.message);

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
      <form onSubmit={postLogin}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            style={{
              backgroundColor: "whitesmoke",
              //width: "35vw",
              //padding: "20px",
              color: "grey",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control "
          />
        </div>
        <div className="mb-3">
          <label className="form-label ">Password</label>
          <input
            style={{
              backgroundColor: "whitesmoke",
              //width: "35vw",
              //padding: "20px",
              color: "grey",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control "
          />
        </div>
        <br></br>
        <button
          style={{
            width: "25vw",
            padding: "10px",
          }}
          type="submit"
          className="btn btn-primary"
        >
          Sign In
        </button>
        <br></br>
        <br></br>
        Not a user? <Link to="/sign-up"> Sign Up </Link>here
        <div className="alert " role="alert">
          {message && <div>{message}</div>}
        </div>
      </form>
    </div>
  );
};

export default Login;

/*
<div>
      <form onSubmit={postLogin}>
        <div class="form-outline mb-4">
          <input
            className="form-control"
            type={Text}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br></br>
        <div class="form-outline mb-4">
          <input
            className="form-control"
            type={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
      {message && <div>{message}</div>}
      </div>
*/
