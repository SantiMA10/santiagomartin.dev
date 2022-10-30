import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getDocuments } from 'outstatic/server';

import Container from '../../components/Container';

interface Author {
	name: string;
	picture: string;
}

interface Post {
	slug: string;
	title: string;
	publishedAt: string;
	coverImage: string;
	author: Author;
	description: string;
	ogImage: {
		url: string;
	};
	content: string;
}

const Blog: NextPage<{ allPosts: Post[] }> = ({ allPosts }: { allPosts: Post[] }) => {
	return (
		<Container customMeta={{ title: '/blog - Santiago Martín Agra' }}>
			Aquí tienes una lista con mis últimos articulos:
			<ul>
				{allPosts.map((post) => {
					return (
						<li key={post.slug}>
							{post.publishedAt} - <Link href={`/new-blog/${post.slug}`}>{post.title}</Link>
						</li>
					);
				})}
			</ul>
		</Container>
	);
};

export default Blog;

export const getStaticProps: GetStaticProps<{ allPosts: Post[] }> = async () => {
	const allPosts = getDocuments('posts', [
		'title',
		'publishedAt',
		'slug',
		'coverImage',
		'description',
		'author',
	]) as unknown as Post[];

	return {
		props: { allPosts },
	};
};
