import React, { useState } from "react";
// import { graphql } from "gatsby";
import Layout from "../components/layout";
import SearchBox from "../components/search-box";

const BuzzWords = ({ pageContext }) => {
  console.log(pageContext);
  const [filter, setFilter] = useState("");
  const buzzwords = pageContext.buzzwords.filter(({ node }) => {
    return (
      node.data.Word.toLowerCase().includes(filter.toLowerCase()) ||
      node.data.Definition.toLowerCase().includes(filter.toLowerCase())
    );
  });
  return (
    <Layout maxWidth="800px">
      <div>
        <h1
          css={`
            font-family: "Lakki Reddy";
            font-size: 3rem;
            margin: 0;
            padding: 0;
            color: ${props => props.theme.orange};
          `}
        >
          Buzzwords
        </h1>
        <h3>
          An ongoing list of buzzwords that you are likely to encounter at some
          point as a developer.
        </h3>
        <br />
        <SearchBox onChange={e => setFilter(e.target.value)} />

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
              <h1
                css={`
                  color: ${props => props.theme.orange};
                  margin: 0px;
                  padding: 0;
                  margin-top: 15px;
                  font-family: "Lalezar", sans-serif;
                `}
              >
                {node.data.Word}
              </h1>
              <p>{node.data.Definition}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default BuzzWords;
