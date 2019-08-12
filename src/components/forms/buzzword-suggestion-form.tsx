import React from "react";
import Input from "antd/es/input";
import NetlifyForm from "../common/netlify-form";

const BuzzwordSuggestionForm = () => {
  return (
    <>
      <NetlifyForm
        formName="Buzzword Suggestion"
        buttonText="Suggest a Buzzword"
        successMessage="Thanks for the suggestion!"
      >
        <input type="hidden" name="form-name" value="Buzzword Suggestion" />
        <label htmlFor="word">
          Word
          <Input name="word" id="word" autoFocus required type="text" />
        </label>
        <label htmlFor="definition">
          Definition
          <Input required name="definition" id="definition" type="text" />
        </label>

        <label htmlFor="submitter-name">
          Your Name (optional)
          <Input name="submitter-name" id="submitter-name" type="text" />
        </label>
      </NetlifyForm>
    </>
  );
};

export default BuzzwordSuggestionForm;
