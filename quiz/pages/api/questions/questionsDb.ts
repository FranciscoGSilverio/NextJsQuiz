import AnswerModel from "../../../model/answer";
import QuestionModel from "../../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(300, "Qual o time do desenvolvedor do jogo?", [
    AnswerModel.wrong("Flamengo"),
    AnswerModel.wrong("São Paulo"),
    AnswerModel.wrong("Botafogo"),
    AnswerModel.right("Corinthians"),
  ]),

  new QuestionModel(254, "Qual a faculdade do desenvolvedor do jogo?", [
    AnswerModel.wrong("UNICAMP"),
    AnswerModel.wrong("UNIFEI"),
    AnswerModel.wrong("USP"),
    AnswerModel.right("INATEL"),
  ]),
  new QuestionModel(654, "Qual o nome da mãe do desenvolvedor?", [
    AnswerModel.wrong("Maria"),
    AnswerModel.wrong("Joana"),
    AnswerModel.wrong("Beatriz"),
    AnswerModel.right("Neide"),
  ]),
  new QuestionModel(242, "Qual o jogo favorito do desenvolvedor? ", [
    AnswerModel.wrong("Spider Man ps4"),
    AnswerModel.wrong("God of War 4"),
    AnswerModel.wrong("Red Dead Redemption 2"),
    AnswerModel.right("The Witcher 3"),
  ]),
  new QuestionModel(
    876,
    "Qual a empresa que o desenvolvedor trabalha no momento?",
    [
      AnswerModel.wrong("Tech for humans"),
      AnswerModel.wrong("PD soluções"),
      AnswerModel.wrong("ICC - Inatel"),
      AnswerModel.right("CrazyTechLabs"),
    ]
  ),
];

export default questions;
