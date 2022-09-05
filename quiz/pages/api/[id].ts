import { questions } from "./questionsBase";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const selectedId = +req.query.id;

  const filteredQuestion = questions.filter(
    (question) => question.id === selectedId
  );

  if (filteredQuestion.length === 1) {
    const selectedQuestion = filteredQuestion[0].sortAnswers();

    res.status(200).json(selectedQuestion.toObject());
  } else {
    res.status(204).send();
  }

  res.status(200).json(filteredQuestion[0].toObject());
};
