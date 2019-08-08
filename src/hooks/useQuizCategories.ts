// import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";

const useQuizCategories = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Categories" } }
        sort: { order: DESC, fields: data___Name }
      ) {
        edges {
          node {
            data {
              Name
              Slug
              Thumbnail {
                url
              }
            }
          }
        }
      }
    }
  `);
  return data.allAirtable.edges;
};

export default useQuizCategories;
