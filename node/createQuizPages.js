const path = require("path");
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");
const fetch = require("node-fetch");

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

async function getMeta(url) {
  const response = await fetch(url);
  const html = await response.text();
  const doc = domino.createWindow(html).document;
  const metadata = await getMetadata(doc, url);

  // console.log("DDDDDDDD", metadata);
  return metadata;
}

module.exports = async (createPage, graphql) => {
  // console.log("FFFFF", test);
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
              Website
            }
          }
        }
      }
    }
  `);

  const quizzesMetadata = [];

  await asyncForEach(otherQuizzes.data.allAirtable.edges, async function({
    node,
  }) {
    const value = await getMeta(node.data.Website);
    quizzesMetadata.push(value);
  });

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
      otherQuizzes: quizzesMetadata,
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
        lastModified: obj[key].data.LastModified,
      },
    });
  });
};
