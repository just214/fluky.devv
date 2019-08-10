const path = require("path");

module.exports = async (createPage, graphql) => {
  const result = await graphql(`
    query MyQuery {
      allAirtable(filter: { table: { eq: "Categories" } }) {
        edges {
          node {
            data {
              Name
            }
          }
        }
      }
    }
  `);

  let obj = {};

  result.data.allAirtable.edges.forEach(({ node }) => {
    if (node.data.Name) {
      obj[node.data.Name] = true;
    }
  });

  Object.keys(obj).forEach(key => {
    const slug = key.toLowerCase();
    createPage({
      path: `quiz/${slug}`,
      component: path.resolve(`./src/templates/quiz-item-template.tsx`),
      context: {
        category: slug,
      },
    });
  });
};
