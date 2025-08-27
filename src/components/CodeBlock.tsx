import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, className = '' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`rounded ${className}`}>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;