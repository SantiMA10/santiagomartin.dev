import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';

import { BlogPosts } from '../../components/BlogPosts';
import { Layout } from '../../components/Layout';
import { PostEntity } from '../../entities/Post';
import { GetPosts } from '../../useCases/GetPosts';

interface Props {
	posts: PostEntity[];
}

export default function BlogIndex({ posts }: Props): ReactElement {
	return (
		<>
			<Head>
				<title>Blog | santiagomartin.dev</title>
			</Head>
			<Layout showGoBack>
				<BlogPosts posts={posts} />
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: posts } = await new GetPosts().perform();

	return {
		props: {
			posts,
		},
	};
};
