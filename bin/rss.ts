import { Feed } from 'feed';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getDocuments } from 'outstatic/server';

(async function run() {
	const author = {
		name: 'Santiago Martín Agra',
		email: 'web@santiagomartin.dev',
		link: 'https://santiagomartin.dev',
	};

	const feed = new Feed({
		title: '/blog - Santiago Martín',
		id: 'https://santiagomartin.dev/',
		link: 'https://santiagomartin.dev/',
		language: 'es',
		image: 'https://santiagomartin.dev/favicon.ico',
		favicon: 'https://santiagomartin.dev/favicon.ico',
		copyright: 'All rights reserved 2022, Santiago Martin',
		author,
		generator: 'https://github.com/SantiMA10/santiagomartin.dev',
	});

	const posts = getDocuments('posts', ['title', 'publishedAt', 'slug', 'description']);
	posts.forEach((post) => {
		feed.addItem({
			title: post.title,
			id: post.slug,
			link: `https://santiagomartin.dev/blog/${post.slug}`,
			description: post.description,
			author: [author],
			date: new Date(post.publishedAt),
		});
	});

	await writeFile(join(__dirname, '../public/rss.xml'), feed.atom1());
})();
