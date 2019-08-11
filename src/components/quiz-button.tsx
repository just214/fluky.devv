import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  height: 44px;
  min-width: 150px;
  font-size: 14px;
  border-radius: 40px;
  outline: 0;
  border: none;
  font-weight: bold;
  background: ${props => props.theme.blue};
  color: #fff;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    background: ${props => props.theme.blue};
    color: #fff;
  }

  small {
    font-size: 0.7rem;
    font-weight: normal;
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
        <small>{subTitle}</small>
      </div>
    </StyledButton>
  );
};

export default Button;
