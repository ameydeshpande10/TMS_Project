import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import MovieDetailsIndividual from "../Movie/MovieDetailsIndividual";

export const TicketBooking = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const params = useParams();

  //data to post

  const [ticketDate, setTicketDate] = useState("");
  const [ticketTime, setTicketTime] = useState("");
  const [ticketCount, setTicketCount] = useState();
  const [hasAdded, sethasAdded] = useState(false);
  var [ShowArray] = useState([]);
  var [ShowTimings] = useState([]);

  //console.log(ShowTimings);

  async function GetShows(e) {
    // ShowArray = [];
    // ShowTimings = [];
    try {
      await axios.get(`http://localhost:3001/showdetails/${id}`).then((res) => {
        for (let index = 0; index < res.data.length; index++) {
          ShowArray[index] = res.data[index];
        }

        //console.log(res.data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  }
  const PopulateShowTime = () => {
    ShowTimings = [];
    ShowArray.map((show) => {
      if (show.show.split("T")[0] === ticketDate) {
        if (show.time !== null) ShowTimings.push(show.time);
      }
    });
  };
  PopulateShowTime();

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

  // const RenderTimes = () => {
  //   ShowTimings.map((time) => {
  //     return (
  //       <div key={time}>
  //         <input
  //           className="btn btn-primary "
  //           type="radio"
  //           value={time}
  //           name="time_slot"
  //           onChange={(e) => setTicketTime(e.target.value)}
  //         />
  //         {time}
  //       </div>
  //     );
  //   });
  // };

  const movieDetails = MovieDetailsIndividual(params);
  try {
    //Movie data
    const name = movieDetails.name;
    const certification = movieDetails.certification;
    const movie_length = movieDetails.movie_length;
    const release_date = movieDetails.release_date;
    const image = movieDetails.image;
    //Show data
    const date = movieDetails.first_show;
    const second_show = movieDetails.second_show;

    return (
      <>
        <div className="conatiner p-2  d-flex justify-content-center align-items-center">
          <div className="conatiner  " style={{ width: "65vw" }}>
            <div className="card ">
              <form className="form-control" onSubmit={BookTicket}>
                <div className="row">
                  <div className="col">
                    <img
                      src={image}
                      className="card-img-top p-2 img-fluid img-thumbnail"
                      alt="..."
                    />
                  </div>
                  <div className="col">
                    <div className="card-body h-50">
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
                        onChange={(e) => {
                          setTicketDate(e.target.value);
                        }}
                        onChangeCapture={GetShows}
                      />
                      <hr className="border border-primary border-3 opacity-75"></hr>
                      <p className="card-text">Select Time</p>
                      <div className="row">
                        <div className=" col">
                          <ul>
                            {ShowTimings.map((time) => {
                              return (
                                <div>
                                  <input
                                    className="btn btn-primary "
                                    type="radio"
                                    value={time}
                                    name="time_slot"
                                    onChange={(e) =>
                                      setTicketTime(e.target.value)
                                    }
                                  />
                                  {time}
                                </div>
                              );
                            })}
                          </ul>
                        </div>
                      </div>

                      <hr className="border border-primary border-3 opacity-75"></hr>
                      <p className="card-text">How many tickets?</p>
                      <input
                        className="form-control"
                        type="Number"
                        id="ticketcount"
                        name="ticketcount"
                        onChange={(e) => setTicketCount(e.target.value)}
                      />
                      <NavLink to={`/bookticket/${id}`}>
                        <button type="submit" className="btn ">
                          Select seats
                        </button>
                      </NavLink>

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

// {
//   ShowTimings.map((time) => {
//     return (
//       <div>
//         <input
//           className="btn btn-primary "
//           type="radio"
//           value={time}
//           name="time_slot"
//           onChange={(e) => setTicketTime(e.target.value)}
//         />
//         {time}
//       </div>
//     );
//   });
// }
