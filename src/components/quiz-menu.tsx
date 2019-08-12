import React from "react";
import { Link } from "gatsby";
import useQuizCategories from "../hooks/useQuizCategories";
import MenuBlock from "./menu-block";

const QuizMenu = () => {
  const data = useQuizCategories();
  return (
    <>
      <MenuBlock
        rotate={-3}
        gradient={`background: #fc4a1a;
          background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
          background: linear-gradient(to right, #f7b733, #fc4a1a);`}
      >
        QUIZZES
      </MenuBlock>
      <div
        css={`
          background: #222;
          padding: 10px;
          margin-top: -20px;
        `}
      >
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
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
    </>
  );
};

export default QuizMenu;
