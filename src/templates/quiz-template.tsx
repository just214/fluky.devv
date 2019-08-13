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
      keywords={[]}
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

            padding-top: 20px;
            border-radius: 10px;
          `}
        >
          {data.map(({ node }) => {
            return (
              <Link
                key={node.data.Name}
                to={node.data.Slug}
                css={`
                  border-radius: 20px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  margin: 10px;
                  min-width: 140px;
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
                  {node.data.Name}
                </h2>
                <h3
                  css={`
                    color: ${props => props.theme.lightblue};
                    margin: 0;
                    font-weight: bold;
                  `}
                >
                  Quiz
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
