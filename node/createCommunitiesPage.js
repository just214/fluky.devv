const path = require("path");
const asyncScrapeWebsitesMetadata = require("./utils/asyncScrapeWebsitesMetadata");
const getLastModifiedDate = require("./utils/getlastModifiedDate");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query WebsitesQuery {
      allAirtable(filter: { table: { eq: "Communities" } }) {
        edges {
          node {
            data {
              URL
              LastModifiedDate
              Tags
            }
          }
        }
      }
    }
  `);

  const websitesMetadata = await asyncScrapeWebsitesMetadata(
    data.allAirtable.edges
  );

  createPage({
    path: `communities`,
    component: path.resolve(`./src/templates/list-page-template.tsx`),
    context: {
      data: websitesMetadata,
      lastModifiedDate: getLastModifiedDate(data.allAirtable.edges),
      pageTitle: "Dev Communities",
      pageDescription: "A collection of the best online developer communities.",
      pageKeywords: ["community", "communities", "websites"],
      smallImage: true,
    },
  });
};
