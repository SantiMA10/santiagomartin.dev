import React, { ReactElement } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  value: string;
  language?: string;
  nodeKey: string;
}

export default function CodeBlock(props: Props): ReactElement {
  const { language, value, nodeKey } = props;

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
