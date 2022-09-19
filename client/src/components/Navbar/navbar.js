import React, { useContext, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavLogo,
} from "./NavbarElements";

import { UserContext } from "../../App";
import { UserDropDown } from "./userDropDown";
import { navItems } from "./userSubItems";
import "./Dropdown.css";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const [dropDown, setDropDown] = useState(false);

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
            <ul className="nav-items">
              {navItems.map((item) => {
                if (item.title === "User") {
                  return (
                    <li
                      key={item.id}
                      className={item.cName}
                      onMouseEnter={() => setDropDown(true)}
                      onMouseLeave={() => setDropDown(false)}
                    >
                      <NavLink activestyl="true">Hi! **USERNAME**</NavLink>
                      {dropDown && <UserDropDown />}
                    </li>
                  );
                }
                return <></>;
              })}
            </ul>

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

/*

<ul>
              {navItems.map((item) => {
                if (item.title === "User") {
                  return (
                    <li key={item.id} className={item.cName}>
                      <NavLink to="/user" activestyl="true">
                        Hi! **USERNAME**
                      </NavLink>
                      <UserDropDown />
                    </li>
                  );
                }
                return <></>;
              })}
            </ul>







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
