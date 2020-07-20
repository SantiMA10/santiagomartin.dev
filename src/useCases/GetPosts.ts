import { PostEntity } from "../entities/Post";
import { MarkdownPostRepository } from "../repositories/MarkdownPostRepository";
import { Repository } from "../repositories/Repository";

export class GetPosts {
  public constructor(
    private postRepository: Repository<
      PostEntity
    > = new MarkdownPostRepository()
  ) {}

  public async perform(): Promise<{ data: PostEntity[] }> {
    const posts = await this.postRepository.getAll().catch((e) => {
      console.error(e);
      return [];
    });

    return {
      data: posts,
    };
  }
}
