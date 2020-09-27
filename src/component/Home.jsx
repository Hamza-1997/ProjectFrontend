import React from "react";
import {
  Nav,
  Button,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";
import Swicth from "./Swicth";
const HomePage = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link> Conatct</Nav.Link>
            <Nav.Link>about</Nav.Link>
            <Nav.Link> Terms and Condition</Nav.Link>
            <Link to="/Login">
              {" "}
              <Button style={{ marginRight: "50px", marginLeft: "50px" }}>
                Login
              </Button>
            </Link>
            <Link to="/Signup">
              <Button>Signup</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Swicth />
    </div>
  );
};

export default HomePage;
