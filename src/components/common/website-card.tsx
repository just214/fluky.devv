import React from "react";
import styled from "styled-components";
import { FaImage } from "react-icons/fa";
import Divider from "antd/es/divider";

const Box = styled.div`
  /* border: 1px solid #dadada;
  border-radius: 10px; */
  display: flex;
  align-items: center;
  margin: 5px 0px;
  padding: 10px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export interface WebsiteCardProps {
  data: any;
}

export const WebsiteCard: React.FC<WebsiteCardProps> = ({ data }) => {
  return (
    <>
      <Box>
        <div
          css={`
            margin-right: 12px;
            @media (max-width: 500px) {
              margin-right: 0px;
              margin-bottom: 8px;
            }
          `}
        >
          {data.image ? (
            <img width={100} src={data.image} alt={data.description} />
          ) : (
            <FaImage size={100} color="#efefef" />
          )}
        </div>
        <div>
          <h3
            css={`
              margin-bottom: 5px;
            `}
          >
            {data.title}{" "}
            <small
              css={`
                color: ${props => props.theme.gray4};
              `}
            >
              by {data.provider}
            </small>
          </h3>

          <p>{data.description}</p>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            {data.url}
          </a>
        </div>
      </Box>
      <Divider />
    </>
  );
};

export default WebsiteCard;
