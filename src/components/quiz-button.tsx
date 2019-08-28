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
  background: ${props => props.theme.lightgreen};
  color: #333;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 30px;
  transition: color, background 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus,
  &:hover {
    background: ${props => props.theme.green};
    color: #fff;
  }

  small {
    font-size: 0.7rem;
    font-weight: normal;
  }
`;

export interface ButtonProps {
  title: string;
  initial: object;
  animate: object;
  onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <StyledButton {...rest} autoFocus>
      <div
        css={`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <span>{title}</span>
      </div>
    </StyledButton>
  );
};

export default Button;
