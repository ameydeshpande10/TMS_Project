import React, { useContext, useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./NavbarElements";

import { UserContext } from "../../App";
import { UserDropDown } from "./userDropDown";
import { navItems } from "./userSubItems";
import Cookies from "js-cookie";
import "./Dropdown.css";

const Navbar = () => {
  // const { state, dispatch } = useContext(UserContext);
  const [dropDown, setDropDown] = useState(false);
  const User_cookie = {
    name: String,
  };
  var user = Cookies.get("user");
  if (user) {
    user = decodeURI(user);
    const user_attributes = JSON.parse(user);
    console.log(user_attributes);
    User_cookie = {
      name: user_attributes.name,
    };
  }

  const RenderNavbar = () => {
    if (Cookies.get("loggedIn") == "true") {
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
                      <NavLink activestyl="true">
                        {console.log(User_cookie.name)}
                        Hi! {User_cookie.name}
                      </NavLink>
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
    <>
      <Nav>
        <NavLink to="/">
          <img
            style={{ height: "100px", width: "180px" }}
            className="logo"
            src={require("../../images/logo.png")}
            alt="logo"
          />
        </NavLink>
        <Bars />
        <RenderNavbar />
      </Nav>
    </>
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
