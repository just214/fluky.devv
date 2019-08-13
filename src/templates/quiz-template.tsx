import React from "react";
import { Link } from "gatsby";
import { Layout, TitleBox } from "../components/common";

const Quiz = props => {
  console.log(props.pageContext);
  const data = props.pageContext.quizzes;
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
        subTitle="Test your front end knowledge with one of our coding quizzes."
      />
      <div>
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            background: #333;
            padding-top: 20px;
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
                  &:hover {
                    background-color: #dadada;
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
                  `}
                >
                  {node.data.Count} Questions
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
