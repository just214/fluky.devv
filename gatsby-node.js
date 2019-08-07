const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allAirtable {
        nodes {
          data {
            Category
          }
        }
      }
    }
  `);

  let obj = {};

  result.data.allAirtable.nodes.forEach(node => {
    obj[node.data.Category] = true;
  });

  Object.keys(obj).forEach(key => {
    const slug = key.toLowerCase();
    createPage({
      path: `quiz/${slug}`,
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        category: slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Airtable` && node.table === "Questions") {
    console.log("INTERNAL", node);
    // const value = createFilePath({ node, getNode });
    createNodeField({
      name: `category`,
      node,

      value: node.data.Category[0].toLowerCase(),
    });
  }
};
