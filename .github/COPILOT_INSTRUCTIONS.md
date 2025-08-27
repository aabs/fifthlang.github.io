
# Copilot Instructions for FifthLang Documentation Site

## Purpose

Ensure all code samples, documentation, and site features are accurate, up-to-date, and reflect the current state of the FifthLang codebase and its ecosystem.

## Site Overview

- **Type:** React single-page application (SPA)
- **Tech Stack:** React 19, TypeScript, Vite, React Bootstrap, Bootstrap Icons, PrismJS (for code highlighting), React Router
- **Structure:** Main content in `src/pages` and `src/components` (`.tsx` files)
- **Deployment:** Static site hosted via GitHub Pages (`vite.config.ts` sets `base` for subfolder deployment)
- **Testing & Linting:** TypeScript strict mode, ESLint (with React and TypeScript plugins), see `package.json` scripts

## How the Site Works

- **Routing:** Uses React Router for navigation between Home, Documentation, Tutorials, News, and About pages.
- **Styling:** Bootstrap 5 and Bootstrap Icons for UI components and icons.
- **Code Samples:** Displayed using a custom `CodeBlock` component, syntax highlighted via PrismJS.
- **Content:** All technical content and code samples must be sourced from the official FifthLang test suite.

## Development Workflow

1. **Install dependencies:**  
   `npm install`

2. **Run locally:**  
   `npm run dev` (starts Vite dev server with HMR)

3. **Build for production:**  
   `npm run build` (TypeScript build + Vite static build)

4. **Preview production build:**  
   `npm run preview`

5. **Lint code:**  
   `npm run lint` (uses ESLint with strict TypeScript and React rules)

6. **Deployment:**  
   - Output is static files, suitable for GitHub Pages.
   - Ensure `vite.config.ts` base path matches repo name for correct routing.

## Testing

- **Manual:**  
  - Run locally and verify navigation, code samples, and UI.
  - Check code samples for accuracy and syntax highlighting.
- **Linting:**  
  - Use ESLint to catch errors and enforce code style.
- **Type Checking:**  
  - TypeScript strict mode is enabled for all source files.

## Guidelines for Copilot

1. **Source of Truth**
   - All code samples must come from the official FifthLang test suite:
     [TestPrograms directory](https://github.com/aabs/fifthlang/tree/master/test/runtime-integration-tests/TestPrograms)
   - Do not invent, hallucinate, or extrapolate syntax or features not present in the test suite.

2. **Sample Selection**
   - Use the richest, positive examples for each syntax or feature.
   - Avoid negative or error/parsing test cases.
   - Prefer examples that demonstrate real, working language features.

3. **File Types**
   - Update code samples in all `.tsx` files, especially in `src/pages` and `src/components`.
   - Ensure language tags (e.g., `language="csharp"`) match the FifthLang syntax.

4. **Documentation Consistency**
   - When describing features, ensure the explanation matches the actual sample code.
   - If FifthLang syntax or features change, update samples and documentation to match the latest test suite.

5. **Review Process**
   - Periodically review the FifthLang test suite for new or updated examples.
   - Replace outdated samples promptly.

## Example Sources

- Basic: `arithmetic.5th`, `return_int.5th`
- BuiltIns: `string_output.5th`
- Classes: `class_with_function.5th`, `destructuring_example.5th`, `simple_class.5th`
- Collections: `array_sum.5th`, `list_access.5th`
- ControlFlow: `if_else_statement.5th`, `if_statement.5th`, `while_loop.5th`
- Functions: `overloaded_function.5th`, `recursive_function.5th`, `simple_function.5th`
- Syntax: `alias_basic.5th`, `block_multiple_statements.5th`, `call_multi_arg.5th`, `class_mixed_members.5th`, `expressions_precedence.5th`, `list_comprehension_simple.5th`, `stmt_if_with_else.5th`

## How to Update

1. Browse the [TestPrograms directory](https://github.com/aabs/fifthlang/tree/master/test/runtime-integration-tests/TestPrograms).
2. Select the most representative, positive example for the feature you wish to document.
3. Copy the code sample directly into your `.tsx` file, using the correct language tag.
4. Update any explanatory text to match the sample.
5. Commit changes with a message referencing the FifthLang test suite as the source.

---

By following these instructions, all content on this site will remain true to the FifthLang codebase and help users learn the language as it is actually implemented.
