import { Repository } from "./Repository";
import { PostEntity } from "../entities/Post";
import { promises as fs } from "fs";
import matter from "gray-matter";

export class MarkdownPostRepository implements Repository<PostEntity> {
  public async getAll(): Promise<PostEntity[]> {
    const file = await fs.readFile(
      `${process.cwd()}/src/posts/hello-deno/index.md`
    );
    const {
      content,
      data: { title, date: time, spoiler, tags },
    } = matter(file.toString());

    return [
      {
        key: "hello-deno",
        body: content,
        title,
        time,
        spoiler,
        tags,
        detectedLanguage: "es",
        url: "/hello-deno",
      },
    ];
  }
}
