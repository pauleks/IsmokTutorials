import { NextApiRequest, NextApiResponse } from "next";
import { getLessons } from "../../../lib/getLessons";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const lessons = await getLessons();
  res.status(200).json(lessons);
}