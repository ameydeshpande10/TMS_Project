import React from "react";
import { NavLink } from "react-router-dom";
import MovieData from "./MovieData";
import Cookies from "js-cookie";
import Axios from "axios";

export function MovieCard(props) {
  var adminCheck = localStorage.getItem("Admin");

  const movies = MovieData();

  try {
    const allMovies = movies.data.map(function (data) {
      const id = data._id;
      const name = data.name;
      const actors_name = data.actors;
      const director = data.director;
      const image = data.image;

      const RenderBookTicketButton = () => {
        if (adminCheck === null) {
          if (Cookies.get("loggedIn") === "true") {
            return (
              <NavLink to={`/book-ticket/${id}`} className="btn-dark btn ">
                Book Tickets
              </NavLink>
            );
          }
        }
      };

      // var base64 = btoa(
      //   new Uint8Array(data.image.data).reduce(
      //     (data, byte) => data + String.fromCharCode(byte),
      //     ""
      //   )
      // );
      // const handleChange = (event) => {
      //   if (button !== "Movie Details") {
      //     Axios.delete(`/delmovie/${id}`);
      //   }
      // };
      return (
        <>
          <div key={name} className="">
            <div
              className="card mt-5 rounded "
              style={{
                borderTopLeftRadius: "5rem",
                borderBottomLeftRadius: "5rem",
              }}
            >
              <img
                src={image}
                className="card-img-top card_image p-2"
                alt="Not found"
              />
              <div className="card-body shadow pl-4">
                <div className="align-items-center justify-content-center p-2">
                  <p className="text-capitalize ">
                    <label className="me-2 fw-bold">
                      <h4>
                        <b>{name}</b>
                      </h4>
                    </label>
                  </p>
                  <p>
                    <label className="me-2 fw-bold">Actors:&nbsp;</label>
                    {actors_name}
                  </p>
                  <p>
                    <label className="me-2 fw-bold">Director:&nbsp;</label>
                    {director}
                  </p>
                </div>
                <br></br>

                <div className="align-items-center justify-content-between">
                  <NavLink
                    to={`/moviedetails/${id}`}
                    className="btn btn-primary"
                  >
                    Movie Details
                  </NavLink>
                  <RenderBookTicketButton></RenderBookTicketButton>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      // if (props.data !== "Movie Details") {
      //   return (
      //     <>
      //       <div
      //         key={name}
      //         className="card mt-5 me-5"
      //         style={{
      //           borderTopLeftRadius: "5rem",
      //           borderBottomLeftRadius: "5rem",
      //         }}
      //       >
      //         <div className="card-body shadow">
      //           <p className="text-capitalize">
      //             <label className="me-2 fw-bold">Movie:</label>
      //             {name}
      //           </p>
      //           <p>
      //             <label className="me-2 fw-bold">Actors:</label>
      //             {actors_name}
      //           </p>
      //           <p>
      //             <label className="me-2 fw-bold">Director:</label>
      //             {director}
      //           </p>
      //           <button className={button_class} onClick={handleChange}>
      //             {button}
      //           </button>
      //         </div>
      //       </div>
      //     </>
      //   );
      // } else {
      //   return (
      //     <>
      //       <div key={name} className="">
      //         <div
      //           className="card mt-5 rounded "
      //           style={{
      //             borderTopLeftRadius: "5rem",
      //             borderBottomLeftRadius: "5rem",
      //           }}
      //         >
      //           <img
      //             src={image}
      //             className="card-img-top card_image p-2"
      //             alt="Not found"
      //           />
      //           <div className="card-body shadow pl-4">
      //             <div className="align-items-center justify-content-center p-2">
      //               <p className="text-capitalize ">
      //                 <label className="me-2 fw-bold">
      //                   <h4>
      //                     <b>{name}</b>
      //                   </h4>
      //                 </label>
      //               </p>
      //               <p>
      //                 <label className="me-2 fw-bold">Actors:&nbsp;</label>
      //                 {actors_name}
      //               </p>
      //               <p>
      //                 <label className="me-2 fw-bold">Director:&nbsp;</label>
      //                 {director}
      //               </p>
      //             </div>
      //             <br></br>

      //             <div className="align-items-center justify-content-between">
      //               <NavLink to={`/${url}/${id}`} className={button_class}>
      //                 {button}
      //               </NavLink>
      //               <RenderBookTicketButton></RenderBookTicketButton>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </>
      //   );
      // }
    });
    return [allMovies];
  } catch (e) {
    return null;
  }
}
