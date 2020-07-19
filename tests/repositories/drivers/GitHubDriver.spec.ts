import { GitHubDriver } from "../../../src/repositories/drivers/GitHubDriver";

describe("GitHubDriver", () => {
  describe("#getPinnedRepositories", () => {
    it("calls GitHub with the proper GraphQL query", async () => {
      const graphql: any = jest.fn(async () => ({
        user: {
          pinnedItems: { nodes: [] },
        },
      }));
      const subject = new GitHubDriver(graphql, "token");

      await subject.getPinnedRepositories();

      expect(graphql).toHaveBeenCalledWith(
        expect.stringContaining("pinnedItems"),
        {
          headers: {
            authorization: `token token`,
          },
        }
      );
    });
  });
});
