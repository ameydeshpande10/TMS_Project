import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserDetails = () => {
  const [user, setUser] = useState({
    name: "",
    email: null,
    address: null,
    date_of_birth: null,
    contact_number: null,
  });
  // const state = {
  //   name: null,
  //   email: null,
  //   address: null,
  //   date_of_birth: null,
  //   contact_number: null,
  // };

  useEffect(() => {
    async function getdetails(e) {
      try {
        await axios.get("http://localhost:3001/user/details").then((res) => {
          //console.log(res.data.name);
          setUser({
            name: res.data.name,
            email: res.data.email,
            address: res.data.address,
            date_of_birth: res.data.date_of_birth,
            contact_number: res.data.contact_number,
          });
        });
      } catch (error) {
        console.log(error);
      }
    }

    getdetails();
  }, []);

  return (
    <>
      <div className="container py-5 h-100">
        <section
          className="vh-100"
          style={{
            backgroundColor: "#f4f5f7",
          }}
        >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-10 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <h5>Marie Horwitz</h5>
                    <p>Web Designer</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>User Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-12 mb-3">
                          <h6>Name</h6>
                          <p className="text-muted">{user.name}</p>
                        </div>
                        <div className="col-10 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{user.contact_number}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-12 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">{user.address}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-12 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{user.email}</p>
                        </div>
                      </div>

                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-12 mb-3">
                          <h6>Date of Birth</h6>
                          <p className="text-muted">{user.date_of_birth}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/*

<img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style="width: 80px;"
                    />
*/