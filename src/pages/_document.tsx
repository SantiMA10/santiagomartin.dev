import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="preload"
					href="/fonts/JetBrainsMono-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link href="./favicon.ico" rel="shortcut icon" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
