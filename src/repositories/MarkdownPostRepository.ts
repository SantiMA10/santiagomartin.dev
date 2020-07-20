import { Repository } from "./Repository";
import { PostEntity } from "../entities/Post";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { DateTime } from "luxon";

export class MarkdownPostRepository implements Repository<PostEntity> {
  public async getAll(): Promise<PostEntity[]> {
    const files = await fs.readdir(`${process.cwd()}/src/posts`);

    const posts = await Promise.all(
      files.map(async (filename) => {
        return this.getBySlug(filename.replace(".md", ""));
      })
    );

    return posts;
  }

  public async getBySlug(slug: string): Promise<PostEntity> {
    const file = await fs.readFile(`${process.cwd()}/src/posts/${slug}.md`);
    const {
      content,
      data: { title, date, spoiler, tags },
    } = matter(file.toString());

    return {
      key: slug,
      body: content,
      title,
      time: DateTime.fromFormat(date, "yyyy-MM-dd").toFormat("MMM yyyy"),
      spoiler,
      tags,
      detectedLanguage: "es",
      url: `/blog/${slug}`,
    };
  }
}
