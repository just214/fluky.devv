const unirest = require("unirest");
const chunk = require("lodash/chunk");
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
            }
          }
        }
      }
    }
  `);

  createPage({
    path: `newsletters`,
    component: path.resolve(`./src/templates/newsletters-template.tsx`),
    context: {
      newsletters: data.allAirtable.edges,
    },
  });
};
