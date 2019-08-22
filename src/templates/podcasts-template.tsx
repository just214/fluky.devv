import React, { useState } from "react";
import { Link } from "gatsby";

import { TitleBox } from "../components/common";
import Podcast from "../components/podcast";
import { BackToTop, Search, Layout } from "../components/common";

const Podcasts = ({ pageContext }) => {
  const [filter, setFilter] = useState("");

  const sortedPodcasts = JSON.parse(pageContext.podcasts)
    .sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      return nameA < nameB ? -1 : 1;
    })
    .filter(v => {
      if (v.title.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      } else if (v.description.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

  // const { getCollapseProps, getToggleProps, isOpen } = useCollapse();

  return (
    <Layout
      title="Dev Podcasts"
      keywords={["podcasts"]}
      description="A collection of the best podcasts for front end developers."
    >
      <BackToTop />

      <div
        css={`
          margin-bottom: 200px;
        `}
      >
        <TitleBox
          title="Dev Podcasts"
          subTitle="A collection of the best podcasts for front end developers."
          lastUpdated={pageContext.lastModified}
        >
          <Link to="/contact" state={{ type: "podcasts" }}>
            Suggest a Podcast
          </Link>
        </TitleBox>

        <br />
        <Search onChange={value => setFilter(value)} />
        <small
          css={`
            padding-left: 10px;
          `}
        >
          Showing {sortedPodcasts.length} of{" "}
          {JSON.parse(pageContext.podcasts).length}
        </small>

        {sortedPodcasts.map(podcast => {
          return (
            <Podcast
              key={podcast.id}
              title={podcast.title}
              description={podcast.description}
              thumbnail={podcast.thumbnail}
              website={podcast.website}
              details={`${podcast.total_episodes} episodes`}
            />
          );
        })}
        <div>
          This data is provided by the awesome{" "}
          <a href="https://www.listennotes.com/api/">Listen Notes API</a> .
        </div>
      </div>
    </Layout>
  );
};

export default Podcasts;
