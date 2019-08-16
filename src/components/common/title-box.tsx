import React from "react";
import styled from "styled-components";
import Title from "./title";

const Wrapper = styled.div`
  border-radius: 10px;
  padding: 10px;
  background-color: #f0f6ff;
`;

const H2 = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0px;
  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export interface TitleBoxProps {
  title: string;
  subTitle?: string;
}
export const TitleBox: React.FC<TitleBoxProps> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <H2>{subTitle}</H2>
      {children}
    </Wrapper>
  );
};

export default TitleBox;
