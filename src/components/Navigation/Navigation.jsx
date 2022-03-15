import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import bootstrap from 'bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter
  } from "react-router-dom";
import carrito from '../../assets/img/cart_white_24dp.png'
import './Navigation.css'

const Navigation = () => {
  return (
    <>
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand ><Nav.Link className="brand" as={Link} to="/">Mega Sports</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navbar">
                        <Nav.Link as={Link} to="/AboutMePage">Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/ContactPage">Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/categoria/hombre">Hombre</Nav.Link>
                        <Nav.Link as={Link} to="/categoria/mujer">Mujer</Nav.Link>
                    </Nav>
                        <Nav.Link className="brand" as={Link} to="/">Tienda</Nav.Link>
                         
                        <Nav.Link eventKey={2} as={Link} to="/Cart" className="brand">
                            <img src={carrito} width="45px" heigth="45px"  />
                        </Nav.Link>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </>


  )
}

export default Navigation