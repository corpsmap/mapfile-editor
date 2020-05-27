import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "redux-bundler-react";



function NavTabs({doUpdate, route, pathname})=> {
const navItems =[
  {url:'/', label: 'Mapfile Editor'},
  {url:'/login', label:'Login'},
  {url:'/files', label:'Map File List'},
  {url:'/editor', label:'Editor'},

];

  navItems.map(item=>{
    return(
      <Navbar
        collapseOnSelect
        sticky="top"
        className="navbar navbar-expand-lg navbar-light bg-light navy"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive=navbar-nav">
          <Nav className="nav-container">
  
            <Nav.Link className="navbar-brand" to="/">
              Map Editor
            </Nav.Link>
  
            <ul className="navbar-nav">
              <li className="nav-item">
                <Nav.Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/login"
                      ? " active"
                      : " "
                  }
                >
                  Login
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  to="/mapview"
                  className={
                    window.location.pathname === "/mapview" ? " active" : " "
                  }
                >
                  Mapview
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  to="/editor"
                  className={
                    window.location.pathname === "/editor" ? " active" : " "
                  }
                >
                  Editor
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  })
}

export default connect('selectRoute','selectPathname','doUpdateUrl', NavTabs)

