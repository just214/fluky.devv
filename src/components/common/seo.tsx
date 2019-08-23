import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const baseKeywords = [
  "fluky",
  "fluky.dev",
  "dev",
  "developers",
  "coders",
  "coding",
  "frontend",
  "front end",
  "javascript",
  "typescript",
  "html",
  "css",
  "developer resources",
];

interface SEOProps {
  description?: string;
  keywords?: string[];
  lang?: string;
  /*eslint-disable */
  /*eslint-enable */
  title: string;
  titleTemplate?: string;
}

const SEO: React.FC<SEOProps> = ({
  description,
  keywords = [],
  lang = "en",
  title = "fluky.dev | Resources for front end developers.",
  titleTemplate,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const allKeywords = [...baseKeywords, ...keywords].join(", ");

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate || `%s | Fluky.dev`}
    >
      <link rel="icon" href="favicon.ico"></link>
      <link
        rel="icon"
        type="image/png"
        href="flukydev-icon-192.png"
        sizes="192x192"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="flukydev-icon_152_whitebg.png"
      ></link>

      <title>fluky.dev | Resources for Front End Developers</title>
      <meta name="keywords" content={allKeywords} />
      <meta
        name="title"
        content="fluky.dev | Resources for Front End Developers"
      />
      <meta name="description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.fluky.dev" />
      <meta
        property="og:title"
        content="fluky.dev | Resources for Front End Developers"
      />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="flukydev-icon.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.fluky.dev" />
      <meta
        property="twitter:title"
        content="fluky.dev | Resources for Front End Developers"
      />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content="flukydev-icon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Barriecito|Muli:400,800&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
};

export default SEO;
