import { NextApiRequest, NextApiResponse } from "next";
import { getPostFromMedium } from "../../services/getPostFromMedium";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ posts: await getPostFromMedium() });
};
