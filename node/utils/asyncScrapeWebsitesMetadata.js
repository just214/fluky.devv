const path = require("path");
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");
const fetch = require("node-fetch");

async function asyncScrapeWebsitesMetadata(array) {
  const values = [];
  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  async function getMeta(data) {
    const url = data.URL;
    const response = await fetch(url);
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    const metadata = await getMetadata(doc, url);
    const {
      provider,
      title,
      description,
      image,
      icon,
      url: THE_URL,
    } = metadata;

    const apiData = {
      provider,
      title,
      description,
      thumbnail: icon || image,
      url: THE_URL,
    };

    if (data.Tags) {
      return {
        ...apiData,
        tags: data.Tags.sort(),
      };
    } else {
      return { ...apiData, tags: [] };
    }
  }
  const data = await asyncForEach(array, async function({ node }) {
    const value = await getMeta(node.data);
    values.push(value);
  });
  return values.sort((a, b) => {
    const titleA = a.title ? a.title.toLowerCase() : "";
    const titleB = b.title ? b.title.toLowerCase() : "";
    return titleA < titleB ? -1 : 1;
  });
}

module.exports = asyncScrapeWebsitesMetadata;
