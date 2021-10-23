import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import imageSize from 'rehype-img-size';

export interface GetContentBySlug {
	metadata: Record<string, string>;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	githubUrl: string;
}

export interface GetContentBy {
	metadata: Record<string, string>;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export async function getContentBySlug(slug: string): Promise<GetContentBySlug> {
	const filePath = path.join(process.cwd(), `/data/${slug}.mdx`);
	if (!fs.existsSync(filePath)) {
		throw new Error('File not found');
	}

	const fileContents = fs.readFileSync(filePath, 'utf8');

	const { data, content } = matter(fileContents);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			// use the image size plugin, you can also specify which folder to load images from
			// in my case images are in /public/images/, so I just prepend 'public'
			rehypePlugins: [[imageSize, { dir: 'public' }]],
		},
	});

	return {
		githubUrl: `https://github.com/SantiMA10/santiagomartin.dev/edit/main/data/${slug}.mdx`,
		metadata: data,
		source: mdxSource,
	};
}

export async function getContentByUrl(url: string): Promise<GetContentBy> {
	const response = await fetch(url);
	const { data, content } = matter(await response.text());

	const mdxSource = await serialize(content);

	return {
		metadata: data,
		source: mdxSource,
	};
}
