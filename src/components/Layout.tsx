import Link from 'next/link';
import { ReactChild, ReactElement } from 'react';

interface Props {
	children: ReactChild | ReactChild[];
	showGoBack?: boolean;
}

export function Layout({ children, showGoBack }: Props): ReactElement {
	return (
		<div className="flex items-center flex-col flex-grow">
			<div className="w-11/12 sm:w-4/5 md:w-3/4 mt-10 flex flex-col">
				{children}
				{showGoBack && (
					<Link href="/">
						<a className="mb-2">← Go back home</a>
					</Link>
				)}
			</div>
		</div>
	);
}
