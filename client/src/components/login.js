import "../App.css";
import React, { useState } from "react";
import axios from "axios";

function login() {
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
          //alert(Response.data.message);
          //setStatus({ type: "sucess" });
        });
    } catch (error) {
      setMessage(Response.data.message);
      //setStatus({ status: "failed" });
      console.log(error);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "10% auto",
        boxShadow: "0px 0px 12px black",
        width: "40vw",
        boxshadow: "0px 0px 12px black",
        padding: "35px",
      }}
      className="container-fluid d-flex "
    >
      <form onSubmit={postLogin}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            style={{
              backgroundColor: "whitesmoke",
              width: "35vw",
              padding: "20px",
              color: "grey",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control "
            id="exampleInputEmail1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            style={{
              backgroundColor: "whitesmoke",
              width: "35vw",
              padding: "20px",
              color: "grey",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <br></br>
        <button
          style={{
            width: "35vw",
            padding: "20px",
          }}
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
        <br></br>
        <br></br>
        <div class="alert " role="alert">
          {message && <div>{message}</div>}
        </div>
      </form>
    </div>
  );
}

export default login;

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
