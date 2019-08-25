const path = require("path");
const asyncScrapeWebsitesMetadata = require("./utils/asyncScrapeWebsitesMetadata");
const getLastModifiedDate = require("./utils/getlastModifiedDate");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query WebsitesQuery {
      allAirtable(filter: { table: { eq: "Health" } }) {
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
    path: `health`,
    component: path.resolve(`./src/templates/list-page-template.tsx`),
    context: {
      data: websitesMetadata,
      lastModifiedDate: getLastModifiedDate(data.allAirtable.edges),
      pageTitle: "Dev Health",
      pageDescription:
        "A collection of resources to make sure you stay as healthy as possible as a developer.",
      pageKeywords: ["health", "stretches", "exercise"],
      smallImage: true,
    },
  });
};
