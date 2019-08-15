import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Layout,
  TitleBox,
  BackToTop,
  SearchBox,
  LastUpdated,
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
      title="Dev Buzzwords"
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
      description="An ongoing collection of front end developer and coding buzzwords and definitions."
    >
      <BackToTop />
      <div
        css={`
          margin-bottom: 100px;
        `}
      >
        <TitleBox
          title="Buzzwords"
          subTitle="An ongoing collection of front end developer and coding buzzwords."
        >
          <LastUpdated date={pageContext.lastModified} />
          <Link to="/contact" state={{ type: "buzzword" }}>
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
                <h4
                  css={`
                    color: ${props => props.theme.blue};
                    margin: 0px;
                    padding: 0px;
                    font-size: 1.8rem;
                    font-family: "Lalezar", sans-serif;
                  `}
                >
                  {node.data.Word}
                </h4>
                <dfn
                  css={`
                    margin: 0;
                    font-weight: bold;
                    font-style: normal;
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
