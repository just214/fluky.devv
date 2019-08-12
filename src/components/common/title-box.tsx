import React from "react";
import Title from "./title";

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
    <div
      css={`
        background: #efefef;
        border-radius: 10px;
        padding: 10px;
      `}
    >
      <Title>{title}</Title>
      <h4>{subTitle}</h4>
      {children}
    </div>
  );
};

export default TitleBox;
