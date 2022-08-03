import { getCategoriesOverview } from "../../lib/lessons";
3;
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const thing = getCategoriesOverview();

  res.json(thing);
};

export default handler;
