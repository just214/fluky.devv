import React, { useState } from "react";
import Input from "antd/es/input";
import Button from "antd/es/button";
import NetlifyForm from "react-netlify-form";
import Modal from "antd/es/modal";
import { Emoji } from "./common";

interface NetlifyFormProps {
  formName: string;
  buttonText: string;
  buttonIcon?: string;
  successMessage: string;
}

const NetlifyFormComponent: React.FC<NetlifyFormProps> = ({
  formName,
  buttonText,
  buttonIcon,
  children,
  successMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        size="large"
        type="link"
        icon={buttonIcon}
        onClick={() => setIsOpen(true)}
        style={{ margin: 0, padding: 0 }}
      >
        {buttonText}
      </Button>
      <Modal
        title={formName}
        visible={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        maskStyle={{ background: "rgba(0,0,0,.8)" }}
      >
        <div
          css={`
            max-width: 100%;
          `}
        >
          <NetlifyForm name={formName}>
            {({ loading, error, success }) => {
              if (success) {
                return (
                  <h3>
                    <Emoji label="Thumbs up" symbol="👍" size={20} />
                    {successMessage}
                  </h3>
                );
              } else if (error) {
                return (
                  <h3 css={`color: 'tomato`}>
                    "Oops..something went wrong. Please try again.
                  </h3>
                );
              } else if (!success && !error && !loading) {
                return (
                  <div>
                    <Input type="hidden" name="form-name" value={formName} />
                    {children}
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
                  </div>
                );
              }
            }}
          </NetlifyForm>
        </div>
      </Modal>
    </>
  );
};

export default NetlifyFormComponent;
