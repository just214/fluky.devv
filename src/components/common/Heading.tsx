import React from "react";

export const Heading = ({ children }) => {
  return (
    <h4
      css={`
        color: ${props => props.theme.pink};
        margin: 0px;
        padding: 0px;
        font-size: 1.8rem;
        font-family: "Lalezar", sans-serif;
      `}
    >
      {children}
    </h4>
  );
};

export default Heading;
