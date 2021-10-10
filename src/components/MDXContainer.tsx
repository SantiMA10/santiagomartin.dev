import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { AnchorHTMLAttributes, ComponentProps, DetailedHTMLProps } from 'react';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
	img: (props: ComponentProps<typeof Image>) => (
		<Image alt={props.alt} layout="responsive" loading="lazy" {...props} />
	),
	a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
		if (props?.href?.includes('http')) {
			return <a {...props} target={'_black'} rel="noreferrer" />;
		}

		const { href, ...otherProps } = props;

		return (
			<Link href={href || '#'}>
				<a {...otherProps} />
			</Link>
		);
	},
};

export default function MDXContainer({ source }: Props): JSX.Element {
	return (
		<article className="prose max-w-none lg:prose-lg dark:prose-dark">
			<MDXRemote {...source} components={components} />
		</article>
	);
}
