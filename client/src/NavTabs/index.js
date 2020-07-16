import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "redux-bundler-react";
import "./nav.scss";

var NavTabs = ({ doAuthLogout, authIsLoggedIn, pathname }) => {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="light"
      className="navy"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive=navbar-nav">
        <Nav className="nav-container">
          <ul>
            <li>
              <Nav.Link
                className={`navbar-brand ${
                  pathname.indexOf("/files") === -1 ? "active" : ""
                }`}
                href="/"
              >
                Mapfile Editor
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#"
                onSelect={doAuthLogout}
                disabled={!authIsLoggedIn}
              >
                Logout
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                className={`${pathname.indexOf("/files") !== -1}
                      ? " active"
                      : " "`}
                href={"/files"}
                disabled={!authIsLoggedIn}
              >
                Editor
              </Nav.Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(
  "doAuthLogout",
  "selectRoute",
  "selectPathname",
  "selectAuthIsLoggedIn",
  NavTabs
);
