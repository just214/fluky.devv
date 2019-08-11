import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "antd/es/button";

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
        padding: 20px;
        border-radius: 10px;
        margin-top: 50px;
      `}
    >
      <h1>
        Final Score: <Span>{score}%</Span>
      </h1>
      <br />
      <h3>
        Correct Answers: <Span>{correctCount}</Span>
      </h3>
      <br />
      <h3>
        Incorrect Answers: <Span>{incorrectCount}</Span>
      </h3>
      <br />

      <Link to="/">
        <Button type="primary" ghost>
          Done
        </Button>
      </Link>
    </div>
  );
};

export default QuizResults;
