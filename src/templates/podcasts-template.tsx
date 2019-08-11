import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { FaExternalLinkAlt } from "react-icons/fa";
import PodcastSuggestionForm from "../components/podcast-suggestion-form";
import { Title } from "../components/common";
import useMedia from "../hooks/useMedia";
import Modal from "antd/es/modal";
import Button from "antd/es/button";
import { BackToTop, SearchBox } from "../components/common";

const Podcasts = ({ pageContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const { isMobile } = useMedia();

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
    <Layout maxWidth="1200px">
      <BackToTop />

      <div
        css={`
          margin-bottom: 200px;
        `}
      >
        <Title>Podcasts</Title>
        <h4>A collection of the best developer and coding podcasts.</h4>
        <SearchBox onChange={value => setFilter(value)} />
        <br />
        <Button
          size="large"
          type="link"
          onClick={() => setIsOpen(true)}
          style={{ margin: 0, padding: 0 }}
        >
          Suggest a Podcast
        </Button>

        <Modal
          title="Suggest a Podcast"
          visible={isOpen}
          footer={null}
          onCancel={() => setIsOpen(false)}
        >
          <div
            css={`
              max-width: 100%;
            `}
          >
            <PodcastSuggestionForm />
          </div>
        </Modal>

        {sortedPodcasts.map(podcast => {
          return (
            <div
              key={podcast.id}
              css={`
                display: flex;
                margin: 15px 0px;
                border-bottom: 1px solid ${props => props.theme.gray3};
                padding: 10px;
                flex-direction: ${isMobile ? "column" : "row"};
                align-items: ${isMobile ? "flex-start" : "center"};
              `}
            >
              <img
                css={`
                  border-radius: 10px;
                  margin-right: ${isMobile ? "0px" : "10px"};
                  height: auto;
                  margin-bottom: ${isMobile ? "10px" : "0px"};
                  width: ${isMobile ? "80%" : "150px"};
                `}
                src={podcast.thumbnail}
              />

              <div>
                <h1
                  css={`
                    font-family: "Lalezar";
                  `}
                >
                  {podcast.title}
                </h1>

                <small
                  dangerouslySetInnerHTML={{ __html: podcast.description }}
                />

                <div
                  css={`
                    display: flex;
                    align-items: center;
                    margin-top: 12px;
                  `}
                >
                  <p
                    css={`
                      margin: 0;
                    `}
                  >
                    {podcast.total_episodes} episodes
                  </p>
                  {podcast.website && (
                    <a
                      href={podcast.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      css={`
                        display: flex;
                        align-items: center;
                        color: ${props => props.theme.blue};
                        margin-left: 18px;
                      `}
                    >
                      <p
                        css={`
                          margin: 0;
                          margin-right: 5px;
                        `}
                      >
                        Visit Website
                      </p>{" "}
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
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
