import React from "react";
import useMedia from "../hooks/useMedia";
import VisitButton from "../icons/visit-button.svg";

export interface WebsiteLinkProps {
  url: string;
}
export const WebsiteLink: React.FC<WebsiteLinkProps> = ({ url }) => {
  const { isMobile } = useMedia();
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
        padding: 0px;
        :hover {
          opacity: 0.8;
        }
        min-width: 80px;
      `}
    >
      <img src={VisitButton} height={isMobile ? 25 : 20} />
    </a>
  );
};

export default WebsiteLink;
