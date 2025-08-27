import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';

const Tutorials: React.FC = () => {
  const helloWorldCode = `namespace HelloWorld {
    import System;
    
    function main() {
        Console.WriteLine("Hello, Fifth Language!");
    }
}`;

  const rdfBasicsCode = `namespace RDFBasics {
    import System;
    import RDF;
    
    function main() {
        // Create a new graph
        var graph = new Graph();
        
        // Define some URIs
        var john = <http://example.org/john>;
        var mary = <http://example.org/mary>;
        var knows = <http://foaf.org/knows>;
        var age = <http://example.org/age>;
        
        // Add triples to the graph
        graph.add(john knows mary);
        graph.add(john age 30);
        graph.add(mary age 25);
        
        // Query the graph
        var results = graph.query(?person knows ?friend);
        
        foreach (var result in results) {
            Console.WriteLine($"{result.person} knows {result.friend}");
        }
    }
}`;

  const advancedQueryCode = `namespace AdvancedQueries {
    import System;
    import RDF;
    
    function main() {
        var graph = new Graph();
        
        // Load some sample data
        loadSampleData(graph);
        
        // Complex query with multiple patterns and filters
        var adultFriends = graph.query(
            ?person <foaf:knows> ?friend,
            ?friend <example:age> ?age,
            ?friend <foaf:name> ?name
            WHERE ?age >= 18
            ORDER BY ?name
        );
        
        Console.WriteLine("Adult friends:");
        foreach (var result in adultFriends) {
            Console.WriteLine($"  {result.name} (age {result.age})");
        }
    }
    
    function loadSampleData(graph: Graph) {
        graph.add(
            <john> <foaf:knows> <mary>,
            <john> <foaf:knows> <bob>,
            <mary> <example:age> 25,
            <mary> <foaf:name> "Mary Smith",
            <bob> <example:age> 17,
            <bob> <foaf:name> "Bob Jones"
        );
    }
}`;

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="mb-4">Tutorials</h1>
          <p className="lead">
            Learn Fifth programming through hands-on examples and step-by-step guides.
          </p>
        </Col>
      </Row>

      <Row>
        {/* Beginner Tutorials */}
        <Col lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">
                <i className="bi bi-mortarboard me-2"></i>
                Beginner
              </h5>
            </Card.Header>
            <Card.Body>
              <h6>Getting Started with Fifth</h6>
              <p className="text-muted">
                Learn the basics of Fifth syntax, variables, and functions.
              </p>
              <Badge bg="success" className="mb-2">30 min</Badge>
              <div className="mt-3">
                <Button variant="outline-success" size="sm" className="me-2">
                  Start Tutorial
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-diagram-3 me-2"></i>
                Intermediate
              </h5>
            </Card.Header>
            <Card.Body>
              <h6>Working with RDF Data</h6>
              <p className="text-muted">
                Understand RDF triples, graphs, and basic queries in Fifth.
              </p>
              <Badge bg="primary" className="mb-2">45 min</Badge>
              <div className="mt-3">
                <Button variant="outline-primary" size="sm" className="me-2">
                  Start Tutorial
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-warning text-dark">
              <h5 className="mb-0">
                <i className="bi bi-gear-wide-connected me-2"></i>
                Advanced
              </h5>
            </Card.Header>
            <Card.Body>
              <h6>Complex Queries & Reasoning</h6>
              <p className="text-muted">
                Advanced querying, inference, and semantic reasoning.
              </p>
              <Badge bg="warning" text="dark" className="mb-2">60 min</Badge>
              <div className="mt-3">
                <Button variant="outline-warning" size="sm" className="me-2">
                  Start Tutorial
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tutorial Content */}
      <Row className="mt-5">
        <Col>
          <h2>Tutorial 1: Hello World in Fifth</h2>
          <p>
            Let's start with the traditional "Hello World" program to get familiar with Fifth syntax.
          </p>
          
          <h4>Step 1: Basic Program Structure</h4>
          <p>
            Every Fifth program starts with a namespace declaration and imports any required libraries.
          </p>
          <CodeBlock code={helloWorldCode} language="csharp" />
          
          <div className="alert alert-info">
            <h5>Key Points:</h5>
            <ul>
              <li><code>namespace</code> declares the program's namespace</li>
              <li><code>import System</code> brings in console I/O functions</li>
              <li><code>function main()</code> is the program entry point</li>
              <li>Statements end with semicolons</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Tutorial 2: RDF Basics</h2>
          <p>
            Now let's explore Fifth's main strength: working with RDF data and knowledge graphs.
          </p>
          
          <h4>Understanding RDF Triples</h4>
          <p>
            RDF (Resource Description Framework) data is structured as triples: subject-predicate-object.
            Fifth makes working with these triples natural and intuitive.
          </p>
          <CodeBlock code={rdfBasicsCode} language="csharp" />
          
          <div className="alert alert-success">
            <h5>RDF Concepts in Fifth:</h5>
            <ul>
              <li><code>&lt;uri&gt;</code> syntax creates URI resources</li>
              <li><code>graph.add()</code> adds triples to a graph</li>
              <li><code>graph.query()</code> finds matching patterns</li>
              <li><code>?variable</code> syntax for query variables</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Tutorial 3: Advanced Queries</h2>
          <p>
            Learn how to perform complex queries with filters, sorting, and multiple patterns.
          </p>
          <CodeBlock code={advancedQueryCode} language="csharp" />
          
          <div className="alert alert-warning">
            <h5>Advanced Features:</h5>
            <ul>
              <li><code>WHERE</code> clauses for filtering results</li>
              <li><code>ORDER BY</code> for sorting query results</li>
              <li>Multiple triple patterns in a single query</li>
              <li>Bulk triple insertion with comma separation</li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* Practice Exercises */}
      <Row className="mt-5">
        <Col>
          <div className="bg-light p-4 rounded">
            <h3>Practice Exercises</h3>
            <Row>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <h6>Exercise 1: Personal Network</h6>
                    <p className="text-muted small">
                      Create a graph representing your social network with friends and their ages.
                      Write queries to find friends above a certain age.
                    </p>
                    <Badge bg="secondary">Beginner</Badge>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <h6>Exercise 2: Book Library</h6>
                    <p className="text-muted small">
                      Model a library system with books, authors, and genres.
                      Implement queries for finding books by author or genre.
                    </p>
                    <Badge bg="primary">Intermediate</Badge>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Next Steps */}
      <Row className="mt-5">
        <Col className="text-center">
          <h3>Ready for More?</h3>
          <p className="lead">
            Explore the full documentation or check out example projects on GitHub.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/docs" className="btn btn-primary me-3">
              Full Documentation
            </Link>
            <Button variant="outline-primary" href="https://github.com/aabs/fifthlang" target="_blank">
              Example Projects
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Tutorials;