import React from "react";

const Tag = ({ children }) => {
  return (
    <small
      css={`
        margin-right: 10px;
      `}
    >
      <b
        css={`
          color: #888;
        `}
      >
        {children}
      </b>
    </small>
  );
};

export default Tag;
