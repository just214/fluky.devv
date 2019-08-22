import React from "react";
import useMedia from "../hooks/useMedia";
import { FaImage } from "react-icons/fa";
import useReadMore from "../hooks/useReadMore";
import { Heading, MarkdownBody, WebsiteLink, Divider } from "./common";

interface PodcastProps {
  thumbnail: string;
  title: string;
  description: string;
  website: string;
  details?: string;
}
export const Podcast: React.FC<PodcastProps> = ({
  thumbnail,
  title,
  description = "",
  website,
  details,
}) => {
  const [desc, ReadMoreButton] = useReadMore(description);
  const { isMobile } = useMedia();

  return (
    <>
      <div
        css={`
        display: flex;
        margin: 15px 0px;
        // border-bottom: 1px solid ${props => props.theme.gray3};
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
          <Heading>{title}</Heading>

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
      <Divider />
    </>
  );
};

export default Podcast;
