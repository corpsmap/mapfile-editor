import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "redux-bundler-react";
import "./nav.scss";

var NavTabs = ({ doUpdate, route, authIsLoggedIn, pathname }) => {
  const navItems = [
    { url: "/login", label: "Login", loggedIn: authIsLoggedIn },
    // { url: "/files", label: "Map File List" },
    { url: "/files", label: "Editor", loggedIn: authIsLoggedIn },
  ];
  function onClickLink(e) {
    return this.props.authIsLoggedIn;
  }

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
                className={`navbar-brand ${"/" === pathname ? "active" : ""}`}
                href="/"
              >
                Mapfile Editor
              </Nav.Link>
            </li>
            {navItems.map((props, i) => {
              return (
                <li key={i}>
                  <Nav.Link
                    className={`${props.url} ==== pathname
                      ? " active"
                      : " "`}
                    href={props.url}
                    disabled={props.loggedIn}
                    onSelect={onClickLink}
                  >
                    {props.label}
                  </Nav.Link>
                </li>
              );
            })}
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(
  "selectRoute",
  "selectPathname",
  "doUpdateUrl",
  "selectAuthIsLoggedIn",
  NavTabs
);
