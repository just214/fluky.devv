import React from "react";
import { Link } from "gatsby";

export interface QuizResultsProps {
  score: number;
  correctCount: number;
  incorrectCount: number;
  onConfirm: () => void;
}
export const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  correctCount,
  incorrectCount,
  onConfirm,
}) => {
  return (
    <div>
      <h3>Score: {score}</h3>
      <div>
        {correctCount}
        {incorrectCount}
      </div>
      <button onClick={onConfirm}>Done</button>
    </div>
  );
};

export default QuizResults;
