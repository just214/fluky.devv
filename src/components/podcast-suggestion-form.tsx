import React from "react";
import Input from "antd/es/input";
import Button from "antd/es/button";

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
          padding-top: 12px;
        }
      `}
    >
      <Input type="hidden" name="form-name" value="podcast-suggestion" />
      <label htmlFor="podcast-name">
        Name of Podcast
        <Input name="podcast-name" id="podcast-name" autoFocus type="text" />
      </label>
      <label htmlFor="podcast-website">
        Podcast Website (optional)
        <Input name="podcast-website" id="podcast-website" type="text" />
      </label>

      <label htmlFor="submitter-name">
        Your Name (optional)
        <Input name="submitter-name" id="submitter-name" type="text" />
      </label>
      <br />
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
    </form>
  );
};

export default PodcastSuggestionForm;
