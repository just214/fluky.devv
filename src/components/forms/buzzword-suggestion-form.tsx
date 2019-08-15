import React from "react";
import Input from "antd/es/input";

const BuzzwordSuggestionForm = () => {
  return (
    <>
      <label htmlFor="word">
        Word
        <Input name="word" id="word" autoFocus required type="text" />
      </label>
      <label htmlFor="definition">
        Definition
        <Input required name="definition" id="definition" type="text" />
      </label>
    </>
  );
};

export default BuzzwordSuggestionForm;
