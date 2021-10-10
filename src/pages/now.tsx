import type { GetStaticProps, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import Container from '../components/Container';
import MDXContainer from '../components/MDXContainer';
import getContentBySlug from '../lib/content';

interface Props {
	metadata: Record<string, string>;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Now: NextPage<Props> = ({ source, metadata }: Props) => {
	return (
		<Container customMeta={{ ...metadata }}>
			<MDXContainer source={source} />
		</Container>
	);
};

export default Now;

export const getStaticProps: GetStaticProps = async () => {
	const { metadata, source } = await getContentBySlug('now');

	return {
		props: {
			metadata,
			source,
		},
	};
};
