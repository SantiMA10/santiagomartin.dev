import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Container(): JSX.Element {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	// https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
	useEffect(() => setMounted(true), []);

	const router = useRouter();
	const meta = {
		title: 'Santiago Martín Agra – software engineer',
		description: `software engineer, TypeScript believer, and live code.`,
		image: 'https://santiagomartin.dev/favicon.png',
		type: 'website',
	};

	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:url" content={`https://santiagomartin.dev${router.asPath}`} />
				<link rel="canonical" href={`https://santiagomartin.dev${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Santiago Martín Agra" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SantiMA10b" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
			</Head>

			<div className="flex items-center flex-col flex-grow">
				{/* https://github.com/leerob/leerob.io/blob/main/components/Container.tsx#L83 */}
				<button
					aria-label="Toggle Dark Mode"
					type="button"
					className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
					onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
				>
					{mounted && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							className="w-5 h-5 text-gray-800 dark:text-gray-200"
						>
							{resolvedTheme === 'dark' ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							)}
						</svg>
					)}
				</button>
			</div>
		</div>
	);
}
