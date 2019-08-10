const unirest = require("unirest");
const chunk = require("lodash/chunk");
const path = require("path");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query PodcastQuery {
      allAirtable(filter: { table: { eq: "Podcasts" } }) {
        edges {
          node {
            data {
              Name
              Id
            }
          }
        }
      }
    }
  `);

  const ids = data.allAirtable.edges.map(({ node }) => {
    return node.data.Id;
  });

  const endpoint = "https://listen-api.listennotes.com/api/v2/podcasts";

  async function requestData(ids) {
    return await unirest
      .post(endpoint)
      .header("X-ListenAPI-Key", process.env.LISTENNOTES_API_KEY)
      .header("Content-Type", "application/x-www-form-urlencoded")
      .send("show_latest_episodes=1")
      .send(`ids=${ids.join(",")}`);
  }
  // CAN ONLY ACCEPT 10 ID'S PER REQUEST

  const responseList = await Promise.all(
    chunk(ids, 10).map(async idList => await requestData(idList))
  );
  const value = await responseList.reduce(
    (acc, resp) => {
      const { body, statusCode } = resp.toJSON();
      return {
        statusCode: acc.statusCode.concat(statusCode),
        body: {
          podcasts: acc.body.podcasts.concat(body.podcasts),
        },
      };
    },
    { statusCode: [], body: { podcasts: [] } }
  );

  createPage({
    path: `podcasts`,
    component: path.resolve(`./src/templates/podcasts-template.tsx`),
    context: {
      podcasts: JSON.stringify(value.body.podcasts),
    },
  });
};
