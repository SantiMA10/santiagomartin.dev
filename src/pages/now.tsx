import type { GetStaticProps, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getDocumentBySlug } from 'outstatic/server';

import Container from '../components/Container';
import OutstaticMDXContainer from '../components/OutstaticMDXContainer';

interface Props {
	page: {
		content: MDXRemoteSerializeResult<Record<string, unknown>>;
	};
	githubUrl: string;
}

const Now: NextPage<Props> = ({ page, githubUrl }: Props) => {
	const { content, ...metadata } = page;

	return (
		<Container customMeta={{ ...metadata }}>
			<OutstaticMDXContainer source={content} githubUrl={githubUrl} />
		</Container>
	);
};

export default Now;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const page = getDocumentBySlug('pages', 'now', ['title', 'publishedAt', 'slug', 'content']);

	return {
		props: {
			page: {
				...page,
				content: await serialize(page.content),
			},
			githubUrl: `https://github.com/SantiMA10/santiagomartin.dev/edit/main/data/outstatic/content/pages/now.md`,
		},
	};
};
