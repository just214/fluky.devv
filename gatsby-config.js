const path = require("path");

require("dotenv");

const config = {
  siteMetadata: {
    title: `fluky.dev`,
    description: `A collection of resources for front end developers. Coding quizzes, podcasts, newsletters, and more!`,
    author: `gojutin`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-antd-v2`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: "images",
      },
    },
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
        icon: "src/images/flukydev-icon.png",
        icons: [
          {
            src: "flukydev-icon-512.png",
            sizes: "512x512",
            types: "image/png",
          },
          {
            src: "flukydev-icon-192.png",
            sizes: "192x192",
            types: "image/png",
          },
        ],
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
    // `gatsby-plugin-offline`,
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
