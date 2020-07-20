import { NextApiRequest, NextApiResponse } from "next";
import { GetPosts } from "../../useCases/GetPosts";
import { MarkdownPostRepository } from "../../repositories/MarkdownPostRepository";

export default async function sitemap(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await new MarkdownPostRepository().getAll();
  const postsSitemap = posts.map((post) => {
    return `<url>
    <loc>https://santiagomartin.dev${post.url}</loc>
    <lastmod>${post.time}</lastmod>
    <priority>0.50</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://santiagomartin.dev/</loc>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://www.santiagomartin.dev/community</loc>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.santiagomartin.dev/side-projects</loc>
      <priority>0.80</priority>
    </url>
    ${postsSitemap}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
