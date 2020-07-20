import "../css/tailwind.css";
import "../css/global.css";
import "../../node_modules/react-typist/dist/Typist.css";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { initFirebase } from "../services/initFirebase";
import Head from "next/head";
import "highlight.js/styles/github.css";

export function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <>
      <Head>
        <meta name="author" content="Santi M.A."></meta>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
