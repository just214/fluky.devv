import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "antd/es/button";

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
        color: ${props => props.theme.lightblue};
      `}
    >
      {/* <small
        css={`
          margin: 0;
          margin-right: 5px;
        `}
      >
        Visit Website
      </small>{" "} */}
      <Button
        css={`
          display: flex;
          align-items: center;
        `}
        type="primary"
        ghost
        size="small"
      >
        Visit Website{" "}
        <FaExternalLinkAlt style={{ marginLeft: "5px" }} size={13} />
      </Button>
    </a>
  );
};

export default WebsiteLink;
