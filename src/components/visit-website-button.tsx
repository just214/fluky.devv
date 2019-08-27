import React from "react";
import Button from "./button";
import VisitButton from "../icons/visit-button.svg";

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
        cursor: pointer;
        margin-right: 10px;
        border-radius: 3px;
        padding: 0px 2px;
        :hover {
          opacity: 0.8;
        }
      `}
    >
      <img src={VisitButton} height={20} />
    </a>
  );
};

export default WebsiteLink;
