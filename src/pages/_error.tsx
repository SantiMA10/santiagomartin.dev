import { ReactElement, useEffect } from "react";

function Error(): ReactElement {
  useEffect(() => {
    if (window) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }, []);

  return null;
}

export default Error;
