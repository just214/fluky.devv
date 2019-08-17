import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Layout,
  TitleBox,
  BackToTop,
  SearchBox,
  LastUpdated,
  Heading,
} from "../components/common";

const BuzzWords = ({ pageContext }) => {
  const [filter, setFilter] = useState("");
  const buzzwords = pageContext.buzzwords.filter(({ node }) => {
    return (
      node.data.Word.toLowerCase().includes(filter.toLowerCase()) ||
      node.data.Definition.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <Layout
      title="Coding Buzzwords"
      keywords={[
        "buzzwords",
        "dev",
        "frontend",
        "fluky",
        "fluky.dev",
        "developers",
        "coders",
        "javascript",
        "typescript",
        "quiz",
        "resources",
      ]}
      description="A collection of coding and front end developer-related buzzwords and their definitions."
    >
      <BackToTop />
      <div
        css={`
          margin-bottom: 100px;
        `}
      >
        <TitleBox
          title="Buzzwords"
          subTitle="A collection of coding and front end developer-related buzzwords and their definitions."
        >
          <LastUpdated date={pageContext.lastModified} />

          <Link to="/contact" state={{ type: "buzzwords" }}>
            Suggest a Buzzword
          </Link>
        </TitleBox>

        <br />
        <SearchBox onChange={e => setFilter(e)} />

        <ul>
          {buzzwords.map(({ node }) => {
            return (
              <li
                key={node.data.Word}
                css={`
                  margin: 10px 0px;
                  padding: 8px;
                  border-radius: 10px;
                  border: 1px solid ${props => props.theme.gray2};
                  background: ${props => props.theme.gray1};
                `}
              >
                <Heading color="blue">{node.data.Word}</Heading>
                <dfn
                  css={`
                    margin: 0;
                    font-style: normal;
                    display: block;
                  `}
                >
                  {node.data.Definition}
                </dfn>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default BuzzWords;
