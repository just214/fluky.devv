import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Image from "../components/image";
import Timeline from "antd/es/timeline";
import useMedia from "../hooks/useMedia";

const TimelineTitle = styled.h2`
  margin: 0px 40px;
  color: ${props => props.theme.blue};
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
      text: "Driven by the Airtable API",
      image: "airtable.png",
    },

    {
      text: "Hosted with Netlify",
      image: "netlify.png",
    },
  ];
  return (
    <Layout maxWidth="100%">
      <Timeline
        mode={isMobile ? "left" : "alternate"}
        style={{ marginTop: "100px" }}
      >
        {data.map(({ text, image }) => {
          return (
            <Timeline.Item
              key={text}
              dot={<Image filename={image} />}
              style={{ margin: "40px" }}
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
