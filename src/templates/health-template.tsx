import React, { useState } from "react";
import { Link } from "gatsby";
import Website from "../components/website";
import { BackToTop, Search, Layout, TitleBox } from "../components/common";

const Websites = ({ pageContext }) => {
  const [filter, setFilter] = useState("");

  const sortedData = pageContext.data
    .sort((a, b) => {
      const nameA = a.provider.toLowerCase();
      const nameB = b.provider.toLowerCase();
      return nameA < nameB ? -1 : 1;
    })
    .filter(v => {
      // const tags = v.tags.join(",").toLowerCase();

      // if (tags.includes(filter.toLowerCase())) return true;
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
      } else if (
        v.title &&
        v.title.toLowerCase().includes(filter.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

  return (
    <Layout
      title="Dev Health"
      keywords={["health", "stretches", "exercise"]}
      description="A collection of resources to make sure you stay as healthy as possible as a developer."
    >
      <BackToTop />

      <div
        css={`
          margin-bottom: 200px;
        `}
      >
        <TitleBox
          title="Dev Health"
          subTitle="A collection of resources to make sure you stay as healthy as possible as a developer."
          lastUpdated={pageContext.lastModified}
        >
          <Link to="/contact" state={{ type: "health" }}>
            Suggest a Website
          </Link>
        </TitleBox>

        <br />
        <Search onChange={value => setFilter(value)} />
        <small
          css={`
            padding-left: 10px;
          `}
        >
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
