import "../App.css";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
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
        width: "40vw",
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
            width: "35vw",
            padding: "10px",
          }}
          type="submit"
          className="btn btn-primary"
        >
          Sign Up
        </button>
        <br></br>
        <br></br>
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
