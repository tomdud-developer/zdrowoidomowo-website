import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Zdrowo i Domowo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Oferta</Nav.Link>
            <Nav.Link href="#pricing">Galeria tortów</Nav.Link>
            <Nav.Link href="#pricing">Galeria przyjęć okolicznościowych</Nav.Link>
            <Nav.Link href="#pricing">Kontakt</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
