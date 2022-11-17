import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getDocuments } from 'outstatic/server';

import Container from '../../components/Container';

interface Post {
	slug: string;
	title: string;
	publishedAt: string;
}

interface Props {
	allPosts: Post[];
}

const Blog: NextPage<Props> = ({ allPosts }: Props) => {
	return (
		<Container customMeta={{ title: '/blog - Santiago Martín Agra' }}>
			Aquí tienes una lista con mis últimos articulos:
			<ul>
				{allPosts.map((post) => {
					return (
						<li key={post.slug}>
							{new Intl.DateTimeFormat().format(new Date(post.publishedAt))} -{' '}
							<Link href={`/new-blog/${post.slug}`}>{post.title}</Link>
						</li>
					);
				})}
			</ul>
		</Container>
	);
};

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const allPosts = getDocuments('posts', ['title', 'publishedAt', 'slug']) as unknown as Post[];

	return {
		props: { allPosts },
	};
};
