const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Airtable` && node.table === "Questions") {
    createNodeField({
      name: `category`,
      node,

      value: node.data.Category[0].toLowerCase(),
    });
  }
};
