import "../App.css";
import React, { useState } from "react";
import axios from "axios";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function postLogin(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/user/login", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={postLogin}>
        <input
          type={Text}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default login;
