// Used for podcasts and other quizzes. Includes truncated description logic.
import React, { useState } from "react";
import useMedia from "../../hooks/useMedia";
import WebsiteLink from "./website-link";
import Button from "antd/es/button";
import Tag from "antd/es/tag";
import { FaImage } from "react-icons/fa";
import Heading from "./heading";

interface RichPreviewProps {
  thumbnail: string;
  title: string;
  description: string;
  website: string;
  details: string;
  tag?: string;
  by?: string;
}
export const RichPreview: React.FC<RichPreviewProps> = ({
  thumbnail,
  title,
  description = "",
  website,
  details,
  tag,
  by,
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
      {thumbnail ? (
        <img
          css={`
            border-radius: 10px;
            margin-right: ${isMobile ? "0px" : "20px"};
            height: auto;
            margin-bottom: ${isMobile ? "20px" : "0px"};
            width: 120px;
          `}
          src={thumbnail}
          alt={`Thumbnail for ${title}`}
        />
      ) : (
        <FaImage
          css={`
            margin-right: ${isMobile ? "0px" : "20px"};
            margin-bottom: ${isMobile ? "20px" : "0px"};
            height: auto;
            max-width: 120px;
          `}
          size="200px"
          color="#efefef"
        />
      )}

      <div>
        <div
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <Heading>{title}</Heading>
          {by && (
            <small
              css={`
                margin: 0;
                margin-left: 8px;
                font-weight: bold;
                color: ${props => props.theme.gray4};
              `}
            >
              by {by}
            </small>
          )}
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
            // onClick={() => setReadMore(true)}
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
          <div
            css={`
              margin-right: 8px;
            `}
          >
            {tag && <Tag color="blue">{tag}</Tag>}
          </div>
          <p
            css={`
              margin: 0;
              margin-right: 10px;
              font-weight: bold;
              color: ${props => props.theme.gray4};
            `}
          >
            {details}
          </p>
          {website && <WebsiteLink url={website} />}
        </div>
      </div>
    </div>
  );
};

export default RichPreview;
