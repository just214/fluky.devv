const path = require("path");

require("dotenv");

const config = {
  siteMetadata: {
    title: `fluky.dev`,
    description: `Resources and quizzes for front end developers.`,
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
        name: `Fluky.Dev`,
        short_name: `fluky.dev`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
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

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_KEY,
    },
  };
  config.plugins.push(googleAnalyticsCfg);
}

module.exports = config;
