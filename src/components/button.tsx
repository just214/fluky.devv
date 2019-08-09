import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  height: 50px;
  width: 180px;
  font-size: 20px;
  border-radius: 40px;
  outline: 0;
  border: none;
  font-weight: bold;
  background: ${props => props.theme.blue};
  color: #fff;
  cursor: pointer;

  &:focus {
    background: ${props => props.theme.blue};
    color: #fff;
  }
`;

export interface ButtonProps {
  title: string;
  subTitle?: string;
  initial: object;
  animate: object;
}
export const Button: React.FC<ButtonProps & any> = ({
  title,
  subTitle,
  ...rest
}) => {
  return (
    <StyledButton {...rest}>
      <div
        css={`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <span>{title}</span>
        <small
          css={`
            font-size: 0.8rem;
          `}
        >
          {subTitle}
        </small>
      </div>
    </StyledButton>
  );
};

export default Button;
