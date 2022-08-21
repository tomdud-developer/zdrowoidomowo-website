import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Icon from 'react-bootstrap-icons';
import { Offcanvas } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar() {
  return (
    <div className='navbar-div'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Zdrowo i Domowo</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link >
              <Link
                activeClass="active"
                to="offer-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={300}
              >Oferta
              </Link>
            </Nav.Link>

            <Nav.Link >
              <Link
                activeClass="active"
                to="cake-gallery-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={300}
              >Galeria tortów
              </Link>
            </Nav.Link>

            <Nav.Link >
              <Link
                activeClass="active"
                to="party-gallery-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={300}
              >Galeria przyjęć okolicznościowych
              </Link>
            </Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                  activeClass="active"
                  to="contact-link"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={50}
                >Kontakt
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
          </Nav>
          <a target="_blank" href="https://pl-pl.facebook.com/"><Icon.Facebook size="40px" color='#4267B2' /> </a>
        </Container>
      </Navbar>
    </div>
  )
}

//
