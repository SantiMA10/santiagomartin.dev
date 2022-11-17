import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import Container from '../components/Container';
import MDXContainer from '../components/OldMDXContainer';
import { GetContentBySlug, getContentBySlug } from '../lib/content';

type Props = GetContentBySlug;

const Uses: NextPage<Props> = ({ source, metadata, githubUrl }: Props) => {
	return (
		<Container customMeta={{ ...metadata }}>
			<MDXContainer source={source} githubUrl={githubUrl} />
		</Container>
	);
};

export default Uses;

export const getStaticProps: GetStaticProps = async () => {
	const { metadata, source, githubUrl } = await getContentBySlug('uses');

	return {
		props: {
			githubUrl,
			metadata,
			source,
		},
	};
};
