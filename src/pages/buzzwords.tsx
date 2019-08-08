import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const BuzzWords = ({ data }) => {
  const [filter, setFilter] = useState("");
  const buzzwords = data.allAirtable.edges.filter(({ node }) => {
    return (
      node.data.Word.toLowerCase().includes(filter.toLowerCase()) ||
      node.data.Definition.toLowerCase().includes(filter.toLowerCase())
    );
  });
  return (
    <Layout maxWidth="800px">
      <h3>
        A list of buzzwords that you are likely to encounter as a front-end
        developer.
      </h3>
      <input
        css={`
          height: 40px;
          width: 300px;
          border-radius: 20px;
          border: 1px solid #dadada;
          padding: 3px 10px;
          font-size: 18px;
          outline: none;
        `}
        value={filter}
        onChange={e => setFilter(e.target.value)}
        type="search"
        placeholder="Search"
      />

      {buzzwords.map(({ node }) => {
        return (
          <div
            key={node.data.Word}
            css={`
              border: 2px solid #efefef;
              border-radius: 10px;
              margin: 8px;
              padding: 0px 8px;
              background: #efefef;
            `}
          >
            <h2
              css={`
                color: ${props => props.theme.blue};
                margin: 0;
                padding: 0;
                margin-top: 15px;
              `}
            >
              {node.data.Word}
            </h2>
            <p>{node.data.Definition}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export const Query = graphql`
  query MyQuery {
    allAirtable(
      filter: { table: { eq: "Buzzwords" } }
      sort: { order: ASC, fields: data___Word }
    ) {
      edges {
        node {
          data {
            Word
            Definition
          }
        }
      }
    }
  }
`;

export default BuzzWords;
