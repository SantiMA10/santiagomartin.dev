import { ReactChild } from "react";
import Link from "next/link";

interface Props {
  children: ReactChild | ReactChild[];
  showGoBack?: boolean;
}

export function Layout({ children, showGoBack }: Props) {
  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="w-3/4 mt-10 flex flex-col">
        {children}
        {showGoBack && (
          <Link href="/">
            <a className="mb-2">← Go back home</a>
          </Link>
        )}
      </div>
    </div>
  );
}
