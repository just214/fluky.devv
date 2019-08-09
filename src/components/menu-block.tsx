import React from "react";
import { Link } from "gatsby";
import { FaArrowAltCircleRight } from "react-icons/fa";

export interface MenuBlockProps {
  rotate: number;
}
export const MenuBlock: React.FC<MenuBlockProps> = ({ children, rotate }) => {
  return (
    <div
      css={`
        transform: rotate(${rotate}deg);
        margin: 0px;
        max-width: 250px;
      `}
    >
      <span
        css={`
          background: #fc4a1a; /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
          background: linear-gradient(to right, #f7b733, #fc4a1a);
          color: white;
          padding: 10px;
          margin: 0;
          margin-left: -10px;
          font-size: 30px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-family: "Lakki Reddy", cursive;
        `}
      >
        {children}
      </span>
    </div>
  );
};

export interface MenuBlockWrapperProps {
  rotate: number;
  to?: string;
}

const MenuBlockWrapper: React.FC<MenuBlockWrapperProps> = ({
  to,
  children,
  rotate,
}) => {
  if (to) {
    return (
      <Link to={to}>
        <MenuBlock rotate={rotate}>
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
    return <MenuBlock rotate={rotate}>{children}</MenuBlock>;
  }
};

export default MenuBlockWrapper;
