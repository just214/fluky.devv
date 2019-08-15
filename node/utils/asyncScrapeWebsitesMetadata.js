const path = require("path");
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");
const fetch = require("node-fetch");

async function asyncScrapteWebsitesMetadata(array) {
  const values = [];
  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  async function getMeta(data) {
    const url = data.Website;
    const response = await fetch(url);
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    const metadata = await getMetadata(doc, url);

    return { ...metadata, tag: data.Tags[0] };
  }
  const data = await asyncForEach(array, async function({ node }) {
    const value = await getMeta(node.data);
    values.push(value);
  });
  return values;
}

module.exports = asyncScrapteWebsitesMetadata;
