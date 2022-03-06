import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import bootstrap from 'bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter
  } from "react-router-dom";
import AboutMePage from '../AboutMePage/AboutMePage';
import ContactPage from '../ContactPage/ContactPage';
import ShopPage from '../ShopPage/ShopPage';

const Navigation = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Mega Sports</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/AboutMePage">Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/ContactPage">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/ShopPage">Tienda</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Carrito
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
        
            <Routes>
                <Route path="/AboutMePage" element={<AboutMePage />}  />
                <Route path="/ContactPage" element={<ContactPage />}  />
                <Route path="/ShopPage" element={<ShopPage />}  />
            </Routes>
    </BrowserRouter>
        
        
    </>


  )
}

export default Navigation