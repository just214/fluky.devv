import React, { useState } from "react";
import Layout from "../components/layout";
import { FaExternalLinkAlt } from "react-icons/fa";
import Modal from "react-responsive-modal";
import PodcastSuggestionForm from "../components/podcast-suggestion-form";
import { Title } from "../components/common";

const Podcasts = ({ pageContext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortedPodcasts = JSON.parse(pageContext.podcasts).sort((a, b) => {
    const nameA = a.title.toLowerCase();
    const nameB = b.title.toLowerCase();
    return nameA < nameB ? -1 : 1;
  });

  return (
    <Layout maxWidth="90%">
      <Modal open={isOpen} onClose={() => setIsOpen(false)} center>
        <div
          css={`
            max-width: 80vw;
          `}
        >
          <PodcastSuggestionForm />
        </div>
      </Modal>
      <div
        css={`
          margin-bottom: 200px;
        `}
      >
        <Title>Podcasts for Developers</Title>
        <button
          css={`
            border: none;
            cursor: pointer;
            color: ${props => props.theme.blue};
            font-size: 20px;
            padding: 0;
          `}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Suggest a podcast
        </button>
        {sortedPodcasts.map(podcast => {
          return (
            <div
              key={podcast.id}
              css={`
                display: flex;
                margin: 15px 0px;
                border-bottom: 1px solid ${props => props.theme.gray3};
                padding: 10px;
                @media (max-width: 500px) {
                  flex-direction: column;
                  align-items: center;
                }
              `}
            >
              <img
                css={`
                  border-radius: 10px;
                  margin-right: 10px;
                  height: 150px;
                  width: auto;
                  @media (max-width: 500px) {
                    height: 100%;
                    margin-right: 0px;
                    margin-bottom: 10px;
                  }
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
                  <p>{podcast.total_episodes} episodes</p>
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
