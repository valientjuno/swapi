import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-uppercase">
          SWAPI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Characters" className="mx-2">
              Characters
            </Nav.Link>
            <Nav.Link href="/Films" className="mx-2">
              Films
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
