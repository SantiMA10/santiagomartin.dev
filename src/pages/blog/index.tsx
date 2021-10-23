import type { NextPage } from 'next';
import Link from 'next/link';

import Container from '../../components/Container';

const Blog: NextPage = () => {
	return (
		<Container customMeta={{ title: '/blog - Santiago Martín Agra' }}>
			Aquí tienes una lista con mis últimos articulos
			<ul>
				<li>
					May 2020 - <Link href="/blog/hola-deno">¡Hola deno! 🦕</Link>
				</li>
				<li>
					Mar 2020 -{' '}
					<Link href="/blog/gitlab-github-streamdeck">GitLab/GitHub en el Stream Deck</Link>
				</li>
				<li>
					Feb 2020 -{' '}
					<Link href="/blog/que-opinais-de-github-actions">¿Qué opináis de GitHub Actions?</Link>
				</li>
			</ul>
		</Container>
	);
};

export default Blog;
