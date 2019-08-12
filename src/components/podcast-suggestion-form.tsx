import React, { useState } from "react";
import Input from "antd/es/input";
import Button from "antd/es/button";
import NetlifyForm from "react-netlify-form";
import Modal from "antd/es/modal";

const PodcastSuggestionForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        size="large"
        type="link"
        onClick={() => setIsOpen(true)}
        style={{ margin: 0, padding: 0 }}
      >
        Suggest a Podcast
      </Button>
      <Modal
        title="Suggest a Podcast"
        visible={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <div
          css={`
            max-width: 100%;
          `}
        >
          <NetlifyForm name="Podcast Suggestion">
            {({ loading, error, success }) => (
              <div>
                {loading && <div>Loading...</div>}
                {error && (
                  <div>
                    Your information was not sent. Please try again later.
                  </div>
                )}
                {success && (
                  <div>
                    <h3>Got it...thanks for the suggestion!</h3>
                    <Button type="primary" onClick={() => setIsOpen(false)}>
                      Done
                    </Button>
                  </div>
                )}
                {!loading && !success && (
                  <div>
                    <Input
                      type="hidden"
                      name="form-name"
                      value="podcast-suggestion"
                    />
                    <label htmlFor="podcast-name">
                      Name of Podcast
                      <Input
                        name="podcast-name"
                        id="podcast-name"
                        autoFocus
                        required
                        type="text"
                      />
                    </label>
                    <label htmlFor="podcast-website">
                      Podcast Website (optional)
                      <Input
                        name="podcast-website"
                        id="podcast-website"
                        type="text"
                      />
                    </label>

                    <label htmlFor="submitter-name">
                      Your Name (optional)
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
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </div>
            )}
          </NetlifyForm>
        </div>
      </Modal>
    </>
  );
};

export default PodcastSuggestionForm;
