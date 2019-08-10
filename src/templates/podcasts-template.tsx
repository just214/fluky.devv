import React, { useState } from "react";
import Layout from "../components/layout";
import { FaExternalLinkAlt } from "react-icons/fa";
import Modal from "react-responsive-modal";

const Podcasts = ({ pageContext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout maxWidth="90%">
      <Modal open={isOpen} onClose={() => setIsOpen(false)} center>
        <form
          name="podcast-suggestion"
          method="POST"
          data-netlify="true"
          css={`
            margin: 20px;
            label {
              display: flex;
              flex-direction: column;
              margin: 5px 0px;
            }
            input {
              font-size: 18px;
              border: 1px solid ${props => props.theme.gray3};
              border-radius: 5px;
              width: 300px;
              padding: 4px 10px;
              margin-top: 5px;
            }
            button {
              height: 30px;
              width: 100px;
              font-size: 15px;
              color: white;
              font-weight: bold;
              border-radius: 4px;
              background: ${props => props.theme.blue};
              border: none;
              cursor: pointer;
            }
          `}
        >
          <label htmlFor="podcast-name">
            <small>Name of Podcast</small>
            <input id="podcast-name" autoFocus type="text" />
          </label>

          <label htmlFor="podcast-website">
            <small>Podcast Website (optional)</small>
            <input id="podcast-website" autoFocus type="text" />
          </label>

          <label htmlFor="submitter-name">
            <small>Your Name (optional)</small>

            <input id="submitter-name" autoFocus type="text" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </Modal>
      <div
        css={`
          margin-bottom: 200px;
        `}
      >
        <h1
          css={`
            font-family: "Lalezar";
            font-size: 3rem;
          `}
        >
          PODCASTS FOR DEVELOPERS
        </h1>
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
        {JSON.parse(pageContext.podcasts).map(podcast => {
          return (
            <div
              key={podcast.id}
              css={`
                display: flex;
                margin: 15px 0px;
                border-bottom: 1px solid ${props => props.theme.gray3};
                padding: 10px;
                @media (max-width: 400px) {
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
                  width: 150px;
                  @media (max-width: 400px) {
                    width: 100%;
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
                    margin-bottom: 10px;
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
          This data is provided by the{" "}
          <a href="https://www.listennotes.com/api/">Listen Notes API</a> .
        </div>
      </div>
    </Layout>
  );
};

export default Podcasts;
