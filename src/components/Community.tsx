import Link from 'next/link';
import { ReactElement } from 'react';

import { Event as EventEntity } from '../entities/Event';
import { Talk as TalkEntity } from '../entities/Talk';
import { Event } from './Event';
import { Talk } from './Talk';

interface Props {
	talks: TalkEntity[];
	events: EventEntity[];
	limit?: number;
}

export function Community({ talks, limit, events }: Props): ReactElement {
	const community = [
		...(talks || []).map((talk) => ({ type: 'talk', ...talk })),
		...(events || []).map((event) => ({ type: 'event', ...event })),
	].sort((a, b) => (a.time > b.time ? -1 : 1));

	return (
		<section id="talks" className="mt-5">
			<h1 className="mb-4 font-bold">Community</h1>
			<ul className="list-reset">
				{community.slice(0, limit).map((item: TalkEntity | EventEntity) => {
					const { id } = item;

					return (
						<li key={id} className="sm:ml-5 mb-2">
							{item['type'] === 'event' ? (
								<Event event={item as EventEntity} />
							) : (
								<Talk talk={item as TalkEntity} />
							)}
						</li>
					);
				})}
				{limit && (
					<li className="sm:ml-5 mb-2">
						<Link href="/community">
							<a className="mb-2">More...</a>
						</Link>
					</li>
				)}
			</ul>
		</section>
	);
}
