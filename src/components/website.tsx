import React from "react";
import useMedia from "../hooks/useMedia";
import WebsiteLink from "./common/website-link";
import { FaImage } from "react-icons/fa";
import Heading from "./common/heading";
import useReadMore from "../hooks/useReadMore";

interface WebsiteProps {
  icon: string;
  title: string;
  description: string;
  url: string;
  provider: string;
  tags?: string[];
}
export const Website: React.FC<WebsiteProps> = ({
  icon,
  title,
  description = "",
  url,
  provider,
  tags,
}) => {
  const [desc, ReadMoreButton] = useReadMore(description);
  const { isMobile } = useMedia();

  return (
    <div
      css={`
        margin: 15px 0px;
        border-bottom: 1px solid ${props => props.theme.gray3};
        padding: 10px;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        {icon ? (
          <img
            css={`
              border-radius: 10px;
              margin-right: 20px;
              height: auto;
              width: 50px;
              display: block;
            `}
            src={icon}
            alt={`Thumbnail for ${title}`}
          />
        ) : (
          <FaImage
            css={`
              margin-right: ${isMobile ? "0px" : "20px"};
              margin-bottom: ${isMobile ? "20px" : "0px"};
              height: auto;
              max-width: 50px;
            `}
            size="50px"
            color="#efefef"
          />
        )}
        <Heading color="blue">{provider}</Heading>
      </div>
      <div>
        <p
          css={`
            margin-bottom: 0;
            margin-top: 10px;
          `}
          dangerouslySetInnerHTML={{ __html: desc }}
        />

        <ReadMoreButton />

        <div
          css={`
            display: flex;
            align-items: center;
            margin-top: 12px;
            flex-wrap: wrap;
          `}
        >
          <small
            css={`
              color: ${props => props.theme.pink};
              margin-right: 10px;
              font-weight: bold;
            `}
          >
            {tags.join(", ").toUpperCase()}
          </small>
          {url && <WebsiteLink url={url} />}
        </div>
      </div>
    </div>
  );
};

export default Website;
