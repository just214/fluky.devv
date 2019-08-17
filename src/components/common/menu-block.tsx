import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const StyledLink = styled(Link)<{ rotate: number }>`
  transform: rotate(${props => props.rotate}deg);
  margin: 0px;
  max-width: 280px;
  margin: 20px;

  background: transparent;
  border: 3px solid transparent;
  transition: border 1s;
  &:focus {
    border: 3px solid yellow;
  }

  filter: drop-shadow(0 0 10px #222);
`;

export interface MenuBlockProps {
  gradient: string;
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
          ${gradient}
          color: ${color || "white"};
          padding: 10px;
          margin: 0;
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
  gradient: string;
  color?: string;
  index?: number;
}

const MenuBlockWrapper: React.FC<MenuBlockWrapperProps> = ({
  to,
  children,
  rotate,
  gradient,
  color,
  index,
}) => {
  return (
    <StyledLink to={to} rotate={rotate}>
      <motion.div
        key="modal"
        initial={{ opacity: 0.8 }}
        animate={{
          scale: [1, 1.01, 1.01, 1, 1],
          rotate: [0, 0, 1, 1, 0],
        }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
      >
        <MenuBlock gradient={gradient} color={color}>
          <span
            css={`
              margin-right: 10px;
              text-shadow: 1px 1px 1px #dadada;
            `}
          >
            {children}
          </span>{" "}
          <FaArrowAltCircleRight />
        </MenuBlock>
      </motion.div>
    </StyledLink>
  );
};

export default MenuBlockWrapper;
