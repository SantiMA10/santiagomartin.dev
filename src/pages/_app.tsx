import "../css/tailwind.css";
import "../css/global.css";
import "../../node_modules/react-typist/dist/Typist.css";
import "highlight.js/styles/github.css";

import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { ReactElement, useEffect } from "react";

import { Footer } from "../components/Footer";
import { initFirebase } from "../services/initFirebase";

export function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <>
      <Head>
        <meta name="author" content="Santiago M.A."></meta>
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
