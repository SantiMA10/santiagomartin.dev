import { PostEntity } from "../entities/Post";
import { MediumPostRepository } from "../repositories/MediumPostRepository";
import { Repository } from "../repositories/Repository";
import { Features } from "../config/Features";
import { MarkdownPostRepository } from "../repositories/MarkdownPostRepository";

export class GetPosts {
  public constructor(
    private postRepository: Repository<PostEntity> = new MediumPostRepository()
  ) {
    if (Features.enableBlog()) {
      this.postRepository = new MarkdownPostRepository();
    }
  }

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
