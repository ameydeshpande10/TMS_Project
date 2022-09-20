import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

export const UserDetails = () => {
  const [cookies, setCookie] = useCookies();
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    setEmail(Cookies.get("email"));
  });

  async function getdetails(e) {
    e.preventDefault();

    try {
      await axios
        .get("http://localhost:3001/user/get_details", {
          email,
        })
        .then((Response) => {
          setName(Response.data.name);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1>User Details</h1>
      <button onClick={getdetails}></button>
      <h1>{name}</h1>
    </div>
  );
};
