import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import NavItem from './NavItem';

export default function NavBar(): JSX.Element {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	// https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
	useEffect(() => setMounted(true), []);

	return (
		<div className="flex justify-between mb-4">
			<div className="flex">
				<NavItem href="/">
					🏡 <span className="hidden sm:inline-block">Home</span>
				</NavItem>
				<NavItem href="/blog" subPaths>
					✍️ <span className="hidden sm:inline-block">/blog</span>
				</NavItem>
				<NavItem href="/now">
					📅 <span className="hidden sm:inline-block">/now</span>
				</NavItem>
			</div>
			<div className="flex">
				<button
					aria-label="Toggle Dark Mode"
					type="button"
					className="flex-end w-10 h-10 p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 flex align-center justify-center hover:ring-2 ring-gray-300 transition-all"
					onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
				>
					{mounted && resolvedTheme === 'dark' ? <span>☀️</span> : <span>🌙</span>}
				</button>
				<a
					className="flex-end w-30 h-10 p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 hover:ring-2 ring-gray-300"
					href="/rss.xml"
				>
					<span className="hidden sm:inline-block">🔔</span> RSS
				</a>
			</div>
		</div>
	);
}
