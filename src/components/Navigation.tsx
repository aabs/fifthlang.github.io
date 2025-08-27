import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <strong>Fifth</strong> <span className="text-muted">Programming Language</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/docs">
              <Nav.Link>Documentation</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tutorials">
              <Nav.Link>Tutorials</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news">
              <Nav.Link>News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <Nav.Link href="https://github.com/aabs/fifthlang" target="_blank" rel="noopener noreferrer">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;