import React from 'react';
import { Container, Row, Col, Card, ListGroup, Alert } from 'react-bootstrap';
import CodeBlock from '../components/CodeBlock';

const Documentation: React.FC = () => {
  const syntaxExample = `main(): int {\n    x: int = 10;\n    y: int = 15;\n    return x + y;\n}\n\nadd(a: int, b: int): int {\n    return a + b;\n}\nmain(): int {\n    return add(10, 15);\n}\n\nclass Person {\n    Name: string;\n    Age: int;\n}\nget_age(p: Person): int {\n    return p.Age;\n}\nmain(): int {\n    person: Person = new Person {\n        Name = "John",\n        Age = 25\n    };\n    return get_age(person);\n}`;

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

  const modernExample = `foo(i: int | i <= 15): int {\n    return 1;\n}\nfoo(i: int | i > 15): int {\n    return 2;\n}\nmain(): int {\n    return foo(10) + foo(20);\n}\n\nclass Employee {\n    Name: string;\n    Salary: int;\n    Department: string;\n}\ncalculate_bonus(emp: Employee {\n    salary: Salary | salary > 50000,\n    department: Department\n}): int {\n    if (department == "Engineering") {\n        return salary / 10;\n    }\n    return salary / 20;\n}\nmain(): int {\n    engineer: Employee = new Employee {\n        Name = "Alice",\n        Salary = 60000,\n        Department = "Engineering"\n    };\n    return calculate_bonus(engineer);\n}`;

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
              Fifth is a general-purpose programming language that makes working with RDF knowledge graphs easier,
              without compromising everyday development. It runs on the .NET runtime and provides first-class support
              for semantic web technologies alongside modern language features like destructuring, function overloading,
              and guard clauses.
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
              <Col md={12}>
                <Card className="mb-3">
                  <Card.Header>
                    <h5>Modern Constructs</h5>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>Tuple and object destructuring for concise data access</li>
                      <li>Function/method overloading for expressive APIs</li>
                      <li>Lightweight guard clauses for clear, early-exit control flow</li>
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

          <section id="modern-constructs" className="mb-5">
            <h2>Modern Constructs</h2>
            <p>
              Beyond RDF-first features, Fifth includes productivity-focused capabilities that make everyday code simpler and clearer.
            </p>
            <CodeBlock code={modernExample} language="csharp" />
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
              <ListGroup.Item action href="#modern-constructs">
                Modern Constructs
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