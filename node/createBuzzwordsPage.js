const path = require("path");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query BuzzwordsQuery {
      allAirtable(
        filter: { table: { eq: "Buzzwords" } }
        sort: { order: ASC, fields: data___Word }
      ) {
        edges {
          node {
            data {
              Word
              Definition
              LastModified
            }
          }
        }
      }
    }
  `);

  const lastModified = data.allAirtable.edges.reduce((accum, node) => {
    const value = node.node.data.LastModified;
    if (value < accum) {
      return accum;
    } else {
      return value;
    }
  }, data.allAirtable.edges[0].node.data.LastModified);

  createPage({
    path: `buzzwords`,
    component: path.resolve(`./src/templates/buzzwords-template.tsx`),
    context: {
      buzzwords: data.allAirtable.edges,
      lastModified,
    },
  });
};
