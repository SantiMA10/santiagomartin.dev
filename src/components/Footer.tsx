import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="mt-6 mb-4">
      <div className="flex align-center justify-center">
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="/twitter"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="h-4 md:h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
          />
          <span className="hidden md:block">Twitter</span>
        </a>
        <span className="ml-2 mr-2">•</span>
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="/github"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="h-4 md:h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
          />
          <span className="hidden md:block">GitHub</span>
        </a>
        <span className="ml-2 mr-2">•</span>
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="mailto:hi@santiagomartin.dev"
        >
          <FontAwesomeIcon
            className="h-4 md:h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
            icon={faEnvelope}
          />
          <span className="hidden md:block">Email</span>
        </a>
        <span className="ml-2 mr-2">•</span>
        <span className="text-xs md:text-base">{new Date().getFullYear()}</span>
        <span className="ml-2 mr-2">•</span>
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="/twitch"
        >
          <FontAwesomeIcon
            icon={faTwitch}
            className="h-4 md:h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
          />
          <span className="hidden md:block">Twitch</span>
        </a>
        <span className="ml-2 mr-2">•</span>
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="https://www.youtube.com/channel/UCFlKou_4Ow2vco5N4aCJZoA?sub_confirmation=1"
        >
          <FontAwesomeIcon
            className="h-4 md:h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
            icon={faYoutube}
          />
          <span className="hidden md:block">YouTube</span>
        </a>
        <span className="ml-2 mr-2">•</span>
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="https://discord.gg/KtzeRw"
        >
          <FontAwesomeIcon
            className="h-4 md:h-5 text-blue-500 no-underline hover:text-blue-800 hover:underline mr-1"
            icon={faDiscord}
          />
          <span className="hidden md:block">Discord</span>
        </a>
      </div>
    </footer>
  );
}
