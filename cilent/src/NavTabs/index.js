import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "redux-bundler-react";
import "./nav.scss";

var NavTabs = ({ authIsLoggedIn, pathname }) => {
  const navItems = [
    { url: "/logout", label: "Logout" },
    // { url: "/files", label: "Map File List" },
    { url: "/files", label: "Editor" },
  ];

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
            {navItems.map((item, i) => {
              return (
                <li key={i}>
                  <Nav.Link
                    className={`${item.url} ==== pathname
                      ? " active"
                      : " "`}
                    href={item.url}
                    disabled={!authIsLoggedIn}
                  >
                    {item.label}
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
