import React, { Fragment } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Image from "../components/image";
import { Layout, TitleBox } from "../components/common";
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
      text: "Driven by Airtable",
      image: "airtable.png",
    },

    {
      text: "Hosted with Netlify",
      image: "netlify.png",
    },
  ];
  return (
    <Layout
      title="About This Site"
      keywords={["about"]}
      description="Our goal is to provide the most current and comprehensive collections of useful resources for front end developers, including quizzes, communities, podcasts, newsletters, and more."
    >
      <TitleBox
        title="About This Site"
        subTitle={
          <>
            <p>
              The goal of this site is to provide the most current and
              comprehensive collections of useful resources for front end
              developers, including quizzes, communities, podcasts, newsletters,
              and more.
            </p>
            <br />
            <p>
              If you have any suggestions, or see any outdated or incorrect
              information, we would love to{" "}
              <Link to="/contact">here from you</Link>.
            </p>
          </>
        }
      />

      <div
        mode={isMobile ? "left" : "alternate"}
        style={{ marginTop: "40px", padding: "10px" }}
      >
        {data.map(({ text, image }) => {
          return (
            <Fragment key={text}>
              <Image filename={image} />
              <div style={{ margin: "30px 10px" }}>
                <TimelineTitle>{text}</TimelineTitle>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Layout>
  );
};

export default AboutSite;
