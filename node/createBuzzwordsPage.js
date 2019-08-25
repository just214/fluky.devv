const path = require("path");
const getLastModifiedDate = require("./utils/getlastModifiedDate");

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

  createPage({
    path: `buzzwords`,
    component: path.resolve(`./src/templates/buzzwords-template.tsx`),
    context: {
      buzzwords: data.allAirtable.edges,
      lastModified: getLastModifiedDate(data.allAirtable.edges),
    },
  });
};
