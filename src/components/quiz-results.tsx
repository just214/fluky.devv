import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Emoji from "./emoji";
import Button from "./button";

const getEmoji = score => {
  if (score < 70) {
    return "😬";
  } else if (score <= 99) {
    return "🏆";
  } else if (score === 100) {
    return "🏆💯";
  }
};

const H3 = styled.h3`
  font-size: 1.8rem;
`;

const H4 = styled.h4`
  font-size: 1.4rem;
`;

const Span = styled.span`
  color: ${props => props.theme.blue};
  font-weight: bold;
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
        padding: 20px;
        border-radius: 10px;
        margin-top: 30px;
      `}
    >
      <H3>
        Final Score:{" "}
        <Span
          css={`
            margin-right: 10px;
            font-weight: bold;
          `}
        >
          {score}%
        </Span>
        <Emoji label="Thumbs up" symbol={getEmoji(score)} size={30} />
      </H3>

      <H4>
        Correct Answers: <Span>{correctCount}</Span>
      </H4>

      <H4>
        Incorrect Answers: <Span>{incorrectCount}</Span>
      </H4>
      <br />

      <Link to="/quizzes">
        <Button type="primary">Done</Button>
      </Link>
    </div>
  );
};

export default QuizResults;
