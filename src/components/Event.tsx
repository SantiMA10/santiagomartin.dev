import { Event as EventEntity } from "../entities/Event";
import { DateTime } from "luxon";

export function Event({ event: { time, event } }: { event: EventEntity }) {
  return (
    <>
      🗓
      {DateTime.fromMillis(time).toFormat("MMM yyyy")} -{" "}
      {event.url ? (
        <a href={event.url} target="_blank">
          {event.name}
        </a>
      ) : (
        event.name
      )}
    </>
  );
}
