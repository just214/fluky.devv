import React, { useState } from "react";
import Modal from "antd/es/modal";
import Button from "antd/es/button";
import Input from "antd/es/input";

const { TextArea } = Input;

export interface QuizReportIssueFormProps {
  id: string;
}
export const QuizReportIssueForm: React.FC<QuizReportIssueFormProps> = ({
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("");
  return (
    <div>
      <Button
        type="link"
        icon="flag"
        size="large"
        onClick={() => setIsOpen(true)}
      >
        Report an issue
      </Button>
      <Modal
        title="Report an Issue"
        visible={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <form
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/"
          name="report-quiz-issue"
          css={`
            label {
              display: flex;
              flex-direction: column;
              padding-top: 12px;
            }
          `}
        >
          <Input type="hidden" name="form-name" value="report-quiz-issue" />
          <label htmlFor="reason">Please describe the issue.</label>
          <TextArea
            id="reason"
            value={reason}
            onChange={value => setReason(value)}
          />
          <Input value={id} style={{ opacity: 0 }} />
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default QuizReportIssueForm;
