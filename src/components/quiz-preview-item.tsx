import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Heading from "./heading";

const StyledLink = styled(Link)`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  min-width: 180px;
  padding: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.blue};
  transition: background-color 0.5s;

  @media (min-width: 500px) {
    &:hover {
      background-color: ${({ theme }) => theme.gray2};
    }
  }
  @media (max-width: 500px) {
    &:active {
      background-color: #dadada;
    }
  }
`;

interface Props {
  data: any;
}

const QuizPreviewItem: React.FC<Props> = ({ data }) => {
  return (
    <StyledLink to={`/${data.Slug}`}>
      <img
        css={`
          height: 100px;
          width: 100px;
          margin-bottom: 10px;
        `}
        src={data.Thumbnail[0].url}
        alt={`${data.Name} Quiz`}
      />

      <Heading> {data.Name} Quiz</Heading>

      <div
        css={`
          color: ${({ theme }) => theme.orange};
          font-weight: bold;
        `}
      >
        {data.Count} Questions
      </div>
    </StyledLink>
  );
};

export { QuizPreviewItem };
