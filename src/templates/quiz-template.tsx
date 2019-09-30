import React from "react";
import { graphql } from "gatsby";
import QuizQuestion from "../components/quiz-question";
import Markdown from "../components/markdown";
import { motion } from "framer-motion";
import QuizResults from "../components/quiz-results";
import Title from "../components/title";
import Layout, { colors } from "../components/layout";
import LastUpdated from "../components/last-updated";
import Progress from "../components/progress";
import { FaCheckCircle, FaTimesCircle, FaArrowRight } from "react-icons/fa";
import useQuiz from "../hooks/useQuiz";
import QuizButton from "../components/quiz-button";

const keywords = ["quiz", "quizzes"];

const Page: React.FC = ({ data, pageContext }) => {
  const description = `Test your ${pageContext.title} knowledge with our ${pageContext.title} Quiz.`;
  const title = `${pageContext.title} Quiz`;
  if (!data.allAirtable.edges.length) {
    return (
      <Layout title={title} keywords={keywords} description={description}>
        <Title>{pageContext.title} Quiz</Title>
        <h2>Looks like there are no questions for this category yet.</h2>
      </Layout>
    );
  }

  const [state, dispatch, types] = useQuiz(data.allAirtable.edges);
  const {
    currentQuestion,
    userSelection,
    isAnswered,
    isCorrect,
    correctCount,
    incorrectCount,
    isCompleted,
    score,
    answeredCount,
    feedback,
  } = state;

  const handleSetUserSelection: () => void = value => {
    if (isAnswered) {
      return;
    }
    dispatch({ type: types.SET_USER_SELECTION, payload: value });
  };

  const checkAnswer: () => void = () => {
    if (!userSelection) {
      return;
    }
    dispatch({
      type: types.CHECK_ANSWER,
    });
  };

  const handleGoToNextQuestion: () => void = () => {
    dispatch({
      type: types.GO_TO_NEXT_QUESTION,
    });
  };

  if (isCompleted) {
    return (
      <Layout
        title={title}
        keywords={keywords}
        description={description}
        bg="#16202b"
      >
        <Title
          css={`
            color: white;
          `}
        >
          {pageContext.title} Quiz
        </Title>

        <QuizResults
          score={score}
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      </Layout>
    );
  }

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <Title>{pageContext.title} Quiz</Title>
      <LastUpdated date={pageContext.lastModified} />
      <Progress
        percent={(answeredCount / data.allAirtable.edges.length) * 100}
      />
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
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
      <br />

      <QuizQuestion
        data={currentQuestion}
        key={currentQuestion.Question}
        isAnswered={isAnswered}
        userAnswer={userSelection}
        onSelection={answer => handleSetUserSelection(answer)}
      />
      <br />
      {currentQuestion.Source && (
        <p>
          This question was sourced with permission from{" "}
          <a
            href={currentQuestion.Source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentQuestion.Source}
          </a>
          .
        </p>
      )}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div
            css={`
              display: flex;
              align-items: center;
              color: ${isCorrect ? colors.green : colors.red};
            `}
          >
            {isCorrect ? (
              <FaCheckCircle size={30} color={colors.green} />
            ) : (
              <FaTimesCircle size={30} color={colors.red} />
            )}
            <h2
              css={`
                margin-left: 20px;
              `}
            >
              {feedback}
            </h2>
          </div>

          <Markdown source={currentQuestion.Explanation} />
        </motion.div>
      )}
      <QuizButton
        isSelection={!!userSelection}
        onClick={isAnswered ? handleGoToNextQuestion : checkAnswer}
        title={
          isAnswered ? (
            <span
              css={`
                display: flex;
                align-items: center;
              `}
            >
              Continue <FaArrowRight style={{ marginLeft: "10px" }} />
            </span>
          ) : (
            "Check Answer"
          )
        }
      />
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
            ID
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
            Source
          }
        }
      }
    }
  }
`;
