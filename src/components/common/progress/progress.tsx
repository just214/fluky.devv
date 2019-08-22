import React from "react";

const Progress = ({ percent }) => {
  return (
    <div
      css={`
        padding: 1px;
        background: #efefef;
        border-radius: 12px;
      `}
    >
      <div
        css={`
          height: 16px;
          width: ${percent}%;
          border-radius: 12px;
          background: ${props => props.theme.green};
          transition: 0.2s linear;
          transition-property: width, background-color;
        `}
      ></div>
    </div>
  );
};

export default Progress;
