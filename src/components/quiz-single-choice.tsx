import React from "react";
import styled from "styled-components";
import Markdown from "./markdown";

const Option = styled.div<{
  isUserAnswer: boolean;
  isCorrectAnswer: boolean;
}>`
  display: flex;
  align-items: center;
  border: 2px solid #fbfbfb;
  background: ${props =>
    props.isCorrectAnswer ? props.theme.lightgreen : "#efefef"};
  border-radius: 8px;
  padding: 10px;
  color: #333;
  font-weight: bold;
  cursor: ${props => (props.isUserAnswer ? "default" : "pointer")};
  transition: border-color 0.2s;
  margin: 5px 0px;
  :hover {
    border-color: #dadada;
  }
  overflow: hidden;
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
      <div
        css={`
          overflow: scroll;
        `}
      >
        <Markdown source={data.Question} />
      </div>

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
              <span
                css={`
                  font-weight: bold;
                  padding: 5px;
                  color: ${props => props.theme.blue};
                  font-size: 1.5rem;
                  border: 3px solid #efefef;
                  border-radius: 4px;
                  border-color: ${userAnswer == option.id
                    ? "#0066B8"
                    : "transparent"};
                `}
              >
                {option.id}
              </span>
            </div>
            <span
              css={`
                overflow-y: scroll;
                height: auto;
              `}
            >
              <Markdown source={option.value} />
            </span>
          </Option>
        );
      })}
    </div>
  );
};

export default SingleChoice;
