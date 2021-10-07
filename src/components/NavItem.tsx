import cn from 'classnames';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

interface Props {
	href: string;
}

export default function NavItem({ children, href }: PropsWithChildren<Props>): JSX.Element {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<NextLink href={href}>
			<a
				className={cn(
					isActive
						? 'font-semibold text-gray-800 dark:text-gray-200'
						: 'font-normal text-gray-600 dark:text-gray-400',
					'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all',
				)}
			>
				<span className="capsize">{children}</span>
			</a>
		</NextLink>
	);
}
