import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { funky } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  value: string;
}
const CodeBlock: React.FC<CodeBlockProps> = ({ language = "tsx", value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={funky}
      customStyle={{
        padding: "10px",
        backgroundColor: "inherit",
        lineHeight: "35px",
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
