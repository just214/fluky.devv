import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
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
      <Button
        css={`
          display: flex;
          align-items: center;
        `}
        type="primary"
        ghost
        size="small"
      >
        <FaGlobeAfrica style={{ marginRight: "5px" }} size={13} /> Visit Website
      </Button>
    </a>
  );
};

export default WebsiteLink;
