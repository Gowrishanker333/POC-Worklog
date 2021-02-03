import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Log Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Home">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/DetailsForm">Submit-Log</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Login">Logout</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;