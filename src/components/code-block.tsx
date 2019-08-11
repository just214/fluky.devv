import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as selectedTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
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
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
