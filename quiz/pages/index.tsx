import Question from "../components/Question";
import styles from "../styles/Home.module.css";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

const Home = () => {
  const question: QuestionModel = new QuestionModel(
    10,
    "Qual o time do criador do jogo?",
    [
      AnswerModel.wrong("Flamengo"),
      AnswerModel.wrong("Palmeiras"),
      AnswerModel.wrong("Cruzeiro"),
      AnswerModel.right("Corinthians"),
    ]
  );

  return <Question value={question} />;
};

export default Home;
