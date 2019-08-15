import React from "react";
import Input from "antd/es/input";
import BaseForm from "./base-form";

const NewsletterSuggestionForm = () => {
  return (
    <>
      <label htmlFor="newsletter-name">
        Name of Newsletter
        <Input
          size="large"
          name="newsletter-name"
          id="newsletter-name"
          autoFocus
          required
          type="text"
        />
      </label>

      <label htmlFor="newsletter-website">
        Newsletter Website
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

export default NewsletterSuggestionForm;
