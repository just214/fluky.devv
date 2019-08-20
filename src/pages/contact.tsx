import React, { useState } from "react";
import { RouterProps } from "@reach/router";
import { Link } from "gatsby";
import BaseForm from "../components/forms/base-form";
import { Layout, TitleBox } from "../components/common";
import { FaAngleLeft } from "react-icons/fa";
import Input from "antd/es/input";
const { TextArea } = Input;

const quizQuestionTemplate = `Quiz: JavaScript
Question: Which of the following is INVALID syntax?
Option A: document.getElementById("demo")
Option B: document.getElementsByTagName("demo")
Option C: document.getElementsByClassName("demo")
Option D: document.getElement("#demo")
Correct Answer: A
Explanation: document.getElement is not a valid DOM method.
`;

const placeholders = {
  comment: "What is on your mind?",
  podcasts: `Please provide the name and website of the podcast(s) that you would like to suggest.`,
  newsletters: `Please provide the name and website of the newsletter(s) that you would like to suggest.`,
  buzzwords: `Please provide the word and definition of the buzzword(s) that you would like to suggest.`,
  websites: `Please provide the URL for the community that you would like to suggest.`,
  health: `Please provide the URL for the health-related website(s) that you would like to suggest.`,
  quizzes: `If you would like to suggest a quiz website, please provide the URL.
  
If you would like to suggest a quiz question, please follow the template below.`,
};

const options = [
  { label: "General Comment", value: "comment" },
  { label: "Suggest a Podcast", value: "podcasts" },
  { label: "Suggest a Newsletter", value: "newsletters" },
  { label: "Suggest a Buzzword", value: "buzzwords" },
  { label: "Suggest a Community", value: "communities" },
  { label: "Suggest a Health Website", value: "health" },
  { label: "Suggest a Quiz or Question", value: "quizzes" },
];

export type ContactProps = {};
export const Contact: React.FC<ContactProps & RouterProps> = ({ location }) => {
  const type =
    location.state && location.state.type ? location.state.type : "comment";

  const [formType, setFormType] = useState(type);

  const handleChange = e => {
    setFormType(e.target.value);
  };

  return (
    <Layout
      title="Contact Us"
      description="Make a suggestion, report an issue, or just say hi!"
      keywords={["contact", "form"]}
    >
      {location.state && location.state.type && (
        <Link
          to={`${location.state.type}`}
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <FaAngleLeft style={{ color: "inherit" }} />
          <span>Back to {location.state.type}</span>
        </Link>
      )}
      <TitleBox
        title="Contact Us"
        subTitle="Make a suggestion, report an issue, or just say hello."
      />
      <br />

      <BaseForm>
        <div>
          <label
            htmlFor="contact-type"
            css={`
              font-size: 1rem;
              display: block;
              font-weight: bold;
            `}
          >
            What brings you here today?
          </label>
          <select
            name="Selection"
            defaultValue={formType}
            id="contact-type"
            onChange={handleChange}
          >
            {options.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>

          <TextArea
            // rows={formType === "quizzes" ? 8 : 3}
            name="comment"
            id="comment"
            autoFocus
            autosize={{ minRows: 4, maxRows: 100 }}
            required
            placeholder={placeholders[formType]}
          />

          {formType === "quizzes" && (
            <TextArea autosize disabled placeholder={quizQuestionTemplate} />
          )}
        </div>
      </BaseForm>
    </Layout>
  );
};

export default Contact;
