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
  background: ${props =>
    props.isCorrectAnswer ? props.theme.green : "#efefef"};
  border-radius: 8px;
  padding: 5px;
  color: #333;
  font-weight: bold;
  cursor: ${props => (props.isUserAnswer ? "default" : "pointer")};
  transition: border-color 0.2s;
  margin: 5px 0px;
  :hover {
    border-color: ${props =>
      props.isUserAnswer ? props.theme.blue : "#dadada"};
  }
  overflow: hidden;
`;
const LetterBox = styled.span`
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

  // const [shuffledOptions] = React.useState(shuffle(options));
  // TODO- Figure out shuffle options.

  const handleSelection = selection => {
    onSelection(selection);
  };
  3;
  return (
    <div>
      <Markdown source={data.Question} />
      <br />

      {options.map(option => {
        return (
          <Option
            isUserAnswer={userAnswer == option.id}
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
              {/* Keep the numbering the same by using the index, since the options are shuffled */}
              <LetterBox> {option.id}</LetterBox>
            </div>
            <div
              css={`
                overflow-y: scroll;
              `}
            >
              <Markdown source={option.value} />
            </div>
          </Option>
        );
      })}
    </div>
  );
};

export default SingleChoice;
