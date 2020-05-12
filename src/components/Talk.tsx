import { Talk as TalkEntity } from "../entities/Talk";
import { DateTime } from "luxon";

export function Talk({ talk: { time, event, talk } }: { talk: TalkEntity }) {
  return (
    <>
      🗣 {DateTime.fromMillis(time).toFormat("MMM yyyy")} -{" "}
      {event.url ? (
        <a href={event.url} target="_blank">
          {event.name}
        </a>
      ) : (
        event.name
      )}
      {talk.url ? (
        <>
          {" - "}
          <a href={talk.url} target="_blank">
            {talk.name}
          </a>
        </>
      ) : (
        <>
          {" - "} {talk.name}
        </>
      )}
    </>
  );
}
