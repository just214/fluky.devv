import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface WebsiteLinkProps {
  url: string;
}
export const WebsiteLink: React.FC<WebsiteLinkProps> = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      css={`
        display: flex;
        align-items: center;
        color: ${props => props.theme.blue};
      `}
    >
      <p
        css={`
          margin: 0;
          margin-right: 5px;
        `}
      >
        Visit Website
      </p>{" "}
      <FaExternalLinkAlt size={12} />
    </a>
  );
};

export default WebsiteLink;
