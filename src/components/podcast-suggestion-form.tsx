import React from "react";

const PodcastSuggestionForm = () => {
  return (
    <form
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="podcast-suggestion"
      css={`
        label {
          display: flex;
          flex-direction: column;
          margin: 5px 0px;
        }
        input {
          font-size: 18px;
          border: 1px solid ${props => props.theme.gray3};
          border-radius: 5px;
          width: 280px;
          max-width: 90%;
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
      <input
        type="hidden"
        name="podcast-suggestion"
        value="podcast-suggestion"
      />
      <label htmlFor="podcast-name">Name of Podcast</label>
      <input name="podcast-name" id="podcast-name" autoFocus type="text" />

      <label htmlFor="podcast-website">Podcast Website (optional)</label>
      <input
        name="podcast-website"
        id="podcast-website"
        autoFocus
        type="text"
      />

      <label htmlFor="submitter-name">Your Name (optional)</label>

      <input name="submitter-name" id="submitter-name" autoFocus type="text" />
      <br />
      <button
        css={`
          margin-top: 10px;
        `}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default PodcastSuggestionForm;
