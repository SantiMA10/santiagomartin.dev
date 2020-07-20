import { ReactNode, createElement } from "react";

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  nodeKey?: string;
}

export default function Heading({ children, level, nodeKey }: Props) {
  const styles = {
    1: "font-bold text-3xl sm:text-4xl",
    2: "font-bold text-2xl sm:text-3xl",
    3: "font-bold text-xl sm:text-2xl",
    4: "font-bold text-lg sm:text-xl",
    5: "font-bold text-base sm:text-lg",
    6: "font-bold sm:text-base",
  };

  return createElement(`h${level}`, {
    key: nodeKey,
    className: styles[level],
    children,
  });
}
