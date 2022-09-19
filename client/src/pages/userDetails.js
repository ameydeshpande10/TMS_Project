import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserDetails = () => {
  const [name, setName] = useState;
  useEffect(() => {
    axios.get("http://localhost:3001/user/login").then((response) => {
      console.log("yoyoma" + response);
      setName(response.user.name);
    });
  }, []);
  return <div>userDetails</div>;
};
