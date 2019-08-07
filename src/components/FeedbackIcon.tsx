import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Wrapper = styled.span<{ isPass: boolean }>`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: ${props => (props.isPass ? "green" : "tomato")};
`;

interface FeebackIconProps {
  type: "pass" | "fail";
}
export const FeebackIcon: React.FC<FeebackIconProps> = ({ type }) => {
  const isPass = type === "pass";
  const Icon = () => {
    if (isPass) {
      return <FaCheckCircle color="green" size={40} />;
    } else {
      return <FaTimesCircle color="tomato" size={40} />;
    }
  };

  return (
    <Wrapper isPass={isPass}>
      <Icon />
      <span
        css={`
          margin-left: 10px;
        `}
      >
        {isPass ? "Correct!" : "Not quite"}
      </span>
    </Wrapper>
  );
};

export default FeebackIcon;
