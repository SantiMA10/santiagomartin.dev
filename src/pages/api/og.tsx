import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
	runtime: 'experimental-edge',
};

const font = fetch(
	new URL('../../../public/fonts/JetBrainsMono-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest): Promise<ImageResponse> {
	const fontData = await font;

	const { searchParams } = req.nextUrl;
	const title = searchParams.get('title');

	try {
		const response = new ImageResponse(
			(
				<div
					style={{
						backgroundColor: '#000000',
						backgroundImage: 'radial-gradient(circle at 15px 15px, #3d3d3d 4%, transparent 0%)',
						backgroundSize: '20px 20px',
						color: 'white',
						width: '100%',
						height: '100%',
						display: 'flex',
						fontFamily: '"JetBrains Mono"',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div style={{ display: 'flex', fontSize: 64, paddingLeft: 24 }}>✍️ {title}</div>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src="https://raw.githubusercontent.com/SantiMA10/SantiMA10/main/.github/avatar.png" />
				</div>
			),
			{
				width: 1200,
				height: 600,
				fonts: [
					{
						name: 'JetBrains Mono',
						data: fontData,
						style: 'normal',
					},
				],
			},
		);

		return response;
	} catch (error) {
		console.error(error);

		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
