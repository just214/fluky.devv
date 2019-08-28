import React from "react";
import styled from "styled-components";
import Markdown from "./markdown";
import { FaCheck, FaTimes } from "react-icons/fa";

const Option = styled.div<{
  isUserAnswer: boolean;
  isCorrectAnswer: boolean;
}>`
  display: flex;
  align-items: center;
  border: 4px solid
    ${props =>
      props.isCorrectAnswer
        ? props.theme.lightgreen
        : props.isUserAnswer
        ? props.theme.gray4
        : props.theme.gray1};
  background: ${({ theme }) => theme.gray1};
  border-radius: 8px;
  padding: 10px;
  color: #333;
  font-weight: bold;
  cursor: ${props => (props.isUserAnswer ? "default" : "pointer")};
  transition: border-color 0.5s;
  margin: 5px 0px;
  :hover {
    border-color: ${props =>
      props.isCorrectAnswer
        ? props.theme.lightgreen
        : props.isUserAnswer
        ? props.theme.gray4
        : props.theme.gray3};
  }
  overflow: hidden;
`;

export interface QuizQuestionProps {
  data: Question;
  onSelection: (e: string) => void;
  userAnswer: string;
  isAnswered: boolean;
}
export const QuizQuestion: React.FC<QuizQuestionProps> = ({
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
        const Feedback = () => {
          if (!isAnswered) {
            return <span>{option.id}</span>;
          } else if (userAnswer == option.id && data.Answer === userAnswer) {
            return <FaCheck color="#53c41a" size={22} />;
          } else if (userAnswer == option.id && data.Answer !== userAnswer) {
            return <FaTimes color="#f5222d" size={22} />;
          }
          return <span>{option.id}</span>;
        };
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
              <span
                css={`
                  font-weight: bold;
                  padding: 3px 6px;
                  color: ${props => props.theme.blue};
                  font-size: 1.5rem;
                  color: ${props => props.theme.blue};
                `}
              >
                <Feedback />
              </span>
            </div>

            <Markdown source={option.value} />
          </Option>
        );
      })}
    </div>
  );
};

export default QuizQuestion;
