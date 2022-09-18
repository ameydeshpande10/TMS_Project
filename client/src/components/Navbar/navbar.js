import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <NavLogo>
            <img
              className="logo"
              src={require("../../images/logo.png")}
              alt="logo"
            />
          </NavLogo>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activestyl="true">
            About
          </NavLink>
          <NavLink to="/services" activestyl="true">
            Services
          </NavLink>
          <NavLink to="/contact-us" activestyl="true">
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activestyl="true">
            Sign Up
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
