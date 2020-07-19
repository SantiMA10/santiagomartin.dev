import { Repository } from "./Repository";
import { PostEntity } from "../entities/Post";
import { DateTime } from "luxon";
import { HttpDriver, HttpDriverFormats } from "./drivers/HttpDriver";

export class MediumPostRepository implements Repository<PostEntity> {
  public constructor(private httpDriver: HttpDriver = new HttpDriver()) {}

  public async getAll(): Promise<PostEntity[]> {
    const textResponse: string = await this.httpDriver.get(
      "https://medium.com/@santi?format=json",
      {
        format: HttpDriverFormats.TEXT,
      }
    );

    const {
      payload: {
        references: { Post: mediumPosts },
      },
    } = JSON.parse(textResponse.replace("])}while(1);</x>", ""));

    return Object.keys(mediumPosts).map((key) => {
      const {
        title,
        firstPublishedAt,
        uniqueSlug,
        detectedLanguage,
      } = mediumPosts[key];

      return {
        time: DateTime.fromMillis(firstPublishedAt).toFormat("MMM yyyy"),
        url: `https://medium.com/@Santi/${uniqueSlug}`,
        key,
        title,
        detectedLanguage,
      };
    });
  }
}
