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
						? 'underline underline-thickness-thick underline-offset-medium font-semibold text-gray-800 underline-gray-800 dark:underline-gray-200 dark:text-gray-200'
						: 'hover:underline hover:underline-thickness-thick hover:underline-offset-medium font-normal text-gray-600 underline-gray-600 dark:underline-gray-400 dark:text-gray-400',
					'p-1 sm:px-3 sm:py-2 rounded-lg transition-all',
				)}
			>
				<span className="capsize">{children}</span>
			</a>
		</NextLink>
	);
}
