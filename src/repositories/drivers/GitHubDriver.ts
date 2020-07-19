import { graphql as github } from "@octokit/graphql";

interface GitHubRepository {
  id: string;
  name: string;
  homepageUrl: string;
  description: string;
  url: string;
}

export class GitHubDriver {
  constructor(
    private graphql: typeof github = github,
    private token: string = process.env.GITHUB_TOKEN
  ) {}

  public async getPinnedRepositories(): Promise<GitHubRepository[]> {
    const {
      user: {
        pinnedItems: { nodes },
      },
    } = await this.graphql(
      `
        query {
          user(login: "SantiMA10") {
            pinnedItems(last: 6, types: REPOSITORY) {
              totalCount
              nodes {
                ... on Repository {
                  id
                  description
                  homepageUrl
                  name
                  url
                }
              }
            }
          }
        }
      `,
      {
        headers: {
          authorization: `token ${this.token}`,
        },
      }
    );

    return nodes;
  }
}
