import React from "react";
import styled from "styled-components";
import { motion, MotionAdvancedProps } from "framer-motion";

const StyledButton = styled(motion.button)`
  height: 60px;
  width: 200px;
  font-size: 20px;
  border-radius: 40px;
  outline: 0;
  font-weight: bold;
  background: ${props => props.theme.blue};
  color: white;
  cursor: pointer;
  border: 2px solid #999;
  &:focus {
    background: ${props => props.theme.blue};
    color: white;
  }
`;

export interface ButtonProps {
  title: string;
  subTitle: string;
}
export const Button: React.FC<ButtonProps & MotionAdvancedProps> = ({
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
