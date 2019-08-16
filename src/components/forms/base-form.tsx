import React from "react";
import Button from "antd/es/button";
import Input from "antd/es/input";
import Divider from "antd/es/divider";
import NetlifyForm from "react-netlify-form";
import { Emoji } from "../common";
const { TextArea } = Input;

interface NetlifyFormProps {
  formName?: string;
  successMessage?: string;
}

const NetlifyFormComponent: React.FC<NetlifyFormProps> = ({
  formName = "Contact Form",
  children,
  successMessage = "Got it, thanks!",
}) => {
  return (
    <NetlifyForm name={formName}>
      {({ loading, error, success }) => {
        if (success) {
          const allInputs = document.querySelectorAll("input, textarea");
          allInputs.forEach((el: HTMLInputElement | HTMLTextAreaElement) => {
            el.value = "";
          });
        }

        return (
          <div>
            <input type="hidden" name="form-name" value={formName} />
            {children}
            <Divider style={{ margin: "8px 0px" }} />
            <label htmlFor="submitter-name">
              Your Name
              <Input
                size="large"
                name="submitter-name"
                id="submitter-name"
                type="text"
                required
              />
            </label>
            <label htmlFor="submitter-name">
              Your Email (optional)
              <Input
                size="large"
                name="submitter-email"
                id="submitter-email"
                type="email"
              />
            </label>
            <label htmlFor="submitter-additional-comments">
              Additional Comments
              <TextArea
                rows={2}
                name="submitter-additional-comments"
                id="submitter-additional-comments"
              />
            </label>
            <br />
            <Button
              css={`
                margin-top: 10px;
              `}
              htmlType="submit"
              type="primary"
              loading={loading}
            >
              Submit
            </Button>

            {success && (
              <h3
                css={`
                  margin-top: 10px;
                  color: ${props => props.theme.pink};
                `}
              >
                <Emoji label="Thumbs up" symbol="👍" size={20} />
                {"   "}
                {successMessage}
              </h3>
            )}

            {error && (
              <h3
                css={`
                  color: ${props => props.theme.red};
                `}
              >
                Oops..something went wrong. Please try again.
              </h3>
            )}
          </div>
        );
      }}
    </NetlifyForm>
  );
};

export default NetlifyFormComponent;
