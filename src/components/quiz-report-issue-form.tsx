import React from "react";
import Input from "antd/es/input";
import Select from "antd/es/select";
import NetlifyForm from "./NetlifyForm";

const { Option } = Select;
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
        Please select the appropriate issue.
        <Select
          css={`
            width: 300px;
          `}
        >
          {issueOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </label>
      <label htmlFor="description">Please describe the issue.</label>
      <TextArea name="description" id="description" rows={4} />
      <Input name="id" value={id} style={{ opacity: 0 }} />
    </NetlifyForm>
  );
};

export default QuizReportIssueForm;
