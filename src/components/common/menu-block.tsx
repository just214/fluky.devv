import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaArrowAltCircleRight } from "react-icons/fa";

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
}

const MenuBlockWrapper: React.FC<MenuBlockWrapperProps> = ({
  to,
  children,
  rotate,
  gradient,
  color,
}) => {
  return (
    <StyledLink to={to} rotate={rotate}>
      <MenuBlock gradient={gradient} color={color}>
        <span
          css={`
            margin-right: 10px;
          `}
        >
          {children}
        </span>{" "}
        <FaArrowAltCircleRight />
      </MenuBlock>
    </StyledLink>
  );
};

export default MenuBlockWrapper;
