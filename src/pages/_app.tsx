import "../css/tailwind.css";
import "../css/global.css";
import "../../node_modules/react-typist/dist/Typist.css";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { initFirebase } from "../services/initFirebase";

export function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
