import "../App.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
export var [name] = "user";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [haveMessage, setHaveMessage] = useState(false);

  async function postLogin(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/user/log-in", {
          email,
          password,
        })
        .then((res) => {
          const Name = res.data.name;
          console.log(Name);
          setName(Name);
          // console.log(res.data.name);
          // console.log(res.data);
          // console.log(res.status);
          setMessage(res.data.message);
          setHaveMessage(true);
        });
    } catch (error) {
      // setMessage(Response.data.message);

      console.log(error);
    }
  }

  function setName(n) {
    localStorage.setItem("Name", n);
    name = n;
  }

  const RenderMessage = () => {
    if (haveMessage) {
      if (message === "Login successful") {
        //dispatch({ type: "USER", payload: true });
        Cookies.set("loggedIn", "true");
        navigate("/Movies");
        return (
          <div className="alert alert-primary " role="alert">
            {message && <div>{message}</div>}
          </div>
        );
      } else {
        return (
          <div className="alert alert-danger " role="alert">
            {message && <div>{message}</div>}
          </div>
        );
      }
    }
  };

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
        <br></br>
        <Link to="/forgot_password">Forgot password?</Link>
        <RenderMessage />
        <></>
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
