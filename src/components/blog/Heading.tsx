import { createElement, ReactElement, ReactNode } from 'react';

interface Props {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: ReactNode;
	nodeKey?: string;
}

export default function Heading(props: Props): ReactElement {
	const { children, level, nodeKey } = props;

	const styles = {
		1: 'font-bold text-3xl sm:text-4xl',
		2: 'font-bold text-xl sm:text-2xl',
		3: 'font-bold text-lg sm:text-xl',
		4: 'font-bold text-base sm:text-lg',
		5: 'font-bold sm:text-base',
		6: 'font-bold',
	};

	return createElement(`h${level}`, {
		key: nodeKey,
		className: styles[level],
		children,
	});
}
