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
  meta?: any[];
  /*eslint-enable */
  title: string;
  titleTemplate?: string;
}

const SEO: React.FC<SEOProps> = ({
  description = "Resources for front end developers.",
  keywords = [],
  lang = "en",
  meta = [],
  title = "fluky.dev",
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

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate || `%s | Fluky.dev`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: `flukydev-icon.png`,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `flukydev-icon.png`,
        },
        {
          property: `og:url`,
          content: `https://fluky.dev`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `flukydev-icon.png`,
        },
        /*eslint-enable */
      ]
        .concat(
          [...baseKeywords, ...keywords].length > 0
            ? {
                content: keywords.join(`, `),
                name: `keywords`,
              }
            : []
        )
        .concat(meta)}
    >
      <link rel="icon" href="favicon.ico"></link>
      <link
        rel="icon"
        type="image/png"
        href="flukydev-icon_192.png"
        sizes="192x192"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="flukydev-icon_152_whitebg.png"
      ></link>
    </Helmet>
  );
};

export default SEO;
