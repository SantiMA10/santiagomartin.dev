import type { GetStaticProps, NextPage } from 'next';

import Container from '../components/Container';
import MDXContainer from '../components/OldMDXContainer';
import { GetContentBySlug, getContentBySlug } from '../lib/content';

type Props = GetContentBySlug;

const Now: NextPage<Props> = ({ source, metadata, githubUrl }: Props) => {
	return (
		<Container customMeta={{ ...metadata }}>
			<MDXContainer source={source} githubUrl={githubUrl} />
		</Container>
	);
};

export default Now;

export const getStaticProps: GetStaticProps = async () => {
	const { metadata, source, githubUrl } = await getContentBySlug('now');

	return {
		props: {
			githubUrl,
			metadata,
			source,
		},
	};
};
