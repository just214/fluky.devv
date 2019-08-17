const path = require("path");
const asyncScrapeWebsitesMetadata = require("./utils/asyncScrapeWebsitesMetadata");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query WebsitesQuery {
      allAirtable(filter: { table: { eq: "Communities" } }) {
        edges {
          node {
            data {
              Website
              LastModified
            }
          }
        }
      }
    }
  `);

  const websitesMetadata = await asyncScrapeWebsitesMetadata(
    data.allAirtable.edges
  );

  const lastModified = data.allAirtable.edges.reduce((accum, node) => {
    const value = node.node.data.LastModified;
    if (value < accum) {
      return accum;
    } else {
      return value;
    }
  }, data.allAirtable.edges[0].node.data.LastModified);

  createPage({
    path: `communities`,
    component: path.resolve(`./src/templates/communities-template.tsx`),
    context: {
      data: websitesMetadata,
      lastModified,
    },
  });
};
