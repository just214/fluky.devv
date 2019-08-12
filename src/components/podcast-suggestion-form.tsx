import React, { useState } from "react";
import Input from "antd/es/input";
import NetlifyForm from "./common/netlify-form";

const PodcastSuggestionForm = () => {
  return (
    <>
      <NetlifyForm
        formName="Podcast Suggestion"
        buttonText="Suggest a Podcast"
        successMessage="Thanks for the suggestion!"
      >
        <label htmlFor="podcast-name">
          Name of Podcast
          <Input
            name="podcast-name"
            id="podcast-name"
            autoFocus
            required
            type="text"
          />
        </label>
        <label htmlFor="podcast-website">
          Podcast Website (optional)
          <Input name="podcast-website" id="podcast-website" type="text" />
        </label>

        <label htmlFor="submitter-name">
          Your Name (optional)
          <Input name="submitter-name" id="submitter-name" type="text" />
        </label>
      </NetlifyForm>
    </>
  );
};

export default PodcastSuggestionForm;
