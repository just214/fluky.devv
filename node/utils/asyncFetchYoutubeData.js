const fetch = require("node-fetch");
const numeral = require("numeral");

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    //eslint-ignore-line
    await callback(array[index], index, array);
  }
};

const BASE_URL =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet,id%2Cstatistics";

const results = [];

const asyncFetchYouTubeData = async dataArray => {
  await asyncForEach(dataArray, async ({ node }) => {
    const queryType = node.data.Type === "channel" ? "id" : "forUsername";
    const res = await fetch(
      `${BASE_URL}&${queryType}=${node.data.UserName}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = await res.json();

    const { title, description, thumbnails } = data.items[0].snippet;
    const { subscriberCount, videoCount } = data.items[0].statistics;
    const url = node.data.URL;
    const finalData = {
      title,
      description,
      thumbnail: thumbnails.default.url,
      url,
      tags: [
        `${numeral(subscriberCount).format("0a")} subscribers`,
        `${numeral(videoCount).format("0,0")} videos`,
      ],
    };

    results.push(finalData);
  });
  return results.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    return 1;
  });
};

module.exports = asyncFetchYouTubeData;
