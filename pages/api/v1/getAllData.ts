import type { NextApiRequest, NextApiResponse } from "next";

import CategoriesData from "../../../data/Categories.json";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.json(CategoriesData);
};

export default handler;
