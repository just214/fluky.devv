import React, { useState } from "react";
import { Link } from "gatsby";
import Website from "../components/website";

import { TitleBox } from "../components/common";
import {
  BackToTop,
  SearchBox,
  Layout,
  LastUpdated,
} from "../components/common";

const Websites = ({ pageContext }) => {
  const [filter, setFilter] = useState("");

  const sortedData = pageContext.data
    .sort((a, b) => {
      const nameA = a.provider.toLowerCase();
      const nameB = b.provider.toLowerCase();
      return nameA < nameB ? -1 : 1;
    })
    .filter(v => {
      const tags = v.tags.join(",").toLowerCase();

      if (tags.includes(filter.toLowerCase())) return true;
      if (
        v.provider &&
        v.provider.toLowerCase().includes(filter.toLowerCase())
      ) {
        return true;
      } else if (
        v.description &&
        v.description.toLowerCase().includes(filter.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

  return (
    <Layout
      title="Community"
      keywords={[
        "community",
        "communities",
        "dev",
        "frontend",
        "fluky",
        "fluky.dev",
        "developers",
        "coders",
        "javascript",
        "typescript",
        "html",
        "css",
        "quiz",
        "resources",
      ]}
      description="A collection of the best developer communities."
    >
      <BackToTop />

      <div
        css={`
          margin-bottom: 200px;
        `}
      >
        <TitleBox
          title="Community"
          subTitle="A collection of the best developer communities."
        >
          <LastUpdated date={pageContext.lastModified} />
          <Link to="/contact" state={{ type: "websites" }}>
            Suggest a Website
          </Link>
        </TitleBox>

        <br />
        <SearchBox onChange={value => setFilter(value)} />
        <small>
          Showing {sortedData.length} of {pageContext.data.length}
        </small>

        {sortedData.map(
          ({ title, url, description, image, icon, provider, tags }) => {
            return (
              <Website
                key={title}
                title={title}
                url={url}
                description={description}
                icon={icon || image}
                provider={provider}
                tags={tags}
              />
            );
          }
        )}
      </div>
    </Layout>
  );
};

export default Websites;
