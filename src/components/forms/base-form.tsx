import React from "react";
import Button from "antd/es/button";
import Input from "antd/es/input";
import Divider from "antd/es/divider";
import NetlifyForm from "react-netlify-form";
import { Emoji } from "../common";
import Alert from "antd/es/alert";

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
          const allInputs = document.querySelectorAll(
            "input, textarea, select"
          );
          allInputs.forEach(
            (
              el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            ) => {
              el.value = "";
            }
          );
        }

        return (
          <div>
            <input type="hidden" name="form-name" value={formName} />
            {children}
            <Divider />
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

            <br />
            <Button
              css={`
                margin-top: 10px;
              `}
              htmlType="submit"
              size="large"
              type="primary"
              loading={loading}
            >
              Submit
            </Button>

            {success && (
              <Alert
                type="success"
                style={{ margin: "20px 0px" }}
                message={
                  <>
                    <Emoji label="Thumbs up" symbol="👍 " size={20} />
                    <b>{successMessage}</b>
                  </>
                }
              />
            )}

            {error && (
              <Alert
                type="error"
                style={{ margin: "20px 0px" }}
                message={
                  <>
                    <Emoji label="Thumbs up" symbol="😟 " size={20} />
                    <b>Oops..something went wrong. Please try again.</b>
                  </>
                }
              />
            )}
          </div>
        );
      }}
    </NetlifyForm>
  );
};

export default NetlifyFormComponent;
