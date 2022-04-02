import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    let navigate = useNavigate();
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    {/* <Nav.Link to="#pricing">Pricing</Nav.Link> */}
                    <Button onClick={()=>{localStorage.removeItem('inoteToken'); navigate("/login");}}>Log Out</Button>
                </Nav>
            </Container>
        </Navbar>
    </>);
}

export default NavBar;
