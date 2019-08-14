const path = require("path");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query NewslettersQuery {
      allAirtable(
        filter: { table: { eq: "Newsletters" } }
        sort: { order: ASC, fields: data___Name }
      ) {
        edges {
          node {
            data {
              Name
              Description
              Website
              Tags
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
    path: `newsletters`,
    component: path.resolve(`./src/templates/newsletters-template.tsx`),
    context: {
      newsletters: data.allAirtable.edges,
      lastModified,
    },
  });
};
