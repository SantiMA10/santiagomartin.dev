import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Container from '../../components/Container';
import MDXContainer from '../../components/OldMDXContainer';
import { GetContentBySlug, getContentBySlug } from '../../lib/content';

type Props = GetContentBySlug;

const BlogPost: NextPage<Props> = ({ source, metadata, githubUrl }: Props) => {
	return (
		<Container customMeta={{ ...metadata }}>
			{source && <MDXContainer source={source} githubUrl={githubUrl} />}
		</Container>
	);
};

export default BlogPost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { metadata, source, githubUrl } = await getContentBySlug(
			`posts/${params?.slug?.toString()}`,
		);

		return {
			props: {
				githubUrl,
				metadata,
				source,
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
		paths: [
			'/blog/que-opinais-de-github-actions',
			'/blog/hola-deno',
			'/blog/gitlab-github-streamdeck',
		],
		fallback: true,
	};
};
