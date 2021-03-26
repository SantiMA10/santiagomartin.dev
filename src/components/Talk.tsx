import { DateTime } from 'luxon';
import { ReactElement } from 'react';

import { Talk as TalkEntity } from '../entities/Talk';

interface Props {
	talk: TalkEntity;
}

export function Talk(props: Props): ReactElement {
	const {
		talk: { time, event, talk },
	} = props;

	return (
		<>
			🗣 {DateTime.fromMillis(time).toFormat('MMM yyyy')} -{' '}
			{event.url ? (
				<a href={event.url} target="_blank" rel="noreferrer">
					{event.name}
				</a>
			) : (
				event.name
			)}
			{talk.url ? (
				<>
					{' - '}
					<a href={talk.url} target="_blank" rel="noreferrer">
						{talk.name}
					</a>
				</>
			) : (
				<>
					{' - '} {talk.name}
				</>
			)}
		</>
	);
}
