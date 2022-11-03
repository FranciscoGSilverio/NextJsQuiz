import questions from "../questions/questionsDb";
import { NextApiRequest, NextApiResponse } from "next";
import { shuffle } from "../../../functions/shuffle";

export default function format(req: NextApiRequest, res: NextApiResponse) {
  const ids = questions.map((item) => item.id);

  res.status(200).json(shuffle(ids));
}
