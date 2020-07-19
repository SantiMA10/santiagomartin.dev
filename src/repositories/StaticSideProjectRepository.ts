import { Repository } from "./Repository";
import { SideProject } from "../entities/SideProject";

export class StaticSideProjectRepository implements Repository<SideProject> {
  public async getAll(): Promise<SideProject[]> {
    return [
      {
        id: "mnvbmcnb",
        title: {
          text: "eSports Calendar",
          url: "https://esportscalendar.app",
        },
        description: "🕹 An eSports calendar app.",
      },
      {
        id: "esto-se-come",
        title: {
          text: "Share Links",
          url: "https://sharelinks.app",
        },
        description: "🔗 Create and share link lists, quick and easy.",
      },
      {
        id: "pebble",
        title: {
          text: "YouWatch",
        },
        description: "⌚️ A watch face for Pebble.",
        code: "https://github.com/SantiMA10/YouWatch",
      },
    ];
  }
}
