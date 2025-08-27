import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={8} className="mx-auto">
          <h1 className="text-center mb-5">About Fifth</h1>
          
          <div className="text-center mb-5">
            <p className="lead">
              Fifth is a modern, general-purpose programming language with native support for 
              RDF knowledge graphs and semantic web technologies. It blends familiar syntax with 
              powerful constructs like destructuring, function overloading, and guard clauses.
            </p>
          </div>

          <section className="mb-5">
            <h2>Vision</h2>
            <p>
              The primary goal of Fifth is to make working with RDF knowledge graphs as natural 
              and intuitive as working with traditional data structures—without sacrificing the 
              flexibility of a general-purpose language. By providing first-class support for RDF 
              concepts and familiar syntax for developers, Fifth aims to:
            </p>
            <ul>
              <li><strong>Drive RDF adoption</strong> by lowering the barrier to entry</li>
              <li><strong>Make RDF development faster</strong> than traditional approaches</li>
              <li><strong>Provide type safety</strong> for semantic web applications</li>
              <li><strong>Bridge the gap</strong> between traditional programming and semantic technologies</li>
              <li><strong>Remain general-purpose</strong> for building everyday applications</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2>Design Principles</h2>
            <Row>
              <Col md={6}>
                <Card className="mb-3 border-primary">
                  <Card.Body>
                    <h5 className="text-primary">
                      <i className="bi bi-shield-check me-2"></i>
                      Type Safety
                    </h5>
                    <p>
                      Strong static typing with compile-time error checking prevents runtime 
                      errors and makes code more reliable and maintainable.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3 border-success">
                  <Card.Body>
                    <h5 className="text-success">
                      <i className="bi bi-diagram-3 me-2"></i>
                      RDF Native
                    </h5>
                    <p>
                      Built-in support for RDF triples, SPARQL-like queries, and semantic 
                      operations as first-class language constructs.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3 border-info">
                  <Card.Body>
                    <h5 className="text-info">
                      <i className="bi bi-people me-2"></i>
                      Familiar Syntax
                    </h5>
                    <p>
                      C-family syntax that feels familiar to most developers, reducing 
                      the learning curve for adopting semantic technologies.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3 border-warning">
                  <Card.Body>
                    <h5 className="text-warning">
                      <i className="bi bi-layers me-2"></i>
                      Multi-Paradigm
                    </h5>
                    <p>
                      Support for functional, object-oriented, semantic, and logic 
                      programming paradigms in a single cohesive language, plus modern 
                      conveniences like destructuring, function overloading, and guard clauses.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3 border-dark">
                  <Card.Body>
                    <h5 className="text-dark">
                      <i className="bi bi-stars me-2"></i>
                      Modern Constructs
                    </h5>
                    <p>
                      Write expressive, concise code with tuple/object destructuring, 
                      function/method overloading, and lightweight guard clauses for clear control flow.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          <section className="mb-5">
            <h2>Technical Architecture</h2>
            <p>
              Fifth is built on solid foundations that ensure reliability, performance, 
              and maintainability:
            </p>
            <ul>
              <li><strong>.NET Runtime:</strong> Leverages the mature .NET ecosystem for performance and portability</li>
              <li><strong>ANTLR Parser:</strong> Uses industry-standard parser generation for robust syntax analysis</li>
              <li><strong>Multipass Compiler:</strong> Performs multiple compilation passes for optimization and error checking</li>
              <li><strong>IL Code Generation:</strong> Generates efficient .NET Intermediate Language code</li>
              <li><strong>Cross-Platform:</strong> Runs anywhere .NET Core is supported</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2>Use Cases</h2>
            <p>
              Fifth is particularly well-suited for applications that work with knowledge graphs, 
              semantic data, and linked data technologies:
            </p>
            
            <Row>
              <Col md={4}>
                <Card className="text-center mb-3">
                  <Card.Body>
                    <i className="bi bi-globe2 display-4 text-primary mb-3"></i>
                    <h5>Semantic Web Applications</h5>
                    <p className="text-muted small">
                      Build applications that work with linked data, ontologies, and semantic markup.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center mb-3">
                  <Card.Body>
                    <i className="bi bi-diagram-3-fill display-4 text-success mb-3"></i>
                    <h5>Knowledge Management</h5>
                    <p className="text-muted small">
                      Create systems for organizing, querying, and reasoning over complex knowledge.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center mb-3">
                  <Card.Body>
                    <i className="bi bi-cpu display-4 text-info mb-3"></i>
                    <h5>AI & Machine Learning</h5>
                    <p className="text-muted small">
                      Develop intelligent systems that can reason over structured knowledge representations.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          <section className="mb-5">
            <h2>Development Status</h2>
            <div className="alert alert-info">
              <h5>
                <i className="bi bi-info-circle me-2"></i>
                Active Development
              </h5>
              <p className="mb-0">
                Fifth is currently under active development. While the core language features 
                are functional, the project is evolving rapidly. We welcome feedback, 
                contributions, and early adopters who want to help shape the future of 
                semantic programming.
              </p>
            </div>
            
            <p>
              Current development focuses on:
            </p>
            <ul>
              <li>Expanding the standard library</li>
              <li>Improving error messages and debugging support</li>
              <li>Performance optimizations</li>
              <li>IDE integration and tooling</li>
              <li>Documentation and tutorials</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2>Contributing</h2>
            <p>
              Fifth is an open-source project, and we welcome contributions from the community. 
              Whether you're interested in language design, compiler development, documentation, 
              or testing, there are many ways to get involved.
            </p>
            
            <div className="text-center">
              <Button 
                variant="primary" 
                size="lg" 
                href="https://github.com/aabs/fifthlang" 
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="bi bi-github me-2"></i>
                View on GitHub
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg" 
                href="https://github.com/aabs/fifthlang/blob/master/CONTRIBUTING.md" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-person-plus me-2"></i>
                Contributing Guide
              </Button>
            </div>
          </section>

          <section className="mb-5">
            <h2>License</h2>
            <p>
              Fifth is released under the MIT License, making it free to use, modify, 
              and distribute for both commercial and non-commercial purposes.
            </p>
          </section>

          <div className="text-center bg-light rounded p-4">
            <h3>Ready to Get Started?</h3>
            <p className="mb-3">
              Explore the documentation, try the tutorials, or dive into the source code.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button variant="primary" href="/docs">
                Documentation
              </Button>
              <Button variant="success" href="/tutorials">
                Tutorials
              </Button>
              <Button variant="info" href="/news">
                Latest News
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;