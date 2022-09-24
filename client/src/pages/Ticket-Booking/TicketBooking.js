import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MovieDetailsIndividual from "../Movie/MovieDetailsIndividual";

export const TicketBooking = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const params = useParams();

  //data to post

  const [ticketDate, setTicketDate] = useState("");
  const [ticketTime, setTicketTime] = useState("");

  async function BookTicket(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/user/add-ticket", {
          id,

          date: ticketDate,
          time_slot: ticketTime,
        })
        .then((res) => {
          console.log(res.data);
          navigate(`/ticket-payment/${id}`);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const movieDetails = MovieDetailsIndividual(params);
  try {
    const name = movieDetails.name;

    // const actors_name = movieDetails.actors;
    const certification = movieDetails.certification;
    // const director = movieDetails.director;
    // const genre = movieDetails.genre;
    const movie_length = movieDetails.movie_length;
    const release_date = movieDetails.release_date; //
    // const start_date = movieDetails.start_date.split("T")[0];
    // const end_date = movieDetails.end_date.split("T")[0];
    const first_show = movieDetails.first_show;
    const second_show = movieDetails.second_show;
    const image = movieDetails.image;

    return (
      <>
        <div className="conatiner p-2  d-flex justify-content-center align-items-center">
          {/*mt-5 p-2 */}

          <div className="conatiner  " style={{ width: "65vw" }}>
            <div className="card ">
              <form className="form-control" onSubmit={BookTicket}>
                <div className="row">
                  <div className="col">
                    <img
                      src={image}
                      className="card-img-top p-2"
                      alt="..."
                      style={{ height: "550px", width: "425px" }}
                    />
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ textTransform: "capitalize" }}
                      >
                        <label className="me-2 fw-bold">Title:</label>
                        {name}
                      </h5>
                      <br></br>

                      <p className="card-text">
                        <label className="me-2 fw-bold">Certification:</label>
                        {certification}
                      </p>
                      <p className="card-text">
                        <label className="me-2 fw-bold">Movie length:</label>
                        {movie_length}
                      </p>
                      <p className="card-text">
                        <label className="me-2 fw-bold">Release Date:</label>
                        {release_date}
                      </p>
                      <hr className="border border-primary border-3 opacity-75"></hr>

                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        onChange={(e) => setTicketDate(e.target.value)}
                      />
                      <hr className="border border-primary border-3 opacity-75"></hr>
                      <p className="card-text">Select Time</p>
                      <div className="row">
                        <div className=" col">
                          <input
                            className="btn btn-primary "
                            type="radio"
                            value={first_show}
                            name="time_slot"
                            onChange={(e) => setTicketTime(e.target.value)}
                          />

                          {first_show}
                        </div>

                        <div className=" col">
                          <input
                            className="btn btn-primary "
                            type="radio"
                            name="time_slot"
                            value={second_show}
                          />
                          {second_show}
                        </div>
                        <div className=" col">
                          <input
                            className="btn btn-primary "
                            type="radio"
                            name="time_slot"
                            value={second_show}
                          />
                          {second_show}
                        </div>
                      </div>

                      <hr className="border border-primary border-3 opacity-75"></hr>
                      <p className="card-text">How many tickets?</p>
                      <input
                        className="form-control"
                        type="Number"
                        id="ticketcount"
                        name="ticketcount"
                      />
                      <br></br>
                      <br></br>
                      <button type="submit" className="btn ">
                        Proceed to pay
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } catch (e) {
    console.log(e);
  }
};
