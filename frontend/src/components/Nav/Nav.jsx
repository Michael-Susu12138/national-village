import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import "./Nav.css";
import NVlogo from "/NV_logo.png";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img src={NVlogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutme" exact>
              About Me
            </Nav.Link>
            <Nav.Link as={NavLink} to="/experience" exact>
              Experience/Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to="/learnmore">
              Learn More
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
