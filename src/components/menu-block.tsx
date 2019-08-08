import React from "react";
export interface MenuBlockProps {
  rotate: number;
}
export const MenuBlock: React.FC<MenuBlockProps> = ({ children, rotate }) => {
  return (
    <div
      css={`
        transform: rotate(${rotate}deg);
        margin: 5px;
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
        `}
      >
        {children}
      </span>
    </div>
  );
};

export default MenuBlock;
