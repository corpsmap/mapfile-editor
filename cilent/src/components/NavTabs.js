import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Map Editor
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/mapview"
            className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
          >
            Mapview
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/editor"
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
          >
            Editor
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavTabs;
