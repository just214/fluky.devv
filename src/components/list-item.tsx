import React from "react";
import styled from "styled-components";
import useMedia from "../hooks/useMedia";
import useReadMore from "../hooks/useReadMore";
import Heading from "./heading";
import MarkdownBody from "./markdown-body";
import Divider from "./divider";
import Tag from "./tag";

const LI = styled.li<{ isMobile: boolean }>`
  display: flex;
  margin: 15px 0px;
  padding: 10px;
  flex-direction: ${props => (props.isMobile ? "column" : "row")};
  align-items: ${props => (props.isMobile ? "flex-start" : "flex-start")};
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  flex-wrap: wrap;
`;

interface ListItemProps {
  thumbnail?: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  isSmallImage?: boolean;
}
export const ListItem: React.FC<ListItemProps> = ({
  thumbnail,
  title,
  description = "",
  url,
  tags,
  isSmallImage,
}) => {
  const [descriptionSnippet, ReadMoreButton] = useReadMore(description);
  const { isMobile } = useMedia();

  return (
    <>
      <LI isMobile={isMobile}>
        {thumbnail && !isSmallImage && (
          <img
            css={`
              border-radius: 10px;
              margin-right: ${isMobile ? "0px" : "20px"};
              height: auto;
              margin-bottom: ${isMobile ? "20px" : "0px"};
              width: 100px;
              background-color: #f5f5f5;
            `}
            src={thumbnail}
            alt={`Thumbnail for ${title}`}
          />
        )}

        <div>
          <Heading to={url}>
            {title}{" "}
            {thumbnail && isSmallImage && (
              <img
                css={`
                  border-radius: 10px;
                  margin-left: 10px;
                  height: auto;
                  width: 20px;
                  background-color: #f5f5f5;
                `}
                src={thumbnail}
                alt={`Thumbnail for ${title}`}
              />
            )}
          </Heading>

          <MarkdownBody md={descriptionSnippet} />
          <ReadMoreButton />

          <Tags>
            {tags &&
              tags.map(tag => {
                return <Tag key={tag}>{tag}</Tag>;
              })}
          </Tags>
        </div>
      </LI>
      <Divider />
    </>
  );
};

export default ListItem;
