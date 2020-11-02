import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./Nav.css";

export default function BetterNavbar() {
  const isUserLoggedIn = localStorage.getItem("token") != null;
  return (
    <Navbar
      style={{ background: "#242424" }}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand>
        <h2 className="m-0 p-0 ml-2">
          <Link to="/" className="navbar-logo" className="text-white">
            #PlanMeet&Log
          </Link>
        </h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/" className="text-white">
              Home
            </Link>
          </Nav.Link>
          {isUserLoggedIn && (
            <Nav.Link>
              <Link to="/Dashboard" className="text-white">
                Dashboard
              </Link>
            </Nav.Link>
          )}
          <Nav.Link>
            <Link to="/AboutUs" className="text-white">
              About Us
            </Link>
          </Nav.Link>
        </Nav>
        {!isUserLoggedIn && (
          <Nav>
            <Link to="/Signup">
              <Button className="mr-sm-2 ml-sm-3" variant="outline-info">
                Sign Up
              </Button>
            </Link>
            <Link to="/Login">
              <Button variant="outline-info">Log In</Button>
            </Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
