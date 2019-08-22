import React from "react";
import { WebsiteLink, Tags, Heading, MarkdownBody, Divider } from "./common";

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
  title,
  description = "",
  url,
  provider,
  tags,
  icon,
}) => {
  const [desc, ReadMoreButton] = useReadMore(description);

  return (
    <>
      <Divider />
      <div
        css={`
          margin: 15px 0px;
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
          <div
            css={`margin-top 0px; display: flex; align-items: center; flex-wrap: wrap;`}
          >
            <Heading>
              <img
                css={`
                  border-radius: 4px;
                  margin-right: 10px;
                  height: auto;
                  width: 20px;
                  background: ${({ theme }) => theme.gray1};
                `}
                src={icon}
                alt={`Thumbnail for ${title}`}
              />
              {title}
              <small
                css={`
                  color: #555;
                  font-size: 0.8rem;
                  font-weight: normal;
                  display: inline-flex;
                  align-items: center;
                  margin-left: 10px;
                `}
              >
                {provider}
              </small>
            </Heading>
          </div>
        </div>
        <div>
          <MarkdownBody md={desc} />
          <ReadMoreButton />

          <div
            css={`
              display: flex;
              align-items: center;
              margin-top: 12px;
              flex-wrap: wrap;
            `}
          >
            {tags && tags.length && <Tags tags={tags} />}

            {url && <WebsiteLink url={url} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Website;
