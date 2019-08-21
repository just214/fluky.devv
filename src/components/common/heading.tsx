import React from "react";
import { FaShareSquare } from "react-icons/fa";

export const Heading = ({ children }) => {
  return (
    <h4
      css={`
        display: inline;
        color: ${({ theme }) => theme.blue};
        margin: 0px;
        padding: 0px;
        font-size: 1.4rem;
        font-weight: bold;
      `}
    >
      {children}
    </h4>
  );
};

export default Heading;
