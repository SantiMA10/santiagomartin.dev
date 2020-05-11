import { SideProject } from "../entities/SideProject";
import { Talk } from "../entities/Talk";

interface Props {
  talks: Talk[];
}

export function Talks({ talks }: Props) {
  return (
    <section id="talks" className="w-3/4 mt-5">
      <h1 className="mb-4 font-bold">Talks</h1>
      <ul className="list-reset">
        {talks.map(({ id, time, event, talk }) => (
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
      </ul>
    </section>
  );
}
