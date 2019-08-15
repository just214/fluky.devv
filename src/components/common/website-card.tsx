import React from "react";
import styled from "styled-components";
import { FaImage } from "react-icons/fa";

const Box = styled.div`
  border: 1px solid #dadada;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 5px 0px;
  padding: 5px;
`;

export interface WebsiteCardProps {
  data: any;
}

export const WebsiteCard: React.FC<WebsiteCardProps> = ({ data }) => {
  console.log(data);
  return (
    <Box>
      <div
        css={`
          margin-right: 8px;
        `}
      >
        {data.image ? (
          <img width={100} src={data.image} alt={data.description} />
        ) : (
          <FaImage size={100} />
        )}
      </div>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.url}
        </a>
      </div>
    </Box>
  );
};

export default WebsiteCard;
