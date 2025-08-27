import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';

const Home: React.FC = () => {
  const sampleCode = `// Fifth example - Working with RDF triples
namespace example {
    import System;
    import RDF;
    
    function main() {
        // Create a knowledge graph
        var graph = new Graph();
        
        // Add some triples
        graph.add(<john> <knows> <mary>);
        graph.add(<mary> <age> 25);
        
        // Query the graph
        var results = graph.query(
            ?person <knows> ?friend
        );
        
        foreach (var result in results) {
            Console.WriteLine($"{result.person} knows {result.friend}");
        }
    }
}`;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-3">Fifth</h1>
              <p className="lead mb-4">
                A modern programming language designed specifically for working with RDF knowledge graphs.
                Built on .NET, strongly typed, and multi-paradigm.
              </p>
              <div className="mb-4">
                <Badge bg="light" text="dark" className="me-2">Runs on .NET</Badge>
                <Badge bg="light" text="dark" className="me-2">Strongly Typed</Badge>
                <Badge bg="light" text="dark" className="me-2">RDF Native</Badge>
                <Badge bg="light" text="dark">Multi-Paradigm</Badge>
              </div>
              <div className="d-flex gap-3">
                <Link to="/docs" className="btn btn-light btn-lg me-3">
                  Get Started
                </Link>
                <Button variant="outline-light" size="lg" href="https://github.com/aabs/fifthlang" target="_blank">
                  View on GitHub
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-dark rounded p-3">
                <CodeBlock code={sampleCode} language="csharp" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold">Why Choose Fifth?</h2>
              <p className="lead text-muted">
                Fifth makes working with RDF knowledge graphs as easy as working with traditional data structures.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-diagram-3 fs-4"></i>
                  </div>
                  <h5>RDF Native</h5>
                  <p className="text-muted">
                    Built-in support for RDF triples, SPARQL queries, and semantic web technologies.
                    Work with knowledge graphs as first-class citizens.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-shield-check fs-4"></i>
                  </div>
                  <h5>Type Safety</h5>
                  <p className="text-muted">
                    Strongly typed system with compile-time error checking.
                    Prevent runtime errors and write more reliable code.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-gear-wide-connected fs-4"></i>
                  </div>
                  <h5>Multi-Paradigm</h5>
                  <p className="text-muted">
                    Support for functional, object-oriented, semantic, and logic programming paradigms
                    in a single, cohesive language.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Start Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="text-center mb-4">Quick Start</h2>
              <Card>
                <Card.Body>
                  <h5>Install Prerequisites</h5>
                  <CodeBlock code="# Install .NET SDK 8.0+
dotnet --version

# Install Java 17+ (for ANTLR toolchain)
java --version" language="bash" />
                  
                  <h5 className="mt-4">Clone and Build</h5>
                  <CodeBlock code="# Clone the repository
git clone https://github.com/aabs/fifthlang.git
cd fifthlang

# Build the compiler
dotnet build fifthlang.sln

# Run tests
dotnet test" language="bash" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Language Features */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold">Fifth in a Nutshell</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Runs on .NET VM
                  <Badge bg="primary" pill>Core</Badge>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Lexically Scoped
                  <Badge bg="secondary" pill>Language</Badge>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Strongly Typed
                  <Badge bg="success" pill>Safety</Badge>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Multipass Compiler
                  <Badge bg="info" pill>Performance</Badge>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Statement Based
                  <Badge bg="warning" pill>Syntax</Badge>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Multi-paradigm
                  <Badge bg="danger" pill>Flexible</Badge>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;