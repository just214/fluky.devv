import React from "react";

export const Heading = ({ children }) => {
  return (
    <h4
      css={`
        color: ${({ theme }) => theme.blue};
        margin: 0px;
        padding: 0px;
        font-size: 1.5rem;
        font-weight: 700;
      `}
    >
      {children}
    </h4>
  );
};

export default Heading;
