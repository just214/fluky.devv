import React, { useState } from "react";
import { Link } from "gatsby";
import { Layout, TitleBox, SearchBox, RichPreview } from "../components/common";

const Quiz = props => {
  const [filter, setFilter] = useState("");
  const data = props.pageContext.quizzes;
  const { otherQuizzes } = props.pageContext;
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
      title="Quizzes"
      description="Front end developer quizzes. JavaScript, TypeScript, HTML, CSS, and more."
      keywords={[
        "fluky",
        "fluky.dev",
        "dev",
        "developers",
        "coders",
        "javascript",
        "typescript",
        "html",
        "css",
        "quiz",
        "quizzes",
        "resources",
        "tips",
      ]}
    >
      <TitleBox
        title="Quizzes"
        subTitle="Test your front end developer knowledge with one of our coding quizzes."
      >
        <Link to="/contact" state={{ type: "quiz-question" }}>
          Suggest a Quiz Question
        </Link>
      </TitleBox>
      <div>
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            background: #333;
            padding-top: 20px;
            margin-top: 20px;
            border-radius: 10px;
            justify-content: center;
          `}
        >
          {data.map(({ node }) => {
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
                      background-color: ${props => props.theme.gray1};
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
                  `}
                  src={node.data.Thumbnail[0].url}
                  alt={`${node.data.Name} Quiz`}
                />
                <h2
                  css={`
                    padding: 0;
                    margin: 0;
                    margin-top: 10px;
                    color: ${props => props.theme.lightblue};
                    font-weight: bold;
                  `}
                >
                  {node.data.Name} Quiz
                </h2>

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
      <TitleBox title="Community Quizzes">
        <Link to="/contact" state={{ type: "buzzword" }}>
          Suggest a Community Quiz
        </Link>
      </TitleBox>
      <h2>Other Quizzes</h2>
      <SearchBox
        onChange={value => {
          setFilter(value);
        }}
      />
      {filteredOtherQuizzes.map(site => {
        return (
          <RichPreview
            key={site.url}
            title={site.title}
            description={site.description}
            thumbnail={site.image}
            website={site.url}
            by={site.provider}
            tag={site.tag}
          />
        );
      })}
    </Layout>
  );
};

export default Quiz;
