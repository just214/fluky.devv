import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const StyledButton = styled(motion.button)`
  height: 50px;
  min-width: 160px;
  font-size: 18px;
  border-radius: 40px;
  outline: 0;
  border: none;
  font-weight: bold;
  background: ${props => props.theme.lightgreen};
  color: white;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 40px;
  transition: color, background 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:focus,
  &:hover {
    background: ${props => props.theme.green};
    color: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export type ButtonProps = {
  title: string | JSX.Element;
  onClick: () => void;
  isSelection: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  isSelection,
}) => {
  return (
    <AnimatePresence>
      {isSelection && (
        <StyledButton
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={onClick}
          autoFocus
        >
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
      )}
    </AnimatePresence>
  );
};

export default Button;
