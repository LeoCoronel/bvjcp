import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

const NavbarComp = () => {
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"} href="#home">BVJCP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/comunidad"}>Comunidad</Nav.Link>
                        <Nav.Link as={Link} to={"/historia"}>Historia</Nav.Link>
                        <Nav.Link as={Link} to={"/moviles"}>Móviles</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp;