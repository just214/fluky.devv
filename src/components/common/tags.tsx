import React from "react";

export type TagsProps = { tags: string[] };
export const Tags: React.FC<TagsProps> = ({ tags }) => {
  const tagsList = tags.join(", ").toUpperCase();

  return (
    <small
      css={`
        margin-right: 5px;
      `}
    >
      <b
        css={`
          color: ${props => props.theme.pink};
        `}
      >
        {tagsList}
      </b>
    </small>
  );
};

export default Tags;
