import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

export const UserDetails = () => {
  const [cookies, setCookie] = useCookies();

  const User_cookie = {
    name: String,
  };
  var user = Cookies.get("user");
  if (user) {
    user = decodeURI(user);
    const user_attributes = JSON.parse(user);
    console.log(user_attributes);
    User_cookie = {
      name: user_attributes.name,
    };
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
      {cookies.name && <p>{User_cookie.name}</p>}
    </div>
  );
};
