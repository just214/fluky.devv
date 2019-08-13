import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  description?: string;
  keywords?: string[];
  lang?: string;
  /*eslint-disable */
  meta?: any[];
  /*eslint-enable */
  title: string;
}

const SEO: React.FC<SEOProps> = ({
  description = "Resources and quizzes for front end developers.",
  keywords = ["developer", "code", "quizzes", "resources"],
  lang = "en",
  meta = [],
  title = "fluky.dev",
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
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      /*eslint-disable */
      link={[
        {
          rel: "icon",
          href: "favicon.ico",
        },
      ]}
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
          keywords.length > 0
            ? {
                content: keywords.join(`, `),
                name: `keywords`,
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
