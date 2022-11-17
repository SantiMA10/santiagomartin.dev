import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getDocumentBySlug, getDocumentPaths } from 'outstatic/server';

import Container from '../../components/Container';
import MDXContainer from '../../components/OutstaticMDXContainer';

interface Props {
	page: {
		content: MDXRemoteSerializeResult<Record<string, unknown>>;
	};
	githubUrl: string;
}

const BlogPost: NextPage<Props> = ({ page, githubUrl }: Props) => {
	const { content, ...meta } = page;

	return (
		<Container customMeta={{ ...meta }}>
			{page.content && <MDXContainer source={content} githubUrl={githubUrl} />}
		</Container>
	);
};

export default BlogPost;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	if (typeof params?.slug !== 'string') {
		return {
			props: {},
			notFound: true,
		};
	}

	try {
		const page = getDocumentBySlug('posts', params.slug, [
			'title',
			'publishedAt',
			'slug',
			'content',
		]);

		return {
			props: {
				page: {
					...page,
					content: await serialize(page.content),
				},
				githubUrl: `https://github.com/SantiMA10/santiagomartin.dev/edit/main/data/outstatic/content/posts/${params.slug}.md`,
			},
		};
	} catch {
		return {
			props: {},
			notFound: true,
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: getDocumentPaths('posts'),
		fallback: false,
	};
};
