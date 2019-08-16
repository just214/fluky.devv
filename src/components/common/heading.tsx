import React from "react";

export const Heading = ({ children, color = "pink" }) => {
  const getColor = props => {
    return props.theme[color];
  };
  return (
    <h4
      css={`
        display: inline-block;
        color: ${getColor};
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
