const unirest = require("unirest");
const chunk = require("lodash/chunk");
const path = require("path");

module.exports = async createPage => {
  const ids = [
    "083e27920aa049c7a4b035f3acb24272", // Syntax
    "ff9de4bef29f4153a84fceb1207daa57", // Front End Happy Hour
    "b4d3741a7e5347c4b967c2245683cee3", // JavaScript Jabber
    "0087e50929614250aac999207c1d33aa", // Developer Tea
    "7b445ee4d0c1471495be885922151b7d", // The Bike Shed
    "8a0c7771ad414b0bbb3865c4fbb21dda", // CodePen Radio
    "e3794af26c2140e2ac74d00395e59201", // Darknet Diaries
    "845246c33c254536b1dd8e0d1099c770", // JS Party
    "a41d5912951d4238a4bf8fa138e068e4", // React Podcast
    "fdb835da533f41a691054815316d8b77", // ShopTalk
    "ec1368d936b743ab9bea01b37508129a", // TalkScript
    "836af2a9e4834ca6b36c6aef66344a3e", // Techmeme Ride Home
  ];

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
