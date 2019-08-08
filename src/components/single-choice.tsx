import React from "react";
import styled from "styled-components";
import Markdown from "./markdown";

const Option = styled.div<{
  isUserAnswer: boolean;
  isCorrectAnswer: boolean;
}>`
  display: flex;
  align-items: center;
  border: 2px solid #efefef;
  border-color: ${props => (props.isUserAnswer ? props.theme.blue : "#efefef")};
  background: ${props => (props.isCorrectAnswer ? props.theme.green : "white")};
  border-radius: 8px;
  padding: 10px;
  color: #333;
  font-weight: bold;
  cursor: ${props => (props.isUserAnswer ? "default" : "pointer")};
  transition: border-color 0.2s;
  margin: 5px 0px;
  :hover {
    border-color: ${props =>
      props.isUserAnswer ? props.theme.blue : "#dadada"};
  }
`;
const LetterBox = styled.span`
  border-radius: 4px;
  font-weight: bold;
  padding: 5px;
  color: ${props => props.theme.blue};
  font-size: 1.5rem;
`;

export interface QuestionProps {
  data: Question;
  onSelection: (e: any) => void;
  userAnswer: any;
  isAnswered: boolean;
}
export const SingleChoice: React.FC<QuestionProps> = ({
  data,
  onSelection,
  userAnswer,
  isAnswered,
}) => {
  const { Option1, Option2, Option3, Option4 } = data;
  const options = [
    { id: "1", value: Option1 },
    { id: "2", value: Option2 },
    { id: "3", value: Option3 },
    { id: "4", value: Option4 },
  ].filter(option => !!option.value);

  const handleSelection = selection => {
    onSelection(selection);
  };

  return (
    <div>
      <Markdown source={data.Question} />

      {options.map(option => {
        return (
          <Option
            isUserAnswer={userAnswer === option.id}
            isCorrectAnswer={isAnswered && option.id === data.Answer}
            key={option.id}
            onClick={() => handleSelection(option.id)}
          >
            <div
              css={`
                margin-right: 15px;
                width: 25px;
              `}
            >
              <LetterBox> {option.id.toUpperCase()}</LetterBox>
            </div>
            <Markdown source={option.value} />
          </Option>
        );
      })}
    </div>
  );
};

export default SingleChoice;
