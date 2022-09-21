import type { NextApiRequest, NextApiResponse } from "next";

//import CategoriesData from "../../../data/Categories.json";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ hello: "world" });
};

export default handler;
