import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface Props {
  value: string;
  language?: string;
}

export default function CodeBlock({ language, value }: Props) {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
}
