import { useEffect } from "react";

function Error() {
  useEffect(() => {
    if (window) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }, []);

  return null;
}

export default Error;
