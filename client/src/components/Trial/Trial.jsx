import React from "react";
import { NavLink } from "react-router-dom";
import "./Trial.css";

const Trial = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink
            className={({ isActive }) =>
              "underline" + isActive ? " active" : ""
            }
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "underline" + isActive ? " active" : ""
            }
          >
            Old
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "underline" + isActive ? " active" : ""
            }
          >
            New
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Trial;
