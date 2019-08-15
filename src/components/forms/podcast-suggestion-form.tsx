import React from "react";
import Input from "antd/es/input";

const PodcastSuggestionForm = () => {
  return (
    <>
      <label htmlFor="podcast-name">
        Name of Podcast
        <Input
          size="large"
          name="podcast-name"
          id="podcast-name"
          autoFocus
          required
          type="text"
        />
      </label>
      <label htmlFor="podcast-website">
        Podcast Website
        <Input
          size="large"
          name="podcast-website"
          id="podcast-website"
          type="url"
        />
      </label>
    </>
  );
};

export default PodcastSuggestionForm;
