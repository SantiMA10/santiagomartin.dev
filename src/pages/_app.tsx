import "../css/tailwind.css";
import "../css/global.css";

export function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col">
      <Component {...pageProps} />
      <footer className="flex-grow-0">
        <div className="flex align-center justify-center">
          <a target="_blank" href="https://twitter.com/SantiMA10">
            Twitter
          </a>
          <span className="ml-2 mr-2">•</span>
          <a target="_blank" href="https://github.com/SantiMA10">
            GitHub
          </a>
          <span className="ml-2 mr-2">•</span>
          {new Date().getFullYear()}
          <span className="ml-2 mr-2">•</span>
          <a target="_blank" href="https://twitch.tv/SantiMA10">
            Twitch
          </a>
          <span className="ml-2 mr-2">•</span>
          <a target="_blank" href="mailto:hi@santiagomartin.dev">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
