import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user , handleSignOut} = useAuth();
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><NavLink to="/home">React-Bootstrap</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <NavLink to="/explore">Explore</NavLink>
                {
                    !user? <NavLink to="/login">Login</NavLink> : <Container><Navbar.Text>{user.displayName}</Navbar.Text> && <Button variant="outline-info" onClick={handleSignOut}>Log Out</Button></Container>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
</Navbar>
        </div>
    );
};

export default Header;