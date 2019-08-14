import React, { useState } from "react";
import PodcastSuggestionForm from "../components/forms/podcast-suggestion-form";
import { TitleBox } from "../components/common";
import Podcast from "../components/Podcast";
import {
  BackToTop,
  SearchBox,
  Layout,
  LastUpdated,
} from "../components/common";

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
      keywords={[
        "podcasts",
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
      description="A collection of the best front end developer and coding podcasts."
    >
      <BackToTop />

      <div
        css={`
          margin-bottom: 200px;
        `}
      >
        <TitleBox
          title="Podcasts"
          subTitle="A collection of the best front end developer and coding podcasts."
        >
          <LastUpdated date={pageContext.lastModified} />
          <PodcastSuggestionForm />
        </TitleBox>

        <br />
        <SearchBox onChange={value => setFilter(value)} />

        {sortedPodcasts.map(podcast => {
          return <Podcast key={podcast.id} podcast={podcast} />;
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
