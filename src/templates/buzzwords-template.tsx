import React, { useState } from "react";
import { Layout, TitleBox, BackToTop, SearchBox } from "../components/common";
import BuzzwordSuggestionForm from "../components/forms/buzzword-suggestion-form";

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
          <BuzzwordSuggestionForm />
        </TitleBox>

        <br />
        <SearchBox onChange={e => setFilter(e)} />

        {buzzwords.map(({ node }) => {
          return (
            <div
              key={node.data.Word}
              css={`
                margin: 10px 0px;
                padding: 8px;
                border-radius: 10px;
                border: 1px solid ${props => props.theme.gray2};
                background: ${props => props.theme.gray1};
              `}
            >
              <h2
                css={`
                  color: ${props => props.theme.blue};
                  margin: 0px;
                  padding: 0px;
                  font-size: 1.8rem;
                  font-family: "Lalezar", sans-serif;
                `}
              >
                {node.data.Word}
              </h2>
              <p
                css={`
                  margin: 0;
                  font-weight: bold;
                `}
              >
                {node.data.Definition}
              </p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default BuzzWords;
