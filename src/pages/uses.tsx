import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import Container from '../components/Container';
import MDXContainer from '../components/MDXContainer';
import { getContentBySlug } from '../lib/content';

interface Props {
	metadata: Record<string, string>;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Uses: NextPage<Props> = ({ source, metadata }: Props) => {
	return (
		<Container customMeta={{ ...metadata }}>
			<MDXContainer source={source} />
		</Container>
	);
};

export default Uses;

export const getStaticProps: GetStaticProps = async () => {
	const { metadata, source } = await getContentBySlug('uses');

	return {
		props: {
			metadata,
			source,
		},
	};
};
