import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Fifth Programming Language</h5>
            <p className="text-muted">
              A modern, general-purpose language with native RDF knowledge graph support.
            </p>
          </Col>
          <Col md={3}>
            <h6>Resources</h6>
            <ul className="list-unstyled">
              <li><a href="/docs" className="text-muted text-decoration-none">Documentation</a></li>
              <li><a href="/tutorials" className="text-muted text-decoration-none">Tutorials</a></li>
              <li><a href="https://github.com/aabs/fifthlang" className="text-muted text-decoration-none" target="_blank" rel="noopener noreferrer">Source Code</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Community</h6>
            <ul className="list-unstyled">
              <li><a href="https://github.com/aabs/fifthlang/issues" className="text-muted text-decoration-none" target="_blank" rel="noopener noreferrer">Issue Tracker</a></li>
              <li><a href="https://github.com/aabs/fifthlang/discussions" className="text-muted text-decoration-none" target="_blank" rel="noopener noreferrer">Discussions</a></li>
              <li><a href="https://twitter.com/aabs" className="text-muted text-decoration-none" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center text-muted">
            <small>&copy; 2024 Fifth Programming Language. Open source under MIT License.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;