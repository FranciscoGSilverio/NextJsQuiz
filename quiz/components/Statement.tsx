import * as React from "react";
import styles from "../styles/Statement.module.css";

interface StatementProps {
  text: string;
}

const Statement = ({ text }: StatementProps) => {
  return (
    <div className={styles.statement}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Statement;
