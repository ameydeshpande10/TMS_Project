import "../App.css";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContact_number] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [message, setMessage] = useState("");

  async function signup(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/user/sign_up", {
          name,
          address,
          password,
          email,
          contact_number,
          date_of_birth,
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
        margin: "2% auto",
        boxShadow: "0px 0px 10px black",
        width: "30vw",
        padding: "25px",
      }}
      className="container d-flex justify-content-center "
    >
      <form className="form-control" onSubmit={signup}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Tara"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Marin drive, South Mumbai"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="tara@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setContact_number(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="Date"
            className="form-control"
            onChange={(e) => setDate_of_birth(e.target.value.toString())}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
        <div className="alert " role="alert">
          {message}
        </div>
      </form>
    </div>
  );
};

export default Signup;
/*





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
      <form className="form-control" onSubmit={signup}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Tara"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Marin drive, South Mumbai"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="tara@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setContact_number(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="Date"
            className="form-control"
            onChange={(e) => setDate_of_birth(e.target.value.toString())}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
        <div className="alert " role="alert">
          <div className="alert " role="alert"></div>
        </div>
      </form>
    </div>






<div className="form-group">
          <label>Date of Birth</label>
          <input
            type="Date"
            className="form-control"
            onChange={(e) => setDate_of_birth(e.target.value.toString())}
          />
        </div>


        <div className="alert " role="alert">
          {message && <div>{message}</div>}
        </div>






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
