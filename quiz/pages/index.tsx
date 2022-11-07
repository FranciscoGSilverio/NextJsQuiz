import Question from "../components/Question";
import QuestionModel from "../model/question";
import AnswerModel from "../model/answer";

export default function Home() {
  const mockQuestion = new QuestionModel(
    10,
    "Qual time vai ser campeão do Major Rio?",
    [
      AnswerModel.wrong("Navi"),
      AnswerModel.wrong("Faze"),
      AnswerModel.wrong("Astralis"),
      AnswerModel.right("Furia"),
    ]
  );

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#6c54d8",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Question value={mockQuestion} />
    </div>
  );
}
