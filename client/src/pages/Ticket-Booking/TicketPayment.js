import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

export const TicketPayment = () => {
  return (
    <div>
      <h1>Ticket Booked!</h1>
      <NavLink to="/Movies">Home</NavLink>
    </div>
  );
};
