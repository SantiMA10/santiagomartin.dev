import { graphql } from "@octokit/graphql";
import { SideProject } from "../entities/SideProject";
import shuffle from "array-shuffle";

type Response = {
  projects: SideProject[];
};

export const getProjectsFromGitHub = async (): Promise<SideProject[]> => {
  const {
    user: {
      pinnedItems: { nodes },
    },
  } = await graphql(
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
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  return nodes.map(({ id, name, homepageUrl, description, url }) => ({
    id,
    title: {
      text: name.replace(/-/g, " "),
      url: homepageUrl ?? url,
    },
    description,
    code: url,
  }));
};

export const getSideProjects = async (): Promise<Response> => {
  return {
    projects: shuffle([
      ...(await getProjectsFromGitHub()),
      {
        id: "mnvbmcnb",
        title: {
          text: "E-Sports Calendar",
          url: "https://esportscalendar.app",
        },
        description: "🕹 An eSports calendar app",
      },
      {
        id: "esto-se-come",
        title: {
          text: "Share Links",
          url: "https://sharelinks.app",
        },
        description: "🔗 Create and share link lists, quick and easy",
      },
      {
        id: "pebble",
        title: {
          text: "YouWatch",
        },
        description: "⌚️ A watch face for Pebble",
        code: "https://github.com/SantiMA10/YouWatch",
      },
    ]),
  };
};
