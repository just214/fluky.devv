import React from "react";

export const Heading = ({ children }) => {
  return (
    <h4
      css={`
        margin: 0px;
        padding: 0px;
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.gray5};
      `}
    >
      <span>{children}</span>
    </h4>
  );
};

export default Heading;
