import React from "react";
import { graphql } from "gatsby";
import Microlink from "@microlink/react";
import Layout from "../components/layout";

const PrettyLink = ({ data }) => (
  <Layout maxWidth="100%">
    <div
      css={`
        margin: 10px 0px;
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {data.allAirtable.edges.map(({ node }) => {
        return (
          <div
            key={node.data.Name}
            css={`
              margin: 10px 0px;
            `}
          >
            <Microlink url={node.data.Link} />
          </div>
        );
      })}
    </div>
  </Layout>
);

export default PrettyLink;

export const query = graphql`
  query {
    allAirtable(filter: { table: { eq: "Podcasts" } }) {
      edges {
        node {
          data {
            Name
            Link
          }
        }
      }
    }
  }
`;
