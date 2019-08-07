const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allAirtable {
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

  console.log("THE OBJ", result.data.allAirtable.nodes);

  Object.keys(obj).forEach(key => {
    console.log("KKKKEY", key);
    const slug = key.toLowerCase();
    createPage({
      path: `quiz/${slug}`,
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        category: slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Airtable` && node.table === "Questions") {
    // const value = createFilePath({ node, getNode });
    createNodeField({
      name: `category`,
      node,

      value: node.data.Category[0].toLowerCase(),
    });
  }
};
