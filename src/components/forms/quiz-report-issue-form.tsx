import React from "react";
import Input from "antd/es/input";
import { NetlifyForm } from "../common";

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
      <TextArea name="description" id="description" rows={4} required />
      <Input size="large" name="id" value={id} style={{ opacity: 0 }} />
    </NetlifyForm>
  );
};

export default QuizReportIssueForm;
