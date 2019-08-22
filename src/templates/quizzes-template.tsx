import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Layout,
  TitleBox,
  Search,
  BackToTop,
  Heading,
  Divider,
} from "../components/common";
import QuizItem from "../components/quiz-item";

const Quiz = props => {
  const [filter, setFilter] = useState("");
  const { quizzes } = props.pageContext;
  const { otherQuizzes } = props.pageContext;

  const filteredQuizzes = quizzes.filter(({ node }) => {
    if (node.data.Name.toLowerCase().includes(filter.toLowerCase())) {
      return true;
    }
    return false;
  });

  const filteredOtherQuizzes = otherQuizzes.filter(quiz => {
    if (
      (quiz.title && quiz.title.toLowerCase().includes(filter.toLowerCase())) ||
      (quiz.description &&
        quiz.description.toLowerCase().includes(filter.toLowerCase())) ||
      (quiz.tag && quiz.tag.toLowerCase().includes(filter.toLowerCase()))
    ) {
      return true;
    }
    return false;
  });

  return (
    <Layout
      title="Dev Quizzes"
      description="Front end developer quizzes. JavaScript, TypeScript, HTML, CSS, and more."
      keywords={["quiz", "quizzes"]}
    >
      <BackToTop />
      <TitleBox
        title="Dev Quizzes"
        subTitle="Test your front end developer knowledge with one of our coding quizzes."
      >
        <Link to="/contact" state={{ type: "quizzes" }}>
          Suggest a Quiz or Question
        </Link>
      </TitleBox>
      <br />
      <Search
        onChange={value => {
          setFilter(value);
        }}
      />
      <small
        css={`
          padding-left: 10px;
        `}
      >
        Showing {filteredQuizzes.length + filteredOtherQuizzes.length} of{" "}
        {otherQuizzes.length + quizzes.length}
      </small>
      <div>
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            // background: #333;
            padding-top: 20px;
            margin-top: 20px;
            border-radius: 10px;
            justify-content: center;
          `}
        >
          {filteredQuizzes.map(({ node }) => {
            return (
              <Link
                key={node.data.Name}
                to={`/${node.data.Slug}`}
                css={`
                  border-radius: 20px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  margin: 10px;
                  min-width: 180px;
                  padding: 10px;
                  text-decoration: none;
                  color: ${props => props.theme.blue};
                  transition: background-color 0.5s;

                  @media (min-width: 500px) {
                    &:hover {
                      background-color: ${props => props.theme.gray2};
                    }
                  }
                  @media (max-width: 500px) {
                    &:active {
                      background-color: #dadada;
                    }
                  }
                `}
              >
                <img
                  css={`
                    height: 100px;
                    width: 100px;
                    margin-bottom: 10px;
                  `}
                  src={node.data.Thumbnail[0].url}
                  alt={`${node.data.Name} Quiz`}
                />

                <Heading> {node.data.Name} Quiz</Heading>

                <div
                  css={`
                    color: ${props => props.theme.orange};
                    font-weight: bold;
                  `}
                >
                  {node.data.Count} Questions
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <br />

      <Divider />
      <h3>Other Community Quizzes</h3>
      {filteredOtherQuizzes.map(site => {
        return (
          <QuizItem
            key={site.url}
            title={site.title}
            description={site.description}
            website={site.url}
            provider={site.provider}
            tags={site.tags}
          />
        );
      })}
    </Layout>
  );
};

export default Quiz;
