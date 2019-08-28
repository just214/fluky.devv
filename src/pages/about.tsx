import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Image from "../components/image";
import Layout from "../components/layout";
import TitleBox from "../components/title-box";

const TimelineTitle = styled.h2`
  margin: 0px 40px;
  color: ${props => props.theme.blue};
`;

export const AboutSite = () => {
  const data = [
    {
      text: "Built with React",
      image: "react.png",
      url: "https://reactjs.org/",
    },
    {
      text: "Secured with TypeScript",
      image: "typescript.png",
      url: "https://www.typescriptlang.org/",
    },
    {
      text: "Powered by Gatsby",
      image: "gatsby.png",
      url: "https://www.gatsbyjs.org/",
    },
    {
      text: "Driven by Airtable",
      image: "airtable.png",
      url: "https://airtable.com/",
    },

    {
      text: "Animated with Framer Motion",
      image: "framer-motion.png",
      url: "https://www.framer.com/motion/",
    },

    {
      text: "Deployed with Netlify",
      image: "netlify.png",
      url: "https://www.netlify.com/",
    },
    {
      text: "Hosted on GitHub",
      image: "github.png",
      url: "https://github.com/gojutin/fluky.dev",
    },
  ];
  return (
    <Layout
      title="About"
      keywords={["about"]}
      description="Our goal is to provide the most current and comprehensive collections of useful resources for front end developers, including quizzes, communities, podcasts, newsletters, and more."
    >
      <TitleBox
        title="About"
        subTitle={
          <>
            <p>
              The goal of this site is to provide the most current and
              comprehensive collections of useful resources for front end
              developers, including quizzes, communities, podcasts, newsletters,
              and more.
            </p>

            <p>
              If you have any suggestions, or see any outdated or incorrect
              information, we would love to{" "}
              <Link to="/contact">here from you</Link>.
            </p>
          </>
        }
      />

      <div style={{ marginTop: "30px", padding: "20px" }}>
        {data.map(({ text, image, url }, index) => {
          const isLastItem = index === data.length - 1;
          return (
            <div key={text}>
              <div
                css={`
                  display: flex;
                  align-items: center;
                  margin: 0px -25px;
                `}
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Image filename={image} alt={text} />
                </a>

                <TimelineTitle>{text}</TimelineTitle>
              </div>
              {!isLastItem && (
                <hr
                  css={`
                    display: inline-block;
                    width: 2px;
                    height: 50px;
                    border-radius: 1px;
                    background: ${({ theme }) => theme.gray3};
                    border: none;
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default AboutSite;
