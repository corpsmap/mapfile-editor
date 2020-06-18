import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "redux-bundler-react";
import "./nav.scss";

const NavTabs = ({ doUpdate, route, pathname }) => {
  const navItems = [
    { url: "/login", label: "Login" },
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
            {navItems.map((props, i) => {
              return (
                <li key={i}>
                  <Nav.Link
                    className={`${props.url} ==== pathname
                      ? " active"
                      : " "`}
                    href={props.url}
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

export default connect("selectRoute", "selectPathname", "doUpdateUrl", NavTabs);
