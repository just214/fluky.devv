const path = require("path");

module.exports = async (createPage, graphql) => {
  const result = await graphql(`
    query MyQuery {
      allAirtable(filter: { table: { eq: "Categories" } }) {
        edges {
          node {
            data {
              Name
              Thumbnail {
                url
              }
              Slug
              Count
            }
          }
        }
      }
    }
  `);

  const obj = {};

  result.data.allAirtable.edges.forEach(({ node }) => {
    if (node.data.Name) {
      obj[node.data.Name] = node;
    }
  });

  createPage({
    path: `quiz`,
    component: path.resolve(`./src/templates/quizzes-template.tsx`),
    context: {
      quizzes: result.data.allAirtable.edges,
    },
  });

  Object.keys(obj).forEach(key => {
    const slug = key.toLowerCase();
    createPage({
      path: `quiz/${slug}`,
      component: path.resolve(`./src/templates/quiz-template.tsx`),
      context: {
        category: slug,
        title: key,
      },
    });
  });
};
