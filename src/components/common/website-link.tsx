import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { Button } from ".";

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
        :hover {
          button,
          icon {
            opacity: 0.8;
          }
        }
      `}
    >
      <Button type="link">
        <FaGlobeAfrica size={13} /> Visit Website
      </Button>
    </a>
  );
};

export default WebsiteLink;
