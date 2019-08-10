const createPodcastPage = require("./node/createPodcastPage");
const createQuizPages = require("./node/createQuizPages");
const createBuzzwordsPage = require("./node/createBuzzwordsPage");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await createPodcastPage(createPage, graphql);
  await createQuizPages(createPage, graphql);
  await createBuzzwordsPage(createPage, graphql);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const condition =
    node.internal.type === `Airtable` && node.table === "Questions";
  if (condition) {
    createNodeField({
      name: `category`,
      node,
      value: node.data.Category[0].toLowerCase(),
    });
  }
};
