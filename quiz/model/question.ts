import { shuffle } from "../functions/shuffle";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #answeredRight: boolean;
  // #answered: boolean

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[],
    answeredRight = false
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#answeredRight = answeredRight;
  }

  get id() {
    return this.#id;
  }

  get statement() {
    return this.#statement;
  }

  get answers() {
    return this.#answers;
  }

  answerWith(index: number): QuestionModel {
    const correctAnswer = this.#answers[index]?.right;

    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i;

      const shouldReveal = selectedAnswer || answer.right;

      return shouldReveal ? answer.reveal() : answer;
    });

    return new QuestionModel(this.id, this.statement, answers, correctAnswer);
  }

  shuffleAnswers(): QuestionModel {
    let shuffledAnswers = shuffle(this.#answers);
    return new QuestionModel(this.#id, this.#statement, shuffledAnswers);
  }

  get answeredRight() {
    return this.#answeredRight;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.reavealed) return true;
    }

    return false;
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answers: this.#answers.map((answer) => answer.toObject()),
      answeredRight: this.#answeredRight,
    };
  }
}
