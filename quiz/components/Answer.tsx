import React from "react";
import AnswerModel from "../model/answer";
import styles from "../styles/Answer.module.css";

interface answerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  letterBackgroundColor: string;
}

const Answer = ({
  value,
  index,
  letter,
  letterBackgroundColor,
}: answerProps) => {
  return (
    <div className={styles.answer}>
      <div className={styles.answerContent}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: letterBackgroundColor }}
          >
            {letter}
          </div>
          <div className={styles.value}>{value.value}</div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
};

export default Answer;
