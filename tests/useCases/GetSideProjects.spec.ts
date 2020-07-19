import { GetSideProjects } from "../../src/useCases/GetSideProjects";
import { GitHubSideProjectRepository } from "../../src/repositories/GitHubSideProjectRepository";
import { SideProjectBuilder } from "../builders/SideProjectBuilder";

describe("GetSideProjects", () => {
  it("returns the side projects from both repositories: static and github", async () => {
    const staticSideProject = new SideProjectBuilder().get();
    const githubSideProject = new SideProjectBuilder().get();
    const staticRepository = {
      getAll: jest.fn(async () => [staticSideProject]),
    };
    const githubRepository = ({
      getAll: jest.fn(async () => [githubSideProject]),
    } as unknown) as GitHubSideProjectRepository;
    const subject = new GetSideProjects(staticRepository, githubRepository);

    const { data: projects } = await subject.perform();

    expect(projects).toEqual(
      expect.arrayContaining([staticSideProject, githubSideProject])
    );
  });

  it("returns only side projects from static if github throws an error", async () => {
    const staticSideProject = new SideProjectBuilder().get();
    const staticRepository = {
      getAll: jest.fn(async () => [staticSideProject]),
    };
    const githubRepository = ({
      getAll: jest.fn(async () => {
        throw new Error("boom");
      }),
    } as unknown) as GitHubSideProjectRepository;
    const subject = new GetSideProjects(staticRepository, githubRepository);

    const { data: projects } = await subject.perform();

    expect(projects).toEqual(expect.arrayContaining([staticSideProject]));
  });
});
