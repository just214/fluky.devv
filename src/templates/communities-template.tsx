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
      if (v.provider.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      } else if (v.description.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

  return (
    <Layout
      title="Dev Communities"
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
          title="Communities"
          subTitle="A collection of the best developer communities."
        >
          <LastUpdated date={pageContext.lastModified} />
          <Link to="/contact" state={{ type: "websites" }}>
            Suggest a Website
          </Link>
        </TitleBox>

        <br />
        <SearchBox onChange={value => setFilter(value)} />

        {sortedData.map(
          ({ title, url, description, image, icon, provider }) => {
            return (
              <Website
                key={title}
                title={title}
                url={url}
                description={description}
                icon={icon || image}
                provider={provider}
              />
            );
          }
        )}
      </div>
    </Layout>
  );
};

export default Websites;
