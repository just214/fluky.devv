import React from "react";
import NetlifyForm from "react-netlify-form";
import Emoji from "./emoji";
import Divider from "./divider";
import Input from "./input";
import Alert from "./alert";
import Button from "./button";

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
            el.value = ""; // eslint-disable-line
          });
        }

        return (
          <div>
            <input type="hidden" name="form-name" value={formName} />
            {children}
            <Divider />
            <h4>Optional</h4>
            <label htmlFor="submitter-name">
              Your Name
              <Input name="submitter-name" id="submitter-name" type="text" />
            </label>
            <label
              css={`
                display: block;
                margin-top: 10px;
              `}
              htmlFor="submitter-name"
            >
              Your Email
              <Input name="submitter-email" id="submitter-email" type="email" />
            </label>

            <br />
            <Button type="submit" disabled={loading}>
              Submit
            </Button>

            <Alert
              type="success"
              style={{ margin: "20px 0px" }}
              isOpen={!!success}
            >
              <Emoji label="Thumbs up" symbol="👍 " size={20} />
              <span css={"padding-left: 10px; font-size: 1.1em;"}>
                {successMessage}
              </span>
            </Alert>

            <Alert type="error" style={{ margin: "20px 0px" }} isOpen={error}>
              <Emoji label="Thumbs up" symbol="😟 " size={20} />
              {"  "}
              <span>Oops..something went wrong. Please try again.</span>
            </Alert>
          </div>
        );
      }}
    </NetlifyForm>
  );
};

export default NetlifyFormComponent;
