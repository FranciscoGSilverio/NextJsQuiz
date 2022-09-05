import { NextApiRequest, NextApiResponse } from "next";
import { sorting } from "../../functions/arrays";
import { questions } from "./questionsBase";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const ids = questions.map((item) => item.id);
  res.status(200).json(sorting(ids));
};
