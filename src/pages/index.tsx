import type { GetStaticProps, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import Container from '../components/Container';
import MDXContainer from '../components/MDXContainer';
import { getContentByUrl } from '../lib/content';

interface Props {
	metadata: Record<string, string>;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Home: NextPage<Props> = ({ source, metadata }: Props) => {
	return (
		<Container customMeta={{ ...metadata }}>
			<MDXContainer source={source} />
		</Container>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const { metadata, source } = await getContentByUrl(
		'https://raw.githubusercontent.com/SantiMA10/SantiMA10/main/README.md',
	);

	return {
		props: {
			metadata,
			source,
		},
	};
};
