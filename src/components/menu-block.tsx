import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const StyledLink = styled(Link)<{ rotate: number }>`
  transform-style: preserve-3d;
  transform: rotateZ(${props => props.rotate}deg);
  max-width: 280px;
  min-width: 210px;
  margin: 30px;
  outline: none;
  background: transparent;
  border: 3px solid ${({ theme }) => theme.darkblue};
  transition: border 0.2s, opacity 0.5s;
  &:focus {
    border: 3px solid yellow;
  }
  :hover {
    opacity: 0.9;
  }
  backface-visibility: hidden;
`;

export interface MenuBlockProps {
  gradient: [string, string];
  color?: string;
}
export const MenuBlock: React.FC<MenuBlockProps> = ({
  children,
  gradient,
  color,
}) => {
  return (
    <span
      css={`
        background: ${gradient[0]};
        background: -webkit-linear-gradient(
          to right,
          ${gradient[0]},
          ${gradient[1]}
        );
        background: linear-gradient(to right, ${gradient[0]}, ${gradient[1]});
        color: ${color || "white"};
        border-radius: 4px;
        padding: 10px;
        margin: 0px;
        height: 35px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-family: "Barriecito", cursive;
      `}
    >
      {children}
    </span>
  );
};

interface MenuBlockWrapperProps {
  rotate: number;
  to?: string;
  gradient: string[];
  color?: string;
  index?: number;
  icon: React.FC;
}

const MenuBlockWrapper: React.FC<MenuBlockWrapperProps> = ({
  to,
  children,
  rotate,
  gradient,
  color,
  index,
  icon: Icon,
}) => {
  return (
    <StyledLink to={to} rotate={rotate}>
      <motion.div
        key="modal"
        initial={{ opacity: 0.8 }}
        animate={{
          scale: [1, 1.01, 1],
          rotate: [0, Math.random(), 0],
        }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
      >
        <MenuBlock gradient={gradient} color={color}>
          <span
            css={`
              margin-right: 10px;
            `}
          >
            {children}
          </span>
          <Icon />
        </MenuBlock>
      </motion.div>
    </StyledLink>
  );
};

export default MenuBlockWrapper;
