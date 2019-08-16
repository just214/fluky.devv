import React from "react";
import Input from "antd/es/input";

const WebsiteSuggestionForm = () => {
  return (
    <>
      <label htmlFor="newsletter-website">
        Website URL
        <Input
          size="large"
          name="newsletter-website"
          id="newsletter-website"
          type="url"
        />
      </label>
    </>
  );
};

export default WebsiteSuggestionForm;
