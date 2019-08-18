import React from "react";
import Input from "antd/es/input";

const { TextArea } = Input;

const BuzzwordSuggestionForm = () => {
  return (
    <>
      <label htmlFor="comment">
        Comment
        <TextArea rows={3} name="comment" id="comment" autoFocus required />
      </label>
    </>
  );
};

export default BuzzwordSuggestionForm;
