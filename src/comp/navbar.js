import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'
import {Cv} from './Cv'

import {DrieTwintig} from './DrieTwintig'
import {TweeTwintig} from './TweeTwintig'
import {Link} from 'react-router-dom'

function Navi() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Caja Boogers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="/DrieTwintig">2023</NavDropdown.Item>
              <NavDropdown.Item href="/TweeTwintig">
                2022
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Cv">CV</Nav.Link>
            <Nav.Link href="https://www.instagram.com/cajaboogers/" target="_blank">Instagram</Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;