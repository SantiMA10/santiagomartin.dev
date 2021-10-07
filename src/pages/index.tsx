import type { NextPage } from 'next';
import { useTheme } from 'next-themes';

const Home: NextPage = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			The current theme is: {theme}
			<button onClick={() => setTheme('light')}>Light Mode</button>
			<button onClick={() => setTheme('dark')}>Dark Mode</button>
		</div>
	);
};

export default Home;
