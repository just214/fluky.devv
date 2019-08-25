const path = require("path");
const getLastModifiedDate = require("./utils/getlastModifiedDate");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query NewslettersQuery {
      allAirtable(
        filter: { table: { eq: "Newsletters" } }
        sort: { order: ASC, fields: data___Title }
      ) {
        edges {
          node {
            data {
              Title
              Description
              URL
              Tags
              LastModifiedDate
            }
          }
        }
      }
    }
  `);

  const finalData = data.allAirtable.edges.map(({ node }) => {
    const { Title, Description, LastModifiedDate, Tags, URL } = node.data;
    return {
      title: Title,
      description: Description,
      lastModifiedDate: LastModifiedDate,
      tags: Tags,
      url: URL,
    };
  });

  createPage({
    path: `newsletters`,
    component: path.resolve(`./src/templates/list-page-template.tsx`),
    context: {
      data: finalData,
      lastModifiedDate: getLastModifiedDate(data.allAirtable.edges),
      pageTitle: "Dev Newsletters",
      pageDescription:
        "A collection of the best newsletters for front end developers.",
      pageKeywords: ["newsletters", "subscriptions"],
    },
  });
};
