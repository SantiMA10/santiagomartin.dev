import { DateTime } from "luxon";
import { ReactElement } from "react";

import { Event as EventEntity } from "../entities/Event";

export function Event({
  event: { time, event },
}: {
  event: EventEntity;
}): ReactElement {
  return (
    <>
      🗓 {DateTime.fromMillis(time).toFormat("MMM yyyy")} -{" "}
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
