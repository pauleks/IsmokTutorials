import type { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "../../../utils/GetCategories";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const thing = getCategories();

  res.json(thing);
};

export default handler;
