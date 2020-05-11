import { PostEntity } from "../entities/Post";
import { DateTime } from "luxon";

export const getPostFromMedium = async (): Promise<{ posts: PostEntity[] }> => {
  const response = await fetch("https://medium.com/@santi?format=json");

  if (!response.ok) {
    console.error("Unable to load post");
    return { posts: [] };
  }

  const {
    payload: {
      references: { Post: mediumPosts },
    },
  } = JSON.parse((await response.text()).replace("])}while(1);</x>", ""));

  const posts = Object.keys(mediumPosts).map((key) => {
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

  return { posts };
};
