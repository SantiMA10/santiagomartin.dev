import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="mb-4">
      <div className="flex align-center justify-center">
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="https://twitter.com/SantiMA10"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
          />
          <span className="hidden md:block">Twitter</span>
        </a>
        <span className="ml-2 mr-2">•</span>
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="https://github.com/SantiMA10"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
          />
          <span className="hidden md:block">GitHub</span>
        </a>
        <span className="ml-2 mr-2">•</span>
        {new Date().getFullYear()}
        <span className="ml-2 mr-2">•</span>
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="https://twitch.tv/SantiMA10"
        >
          <FontAwesomeIcon
            icon={faTwitch}
            className="h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
          />
          <span className="hidden md:block">Twitch</span>
        </a>
        <span className="ml-2 mr-2">•</span>
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="mailto:hi@santiagomartin.dev"
        >
          <FontAwesomeIcon
            className="h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
            icon={faEnvelope}
          />
          <span className="hidden md:block">Email</span>
        </a>
      </div>
    </footer>
  );
}
