import { ReactElement, ReactNode } from 'react';

interface Props {
	nodeKey: string;
	children: ReactNode;
}

export default function Quote({ nodeKey, children }: Props): ReactElement {
	return (
		<div className="border-l-2 pl-4 italic mt-2 mb-2 sm:-ml-4" key={nodeKey}>
			{children}
		</div>
	);
}
