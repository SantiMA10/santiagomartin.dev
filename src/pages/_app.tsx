import "../css/tailwind.css";
import "../css/global.css";
import { Footer } from "../components/Footer";

export function MyApp({ Component, pageProps }) {
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
