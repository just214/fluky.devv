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
    <div>
      <Title>{title}</Title>
      <h3>{subTitle}</h3>
      {children}
    </div>
  );
};

export default TitleBox;
