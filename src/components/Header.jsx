import React from 'react';
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">My Favorite Books</Navbar.Brand>

          <Nav className="me-auto">
             <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
             <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
          </Nav>

        </Container>
      </Navbar>

      
    )
  }
}

export default Header;
