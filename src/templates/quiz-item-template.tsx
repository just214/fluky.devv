import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SingleChoice from "../components/quiz-single-choice";
import shuffle from "lodash/shuffle";
import Markdown from "../components/markdown";
import Button from "../components/quiz-button";
import { motion } from "framer-motion";
import { Line } from "rc-progress";
import QuizResults from "../components/quiz-results";

const getFeedbackCorrect = () => {
  const options: string[] = [
    "Correct!",
    "Nailed it!",
    "Good job!",
    "Way to go!",
    "Great job!",
    "Well done!",
  ];
  const len = options.length;
  const randomIndex = Math.floor(Math.random() * len);
  return options[randomIndex];
};

const getFeedbackIncorrect = () => {
  const options: string[] = [
    "That's Incorrect.",
    "So close.",
    "Nice try.",
    "Better luck next time.",
    "Too bad.",
    "Nope, that's incorrect.",
  ];
  const len = options.length;
  const randomIndex = Math.floor(Math.random() * len);
  return options[randomIndex];
};

const keycodeMap = {
  49: "1",
  50: "2",
  51: "3",
  52: "4",
};

export const Page = ({ data }) => {
  if (!data.allAirtable.edges.length) return null;

  const [shuffledQuestions] = useState(shuffle(data.allAirtable.edges));
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const isQuestionAnsweredRef = useRef(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    shuffledQuestions[0].node
  );
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] = useState(
    0
  );
  const [
    questionsAnsweredIncorrectly,
    setQuestionsAnsweredIncorrectly,
  ] = useState(0);

  useEffect(() => {
    isQuestionAnsweredRef.current = isQuestionAnswered;
  }, [isQuestionAnswered]);

  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const dataLength = data.allAirtable.edges.length;

  const handleSetUserAnswer = value => {
    if (isQuestionAnswered) return;
    setUserAnswer(value);
  };

  useEffect(() => {
    setCurrentQuestion(shuffledQuestions[currentIndex].node);
  }, [currentIndex]);

  const checkAnswer = () => {
    if (!userAnswer) return;
    setIsQuestionAnswered(true);
    if (userAnswer === currentQuestion.data.Answer) {
      setQuestionsAnsweredCorrectly(v => v + 1);
    } else {
      setQuestionsAnsweredIncorrectly(v => v + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", e => {
      // 1,2,3,4
      if ([49, 50, 51, 52].includes(e.charCode)) {
        handleSetUserAnswer(keycodeMap[e.charCode]);
      } else if (e.charCode === 13) {
        if (!isQuestionAnsweredRef.current) {
          checkAnswer();
        }
      }
    });
    return document.removeEventListener("keypress", () => {});
  }, []);

  // function resetCounts() {
  //   setQuestionsAnsweredCorrectly(0);
  //   setQuestionsAnsweredIncorrectly(0);
  // }

  const handleGoToNextQuestion = () => {
    if (currentIndex === dataLength - 1) {
      setCurrentIndex(0);
      setIsQuizCompleted(true);
    } else {
      setCurrentIndex(v => v + 1);
    }
    setIsQuestionAnswered(false);
    setUserAnswer(null);
  };

  const answeredCount: number =
    questionsAnsweredCorrectly + questionsAnsweredIncorrectly;
  const percentageCorrect: number = questionsAnsweredCorrectly / answeredCount;
  const percentageFixed: number | string = percentageCorrect.toFixed(2);
  const score: number = Math.floor(+percentageFixed * 100);

  if (isQuizCompleted) {
    return (
      <Layout>
        <QuizResults
          score={score}
          correctCount={questionsAnsweredCorrectly}
          incorrectCount={questionsAnsweredIncorrectly}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        css={`
          margin-bottom: 280px;
        `}
      >
        <Line
          percent={(answeredCount / data.allAirtable.edges.length) * 100}
          strokeWidth={2}
          strokeColor={answeredCount ? "green" : "transparent"}
        />

        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 50px;
            h3 {
              margin: 5px;
            }
          `}
        >
          <div>{answeredCount > 0 && <h3>Score: {score}%</h3>}</div>

          <h3>
            {answeredCount}/{data.allAirtable.edges.length}
          </h3>
        </div>
        <SingleChoice
          data={currentQuestion.data}
          key={currentQuestion.data.Question}
          isAnswered={isQuestionAnswered}
          userAnswer={userAnswer}
          onSelection={answer => handleSetUserAnswer(answer)}
        />
        <br />
        {isQuestionAnswered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {userAnswer === currentQuestion.data.Answer && (
              <h2
                css={`
                  color: green;
                `}
              >
                {getFeedbackCorrect()}
              </h2>
            )}
            {userAnswer !== currentQuestion.data.Answer && (
              <h2
                css={`
                  color: tomato;
                `}
              >
                {getFeedbackIncorrect()}
              </h2>
            )}
            <Markdown source={currentQuestion.data.Explanation} />
          </motion.div>
        )}
      </div>

      {/* <div
        css={`
          position: fixed;
          bottom: 40px;
          right: 30px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      > */}
      {userAnswer && !isQuestionAnswered && (
        <Button
          autoFocus
          onClick={checkAnswer}
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: 1.2, opacity: 1 }}
          title="Check Answer"
          subTitle="(or press enter)"
        />
      )}

      {userAnswer && isQuestionAnswered && (
        <Button
          autoFocus
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: 1.2, opacity: 1 }}
          onClick={handleGoToNextQuestion}
          title="Next"
          subTitle="(or press enter)"
        />
      )}
      {/* </div> */}
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
