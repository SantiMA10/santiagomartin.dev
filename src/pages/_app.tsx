import 'tailwindcss/tailwind.css';
import '../styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>

			<Analytics />
		</>
	);
}

export default MyApp;
