import React from 'react';
import { Container, Row, Col, Card, ListGroup, Alert } from 'react-bootstrap';
import CodeBlock from '../components/CodeBlock';

const Documentation: React.FC = () => {
  const syntaxExample = `// Fifth Language Syntax Examples

// Variable declarations
var name: string = "John";
var age: int = 30;
var isActive: bool = true;

// Function definition
function greet(name: string): string {
    return "Hello, " + name + "!";
}

// RDF Triple creation
var person = <http://example.org/person/john>;
var knows = <http://example.org/knows>;
var friend = <http://example.org/person/mary>;

// Add triple to graph
graph.add(person knows friend);

// SPARQL-like queries
var results = graph.query(
    ?person <http://example.org/knows> ?friend,
    ?person <http://example.org/age> ?age
    WHERE ?age > 25
);

// Classes and objects
class Person {
    var name: string;
    var age: int;
    
    constructor(name: string, age: int) {
        this.name = name;
        this.age = age;
    }
    
    function introduce(): string {
        return "I am " + this.name + ", " + this.age + " years old.";
    }
}`;

  const installExample = `# Prerequisites
# .NET SDK 8.0 or later
# Java 17 or later (for ANTLR toolchain)

# Install via git clone
git clone https://github.com/aabs/fifthlang.git
cd fifthlang

# Build the compiler
dotnet build fifthlang.sln

# Run tests to verify installation
dotnet test fifthlang.sln`;

  return (
    <Container className="py-5">
      <Row>
        <Col md={9}>
          <h1 className="mb-4">Documentation</h1>
          
          <Alert variant="info">
            <Alert.Heading>Work in Progress</Alert.Heading>
            Fifth is actively under development. Documentation is being updated regularly.
            For the latest information, check the <a href="https://github.com/aabs/fifthlang" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
          </Alert>

          <section id="getting-started" className="mb-5">
            <h2>Getting Started</h2>
            <p>
              Fifth is a programming language designed to make working with RDF knowledge graphs easier.
              It builds on top of the .NET Core runtime and provides first-class support for semantic web technologies.
            </p>
            
            <h3>Installation</h3>
            <CodeBlock code={installExample} language="bash" />
          </section>

          <section id="language-features" className="mb-5">
            <h2>Language Features</h2>
            <Row>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Header>
                    <h5>Type System</h5>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>Strongly typed with compile-time checking</li>
                      <li>Type inference where appropriate</li>
                      <li>Generic types and functions</li>
                      <li>Nullable and non-nullable types</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Header>
                    <h5>RDF Support</h5>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>Native RDF triple syntax</li>
                      <li>SPARQL-like query expressions</li>
                      <li>Built-in graph operations</li>
                      <li>Namespace management</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          <section id="syntax" className="mb-5">
            <h2>Syntax Overview</h2>
            <p>
              Fifth syntax is designed to be familiar to developers coming from C-family languages,
              while providing specialized constructs for RDF operations.
            </p>
            <CodeBlock code={syntaxExample} language="csharp" />
          </section>

          <section id="compiler" className="mb-5">
            <h2>Compiler Architecture</h2>
            <p>
              The Fifth compiler is built using ANTLR for parsing and targets the .NET runtime.
              It performs multiple passes for optimization and type checking.
            </p>
            <ul>
              <li><strong>Lexical Analysis:</strong> Tokenization using ANTLR-generated lexer</li>
              <li><strong>Syntax Analysis:</strong> Parse tree generation with error recovery</li>
              <li><strong>Semantic Analysis:</strong> Type checking and symbol resolution</li>
              <li><strong>Code Generation:</strong> IL code generation for .NET runtime</li>
            </ul>
          </section>

          <section id="rdf-integration" className="mb-5">
            <h2>RDF Integration</h2>
            <p>
              Fifth provides seamless integration with RDF technologies, making it easy to work with
              knowledge graphs and semantic data.
            </p>
            
            <h3>Triple Syntax</h3>
            <CodeBlock code={`// Basic triple creation
<subject> <predicate> <object>;

// Using variables
var person = <http://example.org/john>;
var name = "John Doe";
person <http://example.org/name> name;

// Bulk operations
graph.add(
    <john> <knows> <mary>,
    <mary> <knows> <bob>,
    <bob> <age> 25
);`} language="csharp" />

            <h3>Query Syntax</h3>
            <CodeBlock code={`// Find all friends of John
var friends = graph.query(
    <john> <knows> ?friend
);

// Complex queries with filters
var adults = graph.query(
    ?person <age> ?age,
    ?person <name> ?name
    WHERE ?age >= 18
);`} language="csharp" />
          </section>
        </Col>

        <Col md={3}>
          <div className="sticky-top" style={{ top: '100px' }}>
            <h5>Table of Contents</h5>
            <ListGroup variant="flush">
              <ListGroup.Item action href="#getting-started">
                Getting Started
              </ListGroup.Item>
              <ListGroup.Item action href="#language-features">
                Language Features
              </ListGroup.Item>
              <ListGroup.Item action href="#syntax">
                Syntax Overview
              </ListGroup.Item>
              <ListGroup.Item action href="#compiler">
                Compiler Architecture
              </ListGroup.Item>
              <ListGroup.Item action href="#rdf-integration">
                RDF Integration
              </ListGroup.Item>
            </ListGroup>
            
            <Card className="mt-4">
              <Card.Header>
                <h6>External Resources</h6>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  <li><a href="https://github.com/aabs/fifthlang" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  <li><a href="https://github.com/aabs/fifthlang/issues" target="_blank" rel="noopener noreferrer">Issue Tracker</a></li>
                  <li><a href="https://www.w3.org/RDF/" target="_blank" rel="noopener noreferrer">RDF Specification</a></li>
                  <li><a href="https://www.w3.org/TR/sparql11-query/" target="_blank" rel="noopener noreferrer">SPARQL Documentation</a></li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentation;