import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import html from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import selectedTheme from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("css", css);

interface CodeBlockProps {
  language: string;
  value: string;
}
const CodeBlock: React.FC<CodeBlockProps> = ({ language = "tsx", value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={selectedTheme}
      customStyle={{
        margin: "10px",
        backgroundColor: "inherit",
        padding: "5px",
        overflowY: "scroll",
        height: "auto",
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
