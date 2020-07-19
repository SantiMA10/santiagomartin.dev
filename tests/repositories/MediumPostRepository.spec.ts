import { MediumPostRepository } from "../../src/repositories/MediumPostRepository";
import { MediumPostBuilder } from "../builders/MediumPostBuilder";
import { PostEntity } from "../../src/entities/Post";
import { FakeHttpDriver } from "../../src/repositories/drivers/FakeHttpDriver";

const buildFakeHttpDriver = (post) => {
  const response = {
    payload: {
      references: { Post: { i: post } },
    },
  };
  const driver = new FakeHttpDriver();
  driver.get.mockImplementationOnce(
    async () => `])}while(1);</x>${JSON.stringify(response)}`
  );

  return driver;
};

describe("MediumPostRepository", () => {
  describe("#getAll", () => {
    it("uses the HttpDriver to get all the posts", async () => {
      const httpDriver = buildFakeHttpDriver(new MediumPostBuilder().get());
      const subject = new MediumPostRepository(httpDriver);

      await subject.getAll();

      expect(httpDriver.get).toHaveBeenCalledWith(
        "https://medium.com/@santi?format=json",
        {
          format: "text",
        }
      );
    });

    it("transform medium post in our 'PostEntry' interface", async () => {
      const post = new MediumPostBuilder().get();
      const httpDriver = buildFakeHttpDriver(post);
      const subject = new MediumPostRepository(httpDriver);

      const posts = await subject.getAll();

      expect(posts).toEqual(
        expect.arrayContaining([
          {
            time: "May 2020",
            url: `https://medium.com/@Santi/${post.uniqueSlug}`,
            key: "i",
            title: post.title,
            detectedLanguage: post.detectedLanguage,
          },
        ])
      );
    });
  });
});
