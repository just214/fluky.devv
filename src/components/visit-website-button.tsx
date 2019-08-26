import React from "react";
import { TiArrowForward } from "react-icons/ti";
import Button from "./button";

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
        margin-right: 10px;
        :hover {
          button,
          icon {
            opacity: 0.8;
          }
        }
      `}
    >
      <Button type="link">
        <b>Visit</b>
        <TiArrowForward size={16} />
      </Button>
    </a>
  );
};

export default WebsiteLink;
