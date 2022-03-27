import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    {/* <Nav.Link to="#pricing">Pricing</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    </>);
}

export default NavBar;
