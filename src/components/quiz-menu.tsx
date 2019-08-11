import React from "react";
import { Link } from "gatsby";
import useQuizCategories from "../hooks/useQuizCategories";
import MenuBlock from "./menu-block";

const QuizMenu = () => {
  const data = useQuizCategories();
  return (
    <>
      <MenuBlock rotate={-3}>QUIZZES</MenuBlock>
      <div
        css={`
          background: #222;
          padding: 10px;
        `}
      >
        <div
          css={`
            display: flex;
            flex-wrap: wrap;

            justify-content: center;
            padding-top: 30px;
            margin-top: -30px;
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
                  min-width: 130px;
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
                />
                <h3
                  css={`
                    padding: 0;
                    margin: 0;
                    margin-top: 10px;
                  `}
                >
                  {node.data.Name}
                </h3>
                <h3>Quiz</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuizMenu;
