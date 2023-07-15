import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./nav.css";
function Navi() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="/DrieTwintig">2023</NavDropdown.Item>
              <NavDropdown.Item href="/TweeTwintig">2022</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Cv">CV</Nav.Link>
          </Nav>
          <Nav className="instagram-container">
            <Nav.Link
              href="https://www.instagram.com/cajaboogers/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
