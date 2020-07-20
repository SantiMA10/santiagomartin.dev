import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  value: string;
  language?: string;
  nodeKey: string;
}

export default function CodeBlock({ language, value, nodeKey }: Props) {
  return (
    <SyntaxHighlighter
      key={nodeKey}
      language={language}
      showLineNumbers={language !== "sh"}
      style={atomDark}
    >
      {value}
    </SyntaxHighlighter>
  );
}
