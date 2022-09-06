import React from "react";
import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css";
import Answer from "./Answer";
import Statement from "./Statement";

interface QuestionProps {
  value: QuestionModel;
}

const Question = ({ value }: QuestionProps) => {
  const renderAnswers = () => {
    return value.answers.map((answer, index) => {
      return (
        <Answer
          key={index}
          value={answer}
          index={index}
          letter="A"
          letterBackgroundColor="#F2C866"
        />
      );
    });
  };

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContent}>
        <Statement text={value.statement} />
        {renderAnswers()}
      </div>
    </div>
  );
};

export default Question;
