import { PostEntity } from "../entities/Post";
import { DateTime } from "luxon";
import { SideProject } from "../entities/SideProject";

type Response = {
  projects: SideProject[];
};

export const getSideProjects = async (): Promise<Response> => {
  return {
    projects: [
      {
        id: "klgfld",
        title: {
          text: "DevOps for Stream Deck",
          url: "https://github.com/SantiMA10/devops-streamdeck",
        },
        description:
          "Check the status of your GitLab CI, GitHub Actions, Netlify and Vercel",
        code: "https://github.com/SantiMA10/devops-streamdeck",
      },
      {
        id: "klgfdkgjfs",
        title: {
          text: "Excuse generator",
          url:
            "https://alexa.amazon.es/spa/index.html#skills/dp/B07HY37SP6/?ref=skill_dsk_skb_sr_0&qid=1546168908",
        },
        description: "A simple Alexa Skill",
      },
      {
        id: "mnvbmcnb",
        title: {
          text: "E-Sports Calendar",
          url: "https://esportscalendar.app",
        },
        description: "A spanish esports calendar app",
      },
      {
        id: "esto-se-come",
        title: {
          text: "Share Links",
          url: "https://sharelinks.app",
        },
        description: "Create and share link lists, quick and easy",
      },
      {
        id: "bla.bla",
        title: {
          text: "Excuse generator",
          url:
            "https://alexa.amazon.es/spa/index.html#skills/dp/B07HY37SP6/?ref=skill_dsk_skb_sr_0&qid=1546168908",
        },
        description: "A simple Action on Google",
        code: "https://github.com/SantiMA10/excuse-generator",
      },
      {
        id: "pebble",
        title: {
          text: "YouWatch",
        },
        description: "A watchface for Pebble",
        code: "https://github.com/SantiMA10/YouWatch",
      },
    ],
  };
};
