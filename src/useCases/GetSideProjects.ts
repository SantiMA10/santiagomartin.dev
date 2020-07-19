import shuffle from "array-shuffle";
import { SideProject } from "../entities/SideProject";
import { GitHubDriver } from "../repositories/drivers/GitHubDriver";
import { GitHubSideProjectRepository } from "../repositories/GitHubSideProjectRepository";
import { StaticSideProjectRepository } from "../repositories/StaticSideProjectRepository";

export class GetSideProjects {
  public constructor(
    private staticRepository: StaticSideProjectRepository = new StaticSideProjectRepository(),
    private githubRepository: GitHubSideProjectRepository = new GitHubSideProjectRepository(
      new GitHubDriver()
    )
  ) {}

  public async perform(): Promise<{ data: SideProject[] }> {
    const staticSideProjects = await this.staticRepository.getAll();
    const githubSideProjects = await this.githubRepository
      .getAll()
      .catch((e) => {
        console.error(e);
        return [];
      });

    return {
      data: shuffle([...staticSideProjects, ...githubSideProjects]),
    };
  }
}
