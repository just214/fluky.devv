const path = require("path");
const fetchYouTube = require("./utils/asyncFetchYoutubeData");
const getLastModifiedDate = require("./utils/getlastModifiedDate");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query WebsitesQuery {
      allAirtable(filter: { table: { eq: "YouTube" } }) {
        edges {
          node {
            data {
              UserName
              LastModifiedDate
              Tags
              Type
            }
          }
        }
      }
    }
  `);

  const youTubeData = await fetchYouTube(data.allAirtable.edges);

  createPage({
    path: `youtube`,
    component: path.resolve(`./src/templates/list-page-template.tsx`),
    context: {
      data: youTubeData,
      lastModifiedDate: getLastModifiedDate(data.allAirtable.edges),
      pageTitle: "Dev YouTube",
      pageDescription:
        "A collection of the best YouTube channels for front end developers.",
      pageKeywords: ["youtube", "videos", "tutorials"],
    },
  });
};
