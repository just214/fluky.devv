import React from "react";

export type TagsProps = { tags: string[] };
export const Tags: React.FC<TagsProps> = ({ tags }) => {
  const tagsList = tags.join(", ").toUpperCase();

  return (
    <small
      css={`
        margin-right: 10px;
      `}
    >
      <b
        css={`
          color: #b5b5b5;
        `}
      >
        {tagsList}
      </b>
    </small>
  );
};

export default Tags;
