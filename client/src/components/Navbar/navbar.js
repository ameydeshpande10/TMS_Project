import React, { useState, useContext } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./NavbarElements";
import { UserDropDown } from "./userDropDown";
import { navItems } from "./userSubItems";
import Cookies from "js-cookie";
import "./Dropdown.css";
import { name } from "../../pages/login";
import { UserContext } from "../../App";
import { AdminDropDown } from "./AdminDropDown/AdminDropDown";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const [dropDown, setDropDown] = useState(false);
  //const [name, setName] = useState("");
  var n = localStorage.getItem("Name");
  if (n) {
    let nr = n.split(" ");
    var nrr = nr[0];
  }

  const RenderNavbar = () => {
    if (state === 100) {
      if (Cookies.get("loggedIn") === "true") {
        return (
          <>
            <NavMenu>
              <NavLink to="/Movies" activestyl="true">
                Movies
              </NavLink>

              <ul className="nav-items">
                {navItems.map((item) => {
                  if (item.title === "Admin") {
                    return (
                      <li
                        key={item.id}
                        className={item.cName}
                        onMouseEnter={() => setDropDown(true)}
                        onMouseLeave={() => setDropDown(false)}
                      >
                        <NavLink activestyl="true">Hi! Admin</NavLink>
                        {dropDown && <AdminDropDown />}
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
      }
    } else {
      if (Cookies.get("loggedIn") === "true") {
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
                        <NavLink activestyl="true">Hi! {nrr}</NavLink>
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
    }
  };

  return (
    <>
      <Nav>
        <NavLink to="/Movies">
          <img
            style={{ height: "10vh", width: "180px" }}
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
