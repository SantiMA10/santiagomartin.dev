import { SideProject } from "../entities/SideProject";
import { Talk } from "../entities/Talk";
import Link from "next/link";

interface Props {
  talks: Talk[];
  limit?: number;
}

export function Talks({ talks, limit }: Props) {
  return (
    <section id="talks" className="mt-5">
      <h1 className="mb-4 font-bold">Talks</h1>
      <ul className="list-reset">
        {talks.slice(0, limit).map(({ id, time, event, talk }) => (
          <li key={id} className="sm:ml-5 mb-2">
            🗣 {time} -{" "}
            {event.url ? (
              <a href={event.url} target="_blank">
                {event.name}
              </a>
            ) : (
              event.name
            )}{" "}
            -{" "}
            {talk.url ? (
              <a href={talk.url} target="_blank">
                {talk.name}
              </a>
            ) : (
              talk.name
            )}
          </li>
        ))}
        {limit && (
          <li className="sm:ml-5 mb-2">
            <Link href="/talks">
              <a className="mb-2">More...</a>
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
