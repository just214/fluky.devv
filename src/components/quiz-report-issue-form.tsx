import React, { useState } from "react";
import Input from "antd/es/input";
import NetlifyForm from "./netlify-form";

const { TextArea } = Input;

const issueOptions = [
  {
    label: "The answer is not correct.",
    value: "incorrect_answer",
  },
  {
    label: "The question is not clear.",
    value: "unclear_question",
  },
  {
    label: "Another reason",
    value: "other",
  },
];

export interface QuizReportIssueFormProps {
  id: string;
}
export const QuizReportIssueForm: React.FC<QuizReportIssueFormProps> = ({
  id,
}) => {
  const [selection, setSelection] = useState(null);
  return (
    <NetlifyForm
      formName="Report Quiz Issue"
      successMessage="Thanks for bringing this to our attention!"
      buttonText="Report an issue"
      buttonIcon="flag"
    >
      <label htmlFor="issue-selection">
        Please select the appropriate reason.
        <select
          required
          value={selection}
          onChange={e => setSelection(e.target.value)}
          id="issue-selection"
          name="issue-selection"
          css={`
            width: 300px;
            height: 40px;
            border: 1px solid #dadada;
            display: block;
            margin: 5px 0px;
            font-size: 14px;
          `}
        >
          <option disabled selected>
            {" "}
            -- select an option --{" "}
          </option>
          {issueOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="description">Please describe the issue.</label>
      <textarea rows={4} name="description" id="description" required />
      <input name="id" value={id} style={{ opacity: 0 }} />
    </NetlifyForm>
  );
};

export default QuizReportIssueForm;
