import React, { useContext, useState } from "react";
import { NavLink } from "../NavbarElements";
import { adminDropDown } from "../userSubItems";
import "../Dropdown.css";

export const AdminDropDown = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <ul
      className={dropDown ? "user-submenu clicked" : "user-submenu"}
      onClick={() => setDropDown(!dropDown)}
    >
      {adminDropDown.map((item) => {
        return (
          <li key={item.id} className={item.cName}>
            <NavLink
              to={item.path}
              className={item.cName}
              activestyl="true"
              onClick={() => setDropDown(!dropDown)}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
