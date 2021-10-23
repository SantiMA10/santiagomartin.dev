import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Container from '../../components/Container';
import MDXContainer from '../../components/MDXContainer';
import { GetContentBySlug, getContentBySlug } from '../../lib/content';

type Props = GetContentBySlug;

const BlogPost: NextPage<Props> = ({ source, metadata, githubUrl }: Props) => {
	return (
		<Container customMeta={{ ...metadata }}>
			<MDXContainer source={source} githubUrl={githubUrl} />
		</Container>
	);
};

export default BlogPost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};
