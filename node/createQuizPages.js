const path = require("path");
const asyncScrapeWebsitesMetadata = require("./utils/asyncScrapeWebsitesMetadata");

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
              LastModified
            }
          }
        }
      }
    }
  `);

  const otherQuizzes = await graphql(`
    query MyQuery {
      allAirtable(filter: { table: { eq: "Quizzes" } }) {
        edges {
          node {
            data {
              URL
              Tags
            }
          }
        }
      }
    }
  `);

  const quizzesMetadata = await asyncScrapeWebsitesMetadata(
    otherQuizzes.data.allAirtable.edges
  );

  const obj = {};

  result.data.allAirtable.edges.forEach(({ node }) => {
    if (node.data.Name) {
      obj[node.data.Name] = node;
    }
  });

  createPage({
    path: `quizzes`,
    component: path.resolve(`./src/templates/quizzes-template.tsx`),
    context: {
      quizzes: result.data.allAirtable.edges,
      otherQuizzes: quizzesMetadata,
    },
  });

  Object.keys(obj).forEach(key => {
    const slug = key.toLowerCase();
    createPage({
      path: `quizzes/${slug}`,
      component: path.resolve(`./src/templates/quiz-template.tsx`),
      context: {
        category: slug,
        title: key,
        lastModified: obj[key].data.LastModified,
      },
    });
  });
};
