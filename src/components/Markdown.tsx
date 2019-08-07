import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

export interface MarkdownProps {
  source: string;
}
export const Markdown: React.FC<MarkdownProps> = ({ source }) => {
  return <ReactMarkdown source={source} renderers={{ code: CodeBlock }} />;
};

export default Markdown;
