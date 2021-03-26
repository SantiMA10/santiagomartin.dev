import { ReactElement } from 'react';

interface Props {
	alt: string;
	src: string;
	nodeKey: string;
	title: string;
}

export function Image({ alt, src, nodeKey, title }: Props): ReactElement {
	if (title) {
		return (
			<div className="flex justify-center algin-center flex-col pb-4 pt-4">
				<div className="flex justify-center algin-center">
					<img key={nodeKey} alt={alt} src={src} />
				</div>
				<p className="text-center pt-2 italic">{title}</p>
			</div>
		);
	}

	return <img key={nodeKey} className="object-cover w-full h-64 pb-2 pt-2" alt={alt} src={src} />;
}
