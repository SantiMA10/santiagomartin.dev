import { PostEntity } from "../entities/Post";
import { MediumPostRepository } from "../repositories/MediumPostRepository";

export class GetPosts {
  public constructor(
    private mediumRepository: MediumPostRepository = new MediumPostRepository()
  ) {}

  public async perform(): Promise<{ data: PostEntity[] }> {
    const posts = await this.mediumRepository.getAll().catch((e) => {
      console.error(e);
      return [];
    });

    return {
      data: posts,
    };
  }
}
