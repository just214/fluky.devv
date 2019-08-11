import React from "react";
import { Input, Button } from "../components/common";

const PodcastSuggestionForm = () => {
  return (
    <form
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/podcasts"
      name="podcast-suggestion"
      css={`
        label {
          display: flex;
          flex-direction: column;
          margin: 3px 0px;
        }
      `}
    >
      <input type="hidden" name="form-name" value="podcast-suggestion" />
      <label htmlFor="podcast-name">
        Name of Podcast
        <input name="podcast-name" id="podcast-name" autoFocus type="text" />
      </label>
      <label htmlFor="podcast-website">
        Podcast Website (optional)
        <input name="podcast-website" id="podcast-website" type="text" />
      </label>

      <label htmlFor="submitter-name">
        Your Name (optional)
        <input name="submitter-name" id="submitter-name" type="text" />
      </label>
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PodcastSuggestionForm;
