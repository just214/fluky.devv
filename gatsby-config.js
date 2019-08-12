const path = require("path");

require("dotenv");

module.exports = {
  siteMetadata: {
    title: `Front End Stuff`,
    description: `Stuff for front end developers`,
    author: `gojutin`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: "images",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-typescript-deluxe`,
        short_name: `gatsby-starter-typescript-deluxe`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Questions`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Categories`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Buzzwords`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Podcasts`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Newsletters`,
          },
        ],
      },
    },
  ],
};
