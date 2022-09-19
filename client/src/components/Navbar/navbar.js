import React, { useContext } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from "./NavbarElements";

import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderNavbar = () => {
    if (state) {
      return (
        <>
          <NavMenu>
            <NavLink to="/Movies" activestyl="true">
              Movies
            </NavLink>
            <NavLink to="/Upcoming_Movies" activestyl="true">
              Upcoming Movies
            </NavLink>
            <NavLink to="/About-us" activestyl="true">
              About Us
            </NavLink>
            <NavLink to="/user" activestyl="true">
              Hi! **USERNAME**
            </NavLink>

            <NavBtnLink to="/logout">Logout</NavBtnLink>
          </NavMenu>
        </>
      );
    } else {
      return (
        <>
          <NavMenu>
            <NavLink to="/Movies" activestyl="true">
              Movies
            </NavLink>
            <NavLink to="/Upcoming_Movies" activestyl="true">
              Upcoming Movies
            </NavLink>
            <NavLink to="/About-us" activestyl="true">
              About Us
            </NavLink>
            <NavLink to="/sign-up" activestyl="true">
              Sign Up
            </NavLink>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavMenu>
        </>
      );
    }
  };

  return (
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
      <RenderNavbar />
      {/* <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn> */}
    </Nav>
  );
};

export default Navbar;

{
  /* <NavMenu>
  <NavLink to="/Movies" activestyl="true">
    Movies
  </NavLink>
  <NavLink to="/Upcoming_Movies" activestyl="true">
    Upcoming Movies
  </NavLink>
  <NavLink to="/About-us" activestyl="true">
    About Us
  </NavLink>
  <NavLink to="/sign-up" activestyl="true">
    Sign Up
  </NavLink>
  <NavBtnLink to="/logout">Logout</NavBtnLink>
  <NavBtnLink to="/signin">Sign In</NavBtnLink>
</NavMenu>; */
}
