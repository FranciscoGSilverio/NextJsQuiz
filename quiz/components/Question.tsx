import React from "react";
import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css";
import Statement from "./Statement";

interface QuestionProps {
  value: QuestionModel;
}

const Question = (props: QuestionProps) => {
  return (
    <div className={styles.question}>
      <Statement text={props.value.statement} />
    </div>
  );
};

export default Question;
