import type { NextApiRequest, NextApiResponse } from "next";
import questions from "./questionsDb";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id ? +req.query.id : 0;

  const selectedQuestion = questions.filter((item) => item.id === id);

  if (selectedQuestion.length === 1) {
    res.status(200).json(selectedQuestion[0].shuffleAnswers().toObject());
  } else {
    res.status(404).send("Question id not found");
  }
}
