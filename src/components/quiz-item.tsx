import React, { useState } from "react";
import useMedia from "../hooks/useMedia";
import Button from "antd/es/button";
import { Heading, WebsiteLink, Tags } from "./common";

interface QuizItemProps {
  title: string;
  provider: string;
  description: string;
  website: string;
  tags: string;
}
export const QuizItem: React.FC<QuizItemProps> = ({
  title,
  description = "",
  website,
  tags,
  provider,
}) => {
  const { isMobile } = useMedia();
  const [desc, setDesc] = useState(
    description.length > 280
      ? description.substring(0, 280) + "..."
      : description
  );
  return (
    <div
      css={`
        display: flex;
        margin: 15px 0px;
        border-bottom: 1px solid ${props => props.theme.gray3};
        padding: 10px;
        flex-direction: ${isMobile ? "column" : "row"};
        align-items: ${isMobile ? "flex-start" : "flex-start"};
      `}
    >
      <div>
        <div
          css={`
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          `}
        >
          <Heading>{title}</Heading>

          <small
            css={`
              margin: 0;
              margin-left: 4px;
              color: #707070;
            `}
          >
            {provider}
          </small>
        </div>

        <p
          css={`
            margin-bottom: 0;
            margin-top: 10px;
          `}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        {desc.length !== description.length && (
          <Button
            style={{ margin: 0, padding: 0 }}
            type="link"
            onClick={() => setDesc(description)}
          >
            Read more
          </Button>
        )}

        <div
          css={`
            display: flex;
            align-items: center;
            margin-top: 12px;
            flex-wrap: wrap;
          `}
        >
          <Tags tags={tags} />

          {website && <WebsiteLink url={website} />}
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
