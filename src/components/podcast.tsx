import React, { useState, useRef } from "react";
import useMedia from "../hooks/useMedia";
import { WebsiteLink } from "../components/common";
import Button from "antd/es/button";

export interface PodcastProps {
  podcast: any;
}
export const Podcast: React.FC<PodcastProps> = ({ podcast }) => {
  const { isMobile } = useMedia();
  const [desc, setDesc] = useState(
    podcast.description.length > 280
      ? podcast.description.substring(0, 280) + "..."
      : podcast.description
  );
  return (
    <div
      key={podcast.id}
      css={`
        display: flex;
        margin: 15px 0px;
        border-bottom: 1px solid ${props => props.theme.gray3};
        padding: 10px;
        flex-direction: ${isMobile ? "column" : "row"};
        align-items: ${isMobile ? "flex-start" : "flex-start"};
      `}
    >
      <img
        css={`
          border-radius: 10px;
          margin-right: ${isMobile ? "0px" : "20px"};
          height: auto;
          margin-bottom: ${isMobile ? "20px" : "0px"};
          width: ${isMobile ? "40%" : "150px"};
        `}
        src={podcast.thumbnail}
        alt={`Thumbnail for ${podcast.title}`}
      />

      <div>
        <h1
          css={`
            font-family: "Lalezar";
            line-height: 30px;
            color: ${props => props.theme.blue};
          `}
        >
          {podcast.title}
        </h1>

        <p
          // css={`
          //   position: relative;
          //   width: 100%;
          //   max-height: ${readMore ? "8000px" : "100px"};
          //   overflow: hidden;
          //   text-overflow: ellipsis;
          //   transition: max-height 0.5s ease;
          // `}
          css={`
            margin-bottom: 0;
          `}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        {desc.length !== podcast.description.length && (
          <Button
            style={{ margin: 0, padding: 0 }}
            type="link"
            // onClick={() => setReadMore(true)}
            onClick={() => setDesc(podcast.description)}
          >
            Read more
          </Button>
        )}

        <div
          css={`
            display: flex;
            align-items: center;
            margin-top: 12px;
          `}
        >
          <p
            css={`
              margin: 0;
              margin-right: 10px;
              font-weight: bold;
            `}
          >
            {podcast.total_episodes} episodes
          </p>
          {podcast.website && <WebsiteLink url={podcast.website} />}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
