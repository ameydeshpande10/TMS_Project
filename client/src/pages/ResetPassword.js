import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [message, setMessage] = useState("");
  const [verifid, setVerifid] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const name = "amey";

  useEffect(() => {
    GetVerifid();
  });

  async function GetVerifid(e) {
    try {
      await axios
        .get(`http://localhost:3001/user/reset-password/${id}/${token}`)
        .then((res) => {
          console.log(res.data.message);
          if (res.data.status === "verified") {
            setVerifid(true);
            setHasLoaded(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function ResetPassword(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/user/reset-password", {
          id,
          token,
          email,
          password,
          cpassword,
        })
        .then((Response) => {
          setMessage(Response.data.message);

          navigate("/signin");
        });
    } catch (error) {
      // setMessage(Response.data.message);
      // navigate("/signin");
      console.log(error);
    }
  }

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
      <form onSubmit={ResetPassword}>
        <h5>Enter your Email And new Password </h5>
        <br></br>
        <br></br>
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
          <label className="form-label">New Password</label>
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
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            style={{
              backgroundColor: "whitesmoke",
              //width: "35vw",
              //padding: "20px",
              color: "grey",
            }}
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
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
          Reset Password
        </button>

        <div className="alert " role="alert">
          {message && <div>{message}</div>}
        </div>
      </form>
    </div>
  );

  if (hasLoaded === true) {
  } else {
    return <h1>Not verified</h1>;
  }
};
