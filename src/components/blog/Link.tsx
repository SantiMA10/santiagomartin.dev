import { ReactElement, ReactNode } from 'react';

interface Props {
	nodeKey: string;
	children: ReactNode;
	href: string;
}

export default function Link({ nodeKey, children, href }: Props): ReactElement {
	return (
		<a
			key={nodeKey}
			href={href}
			className="break-all"
			target={href.includes('http') ? '_black' : null}
		>
			{children}
		</a>
	);
}
