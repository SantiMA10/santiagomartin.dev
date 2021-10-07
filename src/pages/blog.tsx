import type { NextPage } from 'next';

import Container from '../components/Container';

const Blog: NextPage = () => {
	return (
		<Container customMeta={{ title: '/blog - Santiago Martín Agra' }}>
			¡Hola! Esto se supone que será mi blog
		</Container>
	);
};

export default Blog;
