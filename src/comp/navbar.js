import React from "react";
import { useLocation } from "react-router-dom"; // Assuming you are using React Router
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./nav.css";

function Navi() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">{isHomePage ? "" : "caja"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Work">Work</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Cv">CV</Nav.Link>
          </Nav>
          <Nav className="instagram-container">
            <Nav.Link href="https://www.instagram.com/cajaboogers/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
