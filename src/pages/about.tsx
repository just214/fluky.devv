import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Image from "../components/image";
import { Layout, TitleBox } from "../components/common";

const TimelineTitle = styled.h2`
  margin: 0px 40px;
  color: ${props => props.theme.blue};
`;

export const AboutSite = () => {
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
        {data.map(({ text, image }, index) => {
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
                <div>
                  <Image filename={image} />
                </div>

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
