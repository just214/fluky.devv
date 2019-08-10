import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Span = styled.span`
  color: ${props => props.theme.blue};
`;

export interface QuizResultsProps {
  score: number;
  correctCount: number;
  incorrectCount: number;
}
export const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  correctCount,
  incorrectCount,
}) => {
  return (
    <div
      css={`
        background-color: #efefef;
        padding: 10px;
        border-radius: 10px;
      `}
    >
      <h1>
        Your Final Score: <Span>{score}%</Span>
      </h1>
      <h3>
        Correct Answers: <Span>{correctCount}</Span>
      </h3>
      <h3>
        Incorrect Answers: <Span>{incorrectCount}</Span>
      </h3>
      <br />
      <Link to="/">Done</Link>
    </div>
  );
};

export default QuizResults;
