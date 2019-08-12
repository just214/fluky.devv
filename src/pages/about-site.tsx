import React from "react";
import styled from "styled-components";
import Image from "../components/image";
import { Layout, TitleBox } from "../components/common";
import Timeline from "antd/es/timeline";
import useMedia from "../hooks/useMedia";

const TimelineTitle = styled.h2`
  margin: 0px 40px;
  color: ${props => props.theme.blue};
  font-family: "Lalezar", sans serif;
`;

export const AboutSite = () => {
  const { isMobile } = useMedia();
  const data = [
    {
      text: "Built with React",
      image: "react.png",
    },
    {
      text: "Powered by Gatsby",
      image: "gatsby.png",
    },
    {
      text: "Driven by Airtable",
      image: "airtable.png",
    },

    {
      text: "Hosted with Netlify",
      image: "netlify.png",
    },
  ];
  return (
    <Layout>
      <TitleBox title="About this Site" />
      <Timeline
        mode={isMobile ? "left" : "alternate"}
        style={{ marginTop: "40px", padding: "10px" }}
      >
        {data.map(({ text, image }) => {
          return (
            <Timeline.Item
              key={text}
              dot={<Image filename={image} />}
              style={{ margin: "30px 10px" }}
            >
              <TimelineTitle>{text}</TimelineTitle>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Layout>
  );
};

export default AboutSite;
