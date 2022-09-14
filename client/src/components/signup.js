import "../App.css";
import React, { useState } from "react";
import axios from "axios";

function signup() {
  const [name, setName] = useState("");

  async function postName(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/user/sign_up"),
        {
          name,
        };
    } catch (error) {
      console.log(error);
    }
  }
}
