import { GitHubSideProjectRepository } from "../../src/repositories/GitHubSideProjectRepository";
import { GitHubDriver } from "../../src/repositories/drivers/GitHubDriver";

describe("GitHubSideProjectRepository", () => {
  it("uses the GitHubDriver correctly", async () => {
    const githubDriver = ({
      getPinnedRepositories: jest.fn(async () => []),
    } as unknown) as GitHubDriver;
    const subject = new GitHubSideProjectRepository(githubDriver);

    await subject.getAll();

    expect(githubDriver.getPinnedRepositories).toHaveBeenCalledWith();
  });

  it("transform the GitHubRepository into a SideProject", async () => {
    const githubDriver = ({
      getPinnedRepositories: jest.fn(async () => [
        {
          id: "pepe",
          name: "megaproject",
          homepageUrl: "https://github.com/santima10/santiagomartin.dev",
          description: "blabla",
          url: "https://santiagomartin.dev",
        },
      ]),
    } as unknown) as GitHubDriver;

    const subject = new GitHubSideProjectRepository(githubDriver);

    const sideProjects = await subject.getAll();

    expect(sideProjects).toEqual(
      expect.arrayContaining([
        {
          id: "pepe",
          title: {
            text: "megaproject",
            url: "https://github.com/santima10/santiagomartin.dev",
          },
          description: "blabla",
          code: "https://santiagomartin.dev",
        },
      ])
    );
  });
});
