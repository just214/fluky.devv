import React from "react";
import Input from "antd/es/input";
import NetlifyForm from "./common/netlify-form";

const NewsletterSuggestionForm = () => {
  return (
    <>
      <NetlifyForm
        formName="Newsletter Suggestion"
        buttonText="Suggest a Newsletter"
        successMessage="Thanks for the suggestion!"
      >
        <Input type="hidden" name="form-name" value="podcast-suggestion" />
        <label htmlFor="newsletter-name">
          Name of Newsletter
          <Input
            name="newsletter-name"
            id="newsletter-name"
            autoFocus
            required
            type="text"
          />
        </label>
        <label htmlFor="newsletter-description">
          Newsletter Description (optional)
          <Input
            name="newsletter-description"
            id="newsletter-description"
            type="text"
          />
        </label>
        <label htmlFor="newsletter-website">
          Newsletter Website (optional)
          <Input
            name="newsletter-website"
            id="newsletter-website"
            type="text"
          />
        </label>

        <label htmlFor="submitter-name">
          Your Name (optional)
          <Input name="submitter-name" id="submitter-name" type="text" />
        </label>
      </NetlifyForm>
    </>
  );
};

export default NewsletterSuggestionForm;
