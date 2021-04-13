---
author: Andrew Matthews
---
# The Fifth Programming Language

[Roadmap](/roadmap)&nbsp;&nbsp;&nbsp;[Getting Started](/getting-started) 

Fifth is a small, general purpose language designed to make working with RDF knowledge graphs easier.  
By making RDF graphs a first class part of the language, and by providing syntactic sugar that 
ought to be familiar to most programmers, I hope to:

- Drive RDF adoption
- Make RDF development the fastest way to work with graph data

```csharp
string main(){
  string greeting = "hello world!";
  print(greeting);
  return greeting;
}
```

Fifth builds on top of the .NET 5 runtime, and should be portable to anywhere you can run a .NET runtime.
Syntax design is still quite fluid, and most features are not present, but the language pipeline is mostly done. 

- [Download](#)
- [Docs](#)
  - [Language Specification](#)

## Fifth in a Nutshell

Not all of the following list are in the language yet.  This is the aim of the language.

- C Family syntax (expect curly braces)
- Native support for Knowledge Management
  - Supports W3C standards for RDF, SPARQL etc
- Multi-paradigm language:
  - Functional
  - Object Oriented
  - Semantic
- Low syntactic noise Functional language
  - tail call optimisation
  - lists and list comprehensions
  - pattern matching on function signatures
- Runs on .NET VM:
  - Compiled, not interpreted
  - Portable to MacOS, Windows, Linux and more
- Key Language features:
  - Strongly Typed
  - Type Inference
  - Lexically Scoped
  - Multipass Compiler written in C# 9/.NET 5
  - Statement Based


[![buy me a coffee](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/fifthl)
![Twitter Follow](https://img.shields.io/twitter/follow/aabs?style=social)
[![.NET](https://github.com/aabs/fifthlang/actions/workflows/dotnet.yml/badge.svg)](https://github.com/aabs/fifthlang/actions/workflows/dotnet.yml)
![GitHub](https://img.shields.io/github/license/aabs/fifthlang)
![GitHub Sponsors](https://img.shields.io/github/sponsors/aabs?style=social)

