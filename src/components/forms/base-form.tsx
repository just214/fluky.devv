import React from "react";
import Button from "antd/es/button";
import Input from "antd/es/input";
import Divider from "antd/es/divider";
import NetlifyForm from "react-netlify-form";
import { Emoji } from "../common";
import Alert from "antd/es/alert";
import { motion } from "framer-motion";

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
            <Divider />
            <h4>Optional</h4>
            <label htmlFor="submitter-name">
              Your Name
              <Input
                size="large"
                name="submitter-name"
                id="submitter-name"
                type="text"
              />
            </label>
            <label htmlFor="submitter-name">
              Your Email
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
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
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
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
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
              </motion.div>
            )}
          </div>
        );
      }}
    </NetlifyForm>
  );
};

export default NetlifyFormComponent;
