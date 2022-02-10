import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

import { Footer } from './Footer';
import NavBar from './NavBar';

interface Props {
	customMeta?: Record<string, string>;
}

export default function Container({ customMeta, children }: PropsWithChildren<Props>): JSX.Element {
	const router = useRouter();
	const meta = {
		title: 'Santiago Martín Agra – software engineer',
		description: `software engineer, TypeScript believer, and live code.`,
		image: 'https://santiagomartin.dev/favicon.png',
		type: 'website',
		...customMeta,
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
				<div className="w-11/12 sm:w-4/5 md:w-3/4 pt-10 pb-4 flex flex-col min-h-screen">
					<NavBar />
					<article className="prose max-w-none lg:prose-lg dark:prose-dark flex-1">
						{children}
					</article>
					<Footer />
				</div>
			</div>
		</div>
	);
}
