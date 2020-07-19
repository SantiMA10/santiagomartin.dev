import { Repository } from "./Repository";
import { SideProject } from "../entities/SideProject";
import { GitHubDriver } from "./drivers/GitHubDriver";

export class GitHubSideProjectRepository implements Repository<SideProject> {
  public constructor(private gitHubDriver: GitHubDriver) {}

  public async getAll(): Promise<SideProject[]> {
    const repositories = await this.gitHubDriver.getPinnedRepositories();

    return repositories.map(({ id, name, homepageUrl, description, url }) => ({
      id,
      title: {
        text: name.replace(/-/g, " "),
        url: homepageUrl ?? url,
      },
      description,
      code: url,
    }));
  }
}
