import React from "react";
import { Link } from "gatsby";
import { FaArrowAltCircleRight } from "react-icons/fa";

export interface MenuBlockProps {
  rotate: number;
  gradient: string;
  color?: string;
}
export const MenuBlock: React.FC<MenuBlockProps> = ({
  children,
  rotate,
  gradient,
  color,
}) => {
  return (
    <div
      css={`
        transform: rotate(${rotate}deg);
        margin: 0px;
        max-width: 280px;
        margin-top: 30px;
      `}
    >
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
    </div>
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
  if (to) {
    return (
      <Link to={to}>
        <MenuBlock rotate={rotate} gradient={gradient} color={color}>
          <span
            css={`
              margin-right: 10px;
            `}
          >
            {children}
          </span>{" "}
          <FaArrowAltCircleRight />
        </MenuBlock>
      </Link>
    );
  } else {
    return (
      <MenuBlock gradient={gradient} rotate={rotate}>
        {children}
      </MenuBlock>
    );
  }
};

export default MenuBlockWrapper;
