import { ReactElement, ReactNode } from "react";

interface Props {
  nodeKey: string;
  children: ReactNode;
}

export default function ListItem({ nodeKey, children }: Props): ReactElement {
  return (
    <li className="sm:ml-5 mb-2" key={nodeKey}>
      ► {children}
    </li>
  );
}
