import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import imageSize from 'rehype-img-size';

export interface GetContentBySlug {
	metadata: Record<string, string>;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export default async function getContentBySlug(slug: string): Promise<GetContentBySlug> {
	const fileContents = fs.readFileSync(path.join(process.cwd(), `/data/${slug}.mdx`), 'utf8');
	const { data, content } = matter(fileContents);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			// use the image size plugin, you can also specify which folder to load images from
			// in my case images are in /public/images/, so I just prepend 'public'
			rehypePlugins: [[imageSize, { dir: 'public' }]],
		},
	});

	return {
		metadata: data,
		source: mdxSource,
	};
}
