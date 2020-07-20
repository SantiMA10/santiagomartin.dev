import { ReactChildren, ReactNode } from "react";

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

export default function Heading({ children, level }: Props) {
  const styles = {
    1: "font-bold text-4xl",
    2: "font-bold text-3xl",
    3: "font-bold text-2xl",
    4: "font-bold text-xl",
    5: "font-bold text-lg",
    6: "font-bold text-base",
  };

  return <h1 className={styles[level]}>{children}</h1>;
}
