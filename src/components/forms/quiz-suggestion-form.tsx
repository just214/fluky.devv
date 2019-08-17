import React, { useState } from "react";
import Input from "antd/es/input";
import { useStaticQuery, graphql } from "gatsby";

import { Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const quizQuestionPlaceholder = `Here is an example of how you can submit your question:

What is the value of x?

A:
const x = 42;

B:
const x = 345;

C:
const x = 345;

D:
const x = 345;

CORRECT ANSWER: C

EXPLANATION:
x is a const so it cannot be reassigned.

`;

const QuizSuggestionForm = () => {
  const [selection, setSelection] = useState("quiz-topic");

  const data = useStaticQuery(graphql`
    query MyQuery {
      allAirtable(filter: { table: { eq: "Categories" } }) {
        edges {
          node {
            data {
              Name
            }
          }
        }
      }
    }
  `);

  function handleChange(value) {
    setSelection(value);
  }

  const TopicForm = () => {
    return (
      <div>
        <label htmlFor="quiz-topic">
          What is the topic you would like to suggest?
          <Input
            size="large"
            name="quiz-topic"
            id="quiz-topic"
            autoFocus
            required
            type="text"
          />
        </label>
      </div>
    );
  };

  const QuestionForm = () => {
    return (
      <div>
        <label htmlFor="quiz-name">Which quiz?</label>
        <br />
        <Select
          id="quiz-name"
          size="large"
          defaultValue=""
          style={{ width: "100%", maxWidth: "300px" }}
        >
          {data.allAirtable.edges.map(({ node }) => {
            return (
              <Option key={node.data.Name} value={node.data.Name}>
                {node.data.Name}
              </Option>
            );
          })}
        </Select>
        <br />
        <label htmlFor="quiz-question">Quiz Question</label>
        <TextArea id="quiz-question" name="quiz-question" rows={2} />
        <label htmlFor="option-a">Option A</label>
        <TextArea id="option-a" name="option-a" rows={3} />
        <label htmlFor="option-b">Option B</label>
        <TextArea id="option-b" name="option-b" rows={3} />
        <label htmlFor="option-c">Option C</label>
        <TextArea id="option-c" name="option-c" rows={3} />
        <label htmlFor="option-d">Option D</label>
        <TextArea id="option-d" name="option-d" rows={3} />
        <label htmlFor="correct-answer">Correct Answer</label>
        <Select
          id="correct-answer"
          size="large"
          defaultValue=""
          style={{ width: "100%" }}
        >
          {["A", "B", "C", "D"].map(choice => {
            return (
              <Option key={choice} value={choice}>
                {choice}
              </Option>
            );
          })}
        </Select>
        <label htmlFor="explanation">Explanation</label>
        <TextArea id="explantion" name="explantion" rows={3} />
      </div>
    );
  };

  const WebsiteForm = () => {
    return (
      <div>
        <label htmlFor="quiz-website-suggestion">
          What is the quiz website you would like to suggest?
          <Input
            size="large"
            name="quiz-website-suggestion"
            id="quiz-website-suggestion"
            type="url"
            required
          />
        </label>
      </div>
    );
  };

  return (
    <>
      <label htmlFor="suggestion-type">What would you like to suggest?</label>
      <br />
      <div>
        <Select
          id="suggestion-type"
          size="large"
          defaultValue="quiz-topic"
          style={{ width: "100%", maxWidth: "300px" }}
          onChange={handleChange}
        >
          <Option value="quiz-topic">A quiz topic</Option>
          <Option value="quiz-question">A quiz question</Option>
          <Option value="quiz-website">A quiz website</Option>
        </Select>
      </div>
      <br />
      {selection === "quiz-topic" && <TopicForm />}
      {selection === "quiz-question" && <QuestionForm />}
      {selection === "quiz-website" && <WebsiteForm />}
    </>
  );
};

export default QuizSuggestionForm;
