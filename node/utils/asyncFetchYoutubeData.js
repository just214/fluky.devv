// const path = require("path");
// const fetch = require("node-fetch");

// async function asyncFetchYoutubeData(array) {
//   const values = [];
//   const asyncForEach = async (array, callback) => {
//     for (let index = 0; index < array.length; index++) {
//       await callback(array[index], index, array);
//     }
//   };

//   async function getData(data) {
//     const url = data.UserName;
//     const response = await fetch(url);
//     const html = await response.json();

//     if (data.Tags) {
//       return { ...metadata, tags: data.Tags };
//     } else {
//       return metadata;
//     }
//   }
//   const data = await asyncForEach(array, async function({ node }) {
//     const value = await getData(node.data);
//     values.push(value);
//   });
//   return values.sort((a, b) => {
//     const titleA = a.title.toLowerCase();
//     const titleB = b.title.toLowerCase();
//     return titleA < titleB ? -1 : 1;
//   });
// }

// module.exports = asyncFetchYoutubeData;

// const BASE_URL =
//   "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics";

// data.allAirtable.edges.forEach(({ node }) => {
//   fetch(
//     `${BASE_URL}&forUsername=${node.data.UserName}&key=${PROCESS.ENV.YOUTUBE_API_KEY}`
//   );
// });
