import AnswerModel from "./answer";
import { sorting } from "../functions/arrays";

export default class QuestionModel {
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #rightAnswer: boolean;

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[],
    rightAnswer: boolean = false
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#rightAnswer = rightAnswer;
  }

  get id() {
    return this.#id;
  }

  get statement() {
    return this.#statement;
  }

  get rightAnswer() {
    return this.#rightAnswer;
  }

  get answers() {
    return this.#answers;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true;
    }
    return false;
  }

  answerWith(index: number): QuestionModel {
    const gotRight = this.#answers[index]?.isRight;
    const answers = this.#answers.map((item, i) => {
      const selectedAnswer = index === i;
      const shouldReview = selectedAnswer || item.isRight;
      return shouldReview ? item.reveal() : item;
    });

    return new QuestionModel(this.id, this.statement, answers, gotRight);
  }

  sortAnswers() {
    let sortedAnswers = sorting(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#statement,
      sortedAnswers,
      this.#rightAnswer
    );
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answers: this.#answers.map((response) => response.toObject()),
      rightAnswer: this.#rightAnswer,
    };
  }
}
