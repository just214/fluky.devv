import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "./button";
import PieChart from "react-minimal-pie-chart";
import { motion } from "framer-motion";

const Score = styled.p`
  font-size: 7rem;
  font-weight: bold;
  color: ${({ theme }) => theme.lightblue};
  padding: 0px;
  margin: 20px 0px;
  padding-top: 50px;
`;

const P = styled.p<{ color: string }>`
  font-size: 20px;
  margin: 5px;
  border-radius: 2px;
  padding: 10px 0px;
  display: flex;
  align-items: flex-start;
  span:first-of-type {
    color: white;
    font-weight: bold;
    padding-right: 8px;
  }
  span:last-of-type {
    font-weight: bold;
    color: ${props => props.color || "#333"};
  }
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
        padding: 10px;
        border-radius: 10px;
        margin-top: 30px;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
      `}
    >
      <motion.div
        animate={{ rotate: ["360deg", "-90deg"] }}
        transition={{ duration: 1 }}
        style={{ margin: "0 auto" }}
      >
        <PieChart
          data={data}
          segmentsStyle={{ transition: "stroke .3s" }}
          animate
          style={{
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
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
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, delay: 0.75 }}
      >
        <Score>{score}%</Score>
        <br />
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          <P color="#53c41a">
            <span>Correct:</span> <span>{correctCount}</span>
          </P>
          <P color="#f5222d">
            <span>Incorrect:</span> <span>{incorrectCount}</span>
          </P>
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
