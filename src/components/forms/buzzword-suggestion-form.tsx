import React from "react";
import Input from "antd/es/input";
const { TextArea } = Input;

const BuzzwordSuggestionForm = () => {
  return (
    <>
      <label htmlFor="word">
        Word
        <Input
          size="large"
          name="word"
          id="word"
          autoFocus
          required
          type="text"
        />
      </label>
      <label htmlFor="definition">
        Definition
        <TextArea required name="definition" id="definition" rows={3} />
      </label>
    </>
  );
};

export default BuzzwordSuggestionForm;
