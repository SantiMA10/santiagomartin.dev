import { GetPosts } from "../../src/useCases/GetPosts";
import { MediumPostRepository } from "../../src/repositories/MediumPostRepository";

describe("GetPosts", () => {
  it("uses the 'MediumPostRepository'", async () => {
    const mediumPostRepository = ({
      getAll: jest.fn(async () => []),
    } as unknown) as MediumPostRepository;
    const subject = new GetPosts(mediumPostRepository);

    await subject.perform();

    expect(mediumPostRepository.getAll).toHaveBeenCalled();
  });

  it("returns an empty array if something goes wrong with the repository", async () => {
    const mediumPostRepository = ({
      getAll: jest.fn(async () => {
        throw new Error("Booom");
      }),
    } as unknown) as MediumPostRepository;
    const subject = new GetPosts(mediumPostRepository);

    const { data: posts } = await subject.perform();

    expect(posts).toEqual([]);
  });
});
