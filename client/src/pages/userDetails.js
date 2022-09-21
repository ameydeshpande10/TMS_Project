import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserDetails = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getdetails(e) {
      e.preventDefault();

      try {
        await axios
          .get("http://localhost:3001/user/get_details", {})
          .then((res) =>
            res.json().then((y) => {
              setUser(y.user);
            })
          );
      } catch (error) {
        console.log(error);
      }
    }

    getdetails();
  }, []);

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
      {user}
    </div>
  );
};
