import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "Fifth Language Website Redesigned",
      date: "2024-03-15",
      category: "Website",
      excerpt: "The Fifth programming language now has a modern, responsive website built with React and Bootstrap. Featuring comprehensive documentation, tutorials, and examples.",
      content: "We've completely redesigned the Fifth programming language website to provide a better experience for developers. The new site features modern design, comprehensive documentation, interactive tutorials, and code examples with syntax highlighting."
    },
    {
      id: 2,
      title: "CI/CD Pipeline Improvements",
      date: "2024-03-10",
      category: "Development",
      excerpt: "Enhanced continuous integration with cross-platform testing and code coverage reporting for better code quality.",
      content: "Our CI/CD pipeline now runs on Linux, macOS, and Windows, providing comprehensive test coverage across platforms. Code coverage reports are automatically generated and uploaded as artifacts."
    },
    {
      id: 3,
      title: "ANTLR Grammar Updates",
      date: "2024-03-05",
      category: "Compiler",
      excerpt: "Improved parser grammar for better error handling and recovery during compilation.",
      content: "The ANTLR-based parser has been updated with improved error recovery mechanisms, making it easier to debug Fifth programs and providing more helpful error messages."
    },
    {
      id: 4,
      title: "RDF Integration Enhancements",
      date: "2024-02-28",
      category: "Language",
      excerpt: "New syntactic sugar for RDF operations and improved SPARQL-like query support.",
      content: "Fifth now supports more intuitive RDF triple syntax and enhanced query capabilities, making it even easier to work with knowledge graphs and semantic data."
    },
    {
      id: 5,
      title: "Type System Improvements",
      date: "2024-02-20",
      category: "Language",
      excerpt: "Enhanced type inference and null safety features for more robust code.",
      content: "The type system has been improved with better type inference, nullable and non-nullable types, and compile-time null safety checks to prevent runtime errors."
    }
  ];

  const roadmapItems = [
    {
      title: "Standard Library Expansion",
      status: "In Progress",
      description: "Expanding the standard library with more RDF utilities and common data structures."
    },
    {
      title: "IDE Plugin Development",
      status: "Planned",
      description: "Visual Studio Code extension with syntax highlighting and IntelliSense support."
    },
    {
      title: "Package Manager",
      status: "Research",
      description: "A package manager for Fifth libraries and dependencies."
    },
    {
      title: "Documentation Generator",
      status: "Planned",
      description: "Automated documentation generation from source code comments."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'language': return 'primary';
      case 'compiler': return 'warning';
      case 'development': return 'success';
      case 'website': return 'info';
      default: return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in progress': return 'warning';
      case 'planned': return 'info';
      case 'research': return 'secondary';
      case 'completed': return 'success';
      default: return 'light';
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="mb-4">News & Updates</h1>
          <p className="lead">
            Stay up to date with the latest developments in the Fifth programming language.
          </p>
        </Col>
      </Row>

      {/* Latest News */}
      <Row>
        <Col lg={8}>
          <h2 className="mb-4">Latest News</h2>
          {newsItems.map((item) => (
            <Card key={item.id} className="mb-4 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <Badge bg={getCategoryColor(item.category)} className="mb-2">
                      {item.category}
                    </Badge>
                    <h4 className="card-title">{item.title}</h4>
                  </div>
                  <small className="text-muted">{item.date}</small>
                </div>
                <p className="card-text text-muted">
                  {item.excerpt}
                </p>
                <details>
                  <summary className="btn btn-outline-primary btn-sm">Read More</summary>
                  <div className="mt-3 pt-3 border-top">
                    <p>{item.content}</p>
                  </div>
                </details>
              </Card.Body>
            </Card>
          ))}

          {/* GitHub Activity */}
          <Card className="mt-4">
            <Card.Header>
              <h5 className="mb-0">
                <i className="bi bi-github me-2"></i>
                Recent GitHub Activity
              </h5>
            </Card.Header>
            <Card.Body>
              <p>
                For the most up-to-date information about Fifth development, check out the 
                <a href="https://github.com/aabs/fifthlang" target="_blank" rel="noopener noreferrer" className="ms-1">
                  GitHub repository
                </a>. You can:
              </p>
              <ul>
                <li>View the latest commits and changes</li>
                <li>Report bugs or request features</li>
                <li>Contribute to the project</li>
                <li>Join discussions about language design</li>
              </ul>
              <Button 
                variant="dark" 
                href="https://github.com/aabs/fifthlang" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github me-2"></i>
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Sidebar */}
        <Col lg={4}>
          {/* Roadmap */}
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">
                <i className="bi bi-map me-2"></i>
                Development Roadmap
              </h5>
            </Card.Header>
            <Card.Body>
              {roadmapItems.map((item, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0">{item.title}</h6>
                    <Badge bg={getStatusColor(item.status)} text={getStatusColor(item.status) === 'light' ? 'dark' : 'white'}>
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-muted small mb-0">{item.description}</p>
                  {index < roadmapItems.length - 1 && <hr className="my-2" />}
                </div>
              ))}
            </Card.Body>
          </Card>

          {/* Quick Links */}
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">
                <i className="bi bi-link-45deg me-2"></i>
                Quick Links
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" href="https://github.com/aabs/fifthlang/releases" target="_blank">
                  <i className="bi bi-download me-2"></i>
                  Latest Release
                </Button>
                <Button variant="outline-secondary" href="https://github.com/aabs/fifthlang/issues" target="_blank">
                  <i className="bi bi-bug me-2"></i>
                  Report Issues
                </Button>
                <Button variant="outline-info" href="https://github.com/aabs/fifthlang/discussions" target="_blank">
                  <i className="bi bi-chat-dots me-2"></i>
                  Discussions
                </Button>
                <Button variant="outline-warning" href="https://github.com/aabs/fifthlang/wiki" target="_blank">
                  <i className="bi bi-book me-2"></i>
                  Wiki
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* Statistics */}
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="bi bi-graph-up me-2"></i>
                Project Stats
              </h5>
            </Card.Header>
            <Card.Body>
              <Row className="text-center">
                <Col xs={6}>
                  <div className="border-end">
                    <div className="h4 mb-0">
                      <i className="bi bi-star text-warning"></i>
                    </div>
                    <small className="text-muted">GitHub Stars</small>
                  </div>
                </Col>
                <Col xs={6}>
                  <div>
                    <div className="h4 mb-0">
                      <i className="bi bi-diagram-2 text-info"></i>
                    </div>
                    <small className="text-muted">Forks</small>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="text-center">
                <Col xs={6}>
                  <div className="border-end">
                    <div className="h4 mb-0">
                      <i className="bi bi-check-circle text-success"></i>
                    </div>
                    <small className="text-muted">Test Coverage</small>
                  </div>
                </Col>
                <Col xs={6}>
                  <div>
                    <div className="h4 mb-0">
                      <i className="bi bi-code-slash text-primary"></i>
                    </div>
                    <small className="text-muted">Languages</small>
                  </div>
                </Col>
              </Row>
              <div className="mt-3 text-center">
                <small className="text-muted">
                  Visit GitHub for live statistics
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default News;