import React from "react";

type MarkdownBody = {
  md: string;
};

export const MarkdownBody: React.FC<MarkdownBody> = ({ md }) => {
  return (
    <p
      css={`
        margin: 10px 0px;
        font-size: 1rem;
      `}
      dangerouslySetInnerHTML={{ __html: md }}
    />
  );
};

export default MarkdownBody;
