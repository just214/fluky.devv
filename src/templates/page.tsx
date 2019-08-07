import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Question from "../components/Question";
import shuffle from "lodash/shuffle";
import Markdown from "../components/Markdown";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  height: 40px;
  width: 200px;
  font-size: 20px;
  border-radius: 20px;
  outline: 0;
`;

export const Page: React.FC = ({ location, data }) => {
  if (!data.allAirtable.edges.length) return null;
  const checkButtonRef = useRef(null);
  const nextQuestionButtonRef = useRef(null);
  const shuffledQuestions = shuffle(data.allAirtable.edges);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    shuffledQuestions[0].node
  );

  const dataLength = data.allAirtable.edges.length;

  const keycodeMap = {
    49: "1",
    50: "2",
    51: "3",
    52: "4",
  };

  const handleSetUser = value => {
    if (isQuestionAnswered) return;
    setUserAnswer(value);
  };

  useEffect(() => {
    setCurrentQuestion(shuffledQuestions[currentIndex].node);
  }, [currentIndex]);

  useEffect(() => {
    document.addEventListener("keypress", e => {
      if ([49, 50, 51, 52].includes(e.charCode)) {
        handleSetUser(keycodeMap[e.charCode]);
      }
    });
    return document.removeEventListener("keypress", () => {});
  }, []);
  3;

  const checkAnswer = () => {
    setIsQuestionAnswered(true);
  };

  const handleGoToNextQuestion = () => {
    if (currentIndex === dataLength - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(v => v + 1);
    }
    setIsQuestionAnswered(false);
    setUserAnswer(null);
    nextQuestionButtonRef.current.blur();
  };

  return (
    <Layout>
      <div
        css={`
          margin-bottom: 280px;
        `}
      >
        <Question
          data={currentQuestion.data}
          key={currentQuestion.data.Question}
          isAnswered={isQuestionAnswered}
          userAnswer={userAnswer}
          onSelection={answer => handleSetUser(answer)}
        />
        <br />
        {isQuestionAnswered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Markdown source={currentQuestion.data.Explanation} />
          </motion.div>
        )}
      </div>

      <div
        css={`
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {userAnswer && !isQuestionAnswered && (
          <Button
            autoFocus
            onClick={checkAnswer}
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{ scale: 1.2, opacity: 1 }}
            css={`
              &:focus {
                background: ${props => props.theme.green};
              }
            `}
            ref={checkButtonRef}
          >
            Check Answer
          </Button>
        )}

        {userAnswer && isQuestionAnswered && (
          <Button
            autoFocus
            ref={nextQuestionButtonRef}
            css={`
              &:focus {
                background: ${props => props.theme.green};
              }
            `}
            onClick={handleGoToNextQuestion}
          >
            Next Question
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query AllAirtableByCategory($category: String!) {
    allAirtable(
      filter: {
        table: { eq: "Questions" }
        fields: { category: { eq: $category } }
      }
    ) {
      edges {
        node {
          data {
            Type
            Difficulty
            Category
            Question
            Option1
            Option2
            Option3
            Option4
            Answer
            Explanation
          }
        }
      }
    }
  }
`;
