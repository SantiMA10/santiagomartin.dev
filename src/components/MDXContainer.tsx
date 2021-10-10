import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { AnchorHTMLAttributes, ComponentProps, DetailedHTMLProps } from 'react';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	githubUrl?: string;
}

const components = {
	img: (props: ComponentProps<typeof Image> & { style?: string }) => {
		if (props.src.toString().includes('http') && typeof props.src === 'string') {
			const styles = props.style?.split(';').reduce((all, style) => {
				const [name, value] = style.split(':');

				return {
					...all,
					[name]: value,
				};
			}, {});

			return (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					src={props.src}
					alt={props?.alt}
					width={props?.width}
					height={props?.height}
					style={styles}
				/>
			);
		}

		return <Image alt={props.alt} layout="responsive" loading="lazy" {...props} />;
	},
	a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
		if (props?.href?.includes('http')) {
			return <a {...props} target="_black" rel="noreferrer" />;
		}

		const { href, ...otherProps } = props;

		return (
			<Link href={href || '#'}>
				<a {...otherProps} />
			</Link>
		);
	},
};

export default function MDXContainer({ source, githubUrl }: Props): JSX.Element {
	return (
		<article className="prose max-w-none lg:prose-lg dark:prose-dark">
			<MDXRemote {...source} components={components} />

			{githubUrl && (
				<a className="mt-6 mb-6" href={githubUrl} target="_black" rel="noreferrer">
					Editar en GitHub
				</a>
			)}
		</article>
	);
}
