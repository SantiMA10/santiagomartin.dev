import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { AnchorHTMLAttributes, ComponentProps, CSSProperties, DetailedHTMLProps } from 'react';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
	img: (props: ComponentProps<typeof Image> & { style?: CSSProperties }) => {
		if (props.src.toString().includes('http') && typeof props.src === 'string') {
			return (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					src={props.src}
					alt={props?.alt}
					width={props?.width}
					height={props?.height}
					style={props?.style}
				/>
			);
		}

		return <Image alt={props.alt} layout="responsive" loading="lazy" {...props} />;
	},
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
