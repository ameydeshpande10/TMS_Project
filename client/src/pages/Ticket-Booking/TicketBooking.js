import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const TicketBooking = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>TicketBooking For</h1>
      <br></br>
      <h1>Movie id: {id}</h1>
    </div>
  );
};
