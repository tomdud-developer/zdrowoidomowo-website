import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Icon from 'react-bootstrap-icons';
import { Offcanvas } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

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
          </Nav>
          <Nav>
            <Nav.Link href="#concat">Kontakt</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
          </Nav>
          <a target="_blank" href="https://pl-pl.facebook.com/"><Icon.Facebook size="40px" color='#4267B2' /> </a>
        </Container>
      </Navbar>
    </>
  )
}
