import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          How To Vote
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/where"
          className={location.pathname === "/where" ? "nav-link active" : "nav-link"}
        >
          Where To Vote
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/When"
          className={location.pathname === "/When" ? "nav-link active" : "nav-link"}
        >
          When to Vote
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}
        >
          Login Register
        </Link>
      </li>
      
    </ul>
  );
}

export default NavTabs;
