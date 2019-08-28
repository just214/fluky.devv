import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "./button";
import PieChart from "react-minimal-pie-chart";
import { motion } from "framer-motion";

const H3 = styled.h3`
  font-size: 8rem;
  color: ${({ theme }) => theme.lightblue};
  padding: 0px;
  margin: 0px;
`;

const P = styled.p<{ color: string }>`
  font-size: 22px;
  font-weight: bold;
  padding: 0px 8px;
  margin: 5px;

  color: ${props => props.color || "#333"};
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
  const data = [
    {
      title: "Incorrect Answers",
      value: incorrectCount,
      color: "#f5222d",
      key: "Incorrect Answer",
    },
    {
      title: "Correct Answers",
      value: correctCount,
      color: "#53c41a",
      key: "Correct Answer",
    },
  ];
  return (
    <div
      css={`
        padding: 20px;
        border-radius: 10px;
        margin-top: 15px;
        flex-wrap: wrap;
        display: flex;
      `}
    >
      <motion.div animate={{ rotate: "360deg" }} transition={{ duration: 1 }}>
        <PieChart
          data={data}
          segmentsStyle={{ transition: "stroke .3s" }}
          animate
          style={{
            width: "100%",
            maxWidth: "400px",
          }}
          totalValue={correctCount + incorrectCount}
          rounded
          lineWidth={30}
        />
      </motion.div>
      <motion.div
        css={`
          flex: 1;
          text-align: center;
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <H3>{score}%</H3>
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          <P color="#53c41a">Correct: {correctCount} </P>
          <P color="#f5222d">Incorrect: {incorrectCount} </P>
        </div>

        <br />
        <Link to="/quizzes">
          <Button>Done</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default QuizResults;
