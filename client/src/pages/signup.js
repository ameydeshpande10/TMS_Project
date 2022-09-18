import "../App.css";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContact_number] = useState("");
  const [data_of_birth, setDate_of_borth] = useState("");
  const [message, setMessage] = useState("");

  async function sign_up(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/user/sign_up", {
          name,
          address,
          password,
          email,
          contact_number,
          data_of_birth,
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
        margin: "5% auto",
        boxShadow: "0px 0px 10px black",
        width: "40vw",
        padding: "25px",
      }}
      className="container d-flex justify-content-center "
    >
      <form className="form-control" onSubmit={sign_up}>
        <div className="form-group">
          <label for="inputName">Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Tara"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Marin drive, South Mumbai"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="inputEmail">Email Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="tara@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputPassword">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label for="inputConfirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputContact_no">Contact Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setContact_number(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="inputDate_of_birth">Date of Birth</label>
          <input
            type="Date"
            className="form-control"
            onChange={(e) => setDate_of_borth(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
        <div className="alert " role="alert">
          {message && <div>{message}</div>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
/*

<div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
*/
