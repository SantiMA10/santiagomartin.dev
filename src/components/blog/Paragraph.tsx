import { ReactNode } from "react";

interface Props {
  nodeKey: string;
  children: ReactNode;
}

export default function Paragraph({ nodeKey, children }: Props) {
  return (
    <p className="pb-2 pt-2" key={nodeKey}>
      {children}
    </p>
  );
}
