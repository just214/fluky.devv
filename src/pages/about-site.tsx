import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";

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
      text: "Driven by the Airtable API",
      image: "airtable.png",
    },
    {
      text: "Styled with Styled Components",
      image: "styled-components.png",
    },
    {
      text: "Hosted with Netlify",
      image: "netlify.png",
    },
  ];
  return (
    <Layout>
      {data.map(({ text, image }) => {
        return (
          <div
            key={text}
            css={`
              display: flex;
              align-items: center;
              margin: 15px 0px;
            `}
          >
            <div>
              <Image filename={image} />
            </div>

            <h2
              css={`
                margin-left: 20px;
              `}
            >
              {text}
            </h2>
          </div>
        );
      })}
    </Layout>
  );
};

export default AboutSite;
