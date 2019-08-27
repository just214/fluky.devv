const unirest = require("unirest");
const chunk = require("lodash/chunk");
const path = require("path");
const getLastModifiedDate = require("./utils/getlastModifiedDate");

module.exports = async (createPage, graphql) => {
  const { data } = await graphql(`
    query PodcastQuery {
      allAirtable(filter: { table: { eq: "Podcasts" } }) {
        edges {
          node {
            data {
              Title
              ListenNotesId
              LastModifiedDate
            }
          }
        }
      }
    }
  `);

  const ids = data.allAirtable.edges.map(({ node }) => {
    return node.data.ListenNotesId;
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
  const responseData = await responseList.reduce(
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

  const values = responseData.body.podcasts
    .map(({ title, description, thumbnail, website, total_episodes }) => {
      // eslint-ignore-line
      return {
        title,
        description,
        thumbnail,
        url: website,
        tags: [`${total_episodes} episodes`], // eslint-ignore-line
      };
    })
    .sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      return 1;
    });

  createPage({
    path: `podcasts`,
    component: path.resolve(`./src/templates/list-page-template.tsx`),
    context: {
      data: values,
      lastModifiedDate: getLastModifiedDate(data.allAirtable.edges),
      pageTitle: "Dev Podcasts",
      pageDescription:
        "A collection of the best podcasts for front end developers.",
      pageKeywords: ["podcasts", "newscasts"],
    },
  });
};
