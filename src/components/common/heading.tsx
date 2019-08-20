import React from "react";

export const Heading = ({ children }) => {
  return (
    <h4
      css={`
        display: inline;
        color: ${({ theme }) => theme.blue};
        margin: 0px;
        padding: 0px;
        font-size: 1.8rem;
        line-height: 1.8rem;
        font-family: "Lalezar", sans-serif;
      `}
    >
      {children}
    </h4>
  );
};

export default Heading;
