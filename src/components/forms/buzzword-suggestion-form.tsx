import React, { useState } from "react";
import Button from "antd/es/button";
import Input from "antd/es/input";
import NetlifyForm from "react-netlify-form";
import Modal from "antd/es/modal";
import { Emoji } from "../common";

interface NetlifyFormProps {
  formName: string;
  buttonText: string;
  buttonIcon?: string;
  successMessage: string;
}

const NetlifyFormComponent: React.FC<NetlifyFormProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        size="large"
        type="link"
        onClick={() => setIsOpen(true)}
        style={{ margin: 0, padding: 0 }}
      >
        Suggest a Buzzword
      </Button>
      <Modal
        title="Buzzword Suggestion"
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
          <NetlifyForm name="Buzzword Suggestion">
            {({ loading, error, success }) => {
              if (success) {
                return (
                  <h3>
                    <Emoji label="Thumbs up" symbol="👍" size={20} />
                    Thanks for the suggestion!
                  </h3>
                );
              } else if (error) {
                return (
                  <h3
                    css={`
                      color: ${props => props.theme.red};
                    `}
                  >
                    Oops..something went wrong. Please try again.
                  </h3>
                );
              } else if (!success && !error) {
                return (
                  <>
                    {/* <input
                      type="hidden"
                      name="form-name"
                      value="Buzzword Suggestion"
                    /> */}
                    <label htmlFor="word">
                      Word
                      <Input
                        name="word"
                        id="word"
                        autoFocus
                        required
                        type="text"
                      />
                    </label>
                    <label htmlFor="definition">
                      Definition
                      <Input
                        required
                        name="definition"
                        id="definition"
                        type="text"
                      />
                    </label>

                    <label htmlFor="submitter-name">
                      Your Name
                      <Input
                        name="submitter-name"
                        id="submitter-name"
                        type="text"
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
                  </>
                );
              } else return null;
            }}
          </NetlifyForm>
        </div>
      </Modal>
    </>
  );
};

export default NetlifyFormComponent;
