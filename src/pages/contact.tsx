import React, { useState } from "react";
import { RouterProps } from "@reach/router";
import { Link } from "gatsby";
import BaseForm from "../components/base-form";
import Layout from "../components/layout";
import TitleBox from "../components/title-box";
import TextArea from "../components/textarea";
import Select from "../components/select";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";

const quizQuestionTemplate = `TEMPLATE

Quiz:                       JavaScript
Question:               Which of the following is INVALID syntax?
Option A:               document.getElementById("demo")
Option B:               document.getElementsByTagName("demo")
Option C:               document.getElementsByClassName("demo")
Option D:               document.getElement("#demo")
Answer:                 A
Explanation:         document.getElement is not a valid DOM method.
`;

const placeholders = {
  comment: "What is on your mind?",
  podcasts: `Please provide the name and website of the podcast(s) that you would like to suggest.`,
  newsletters: `Please provide the name and website of the newsletter(s) that you would like to suggest.`,
  buzzwords: `Please provide the word and definition of the buzzword(s) that you would like to suggest.`,
  websites: `Please provide the URL for the community that you would like to suggest.`,
  youtube: `Please provide the YouTube channel name or link to the channel.`,
  health: `Please provide the URL for the health-related website(s) that you would like to suggest.`,
  quizzes: `If you would like to suggest a quiz website, please provide the URL.
  
If you would like to suggest a quiz question, please follow the template below.`,
};

const options = [
  { label: "General Comment", path: "/comment" },
  { label: "Suggest a Podcast", path: "/podcasts" },
  { label: "Suggest a Newsletter", path: "/newsletters" },
  { label: "Suggest a Buzzword", path: "/buzzwords" },
  { label: "Suggest a Community", path: "/communities" },
  { label: "Suggest a Health Website", path: "/health" },
  { label: "Suggest a Quiz or Question", path: "/quizzes" },
  { label: "Suggest a YouTube video", path: "/youtube" },
];

const Contact: React.FC<RouterProps> = ({ location }) => {
  const type = location.state.pathname
    ? options.find(o => o.path === location.state.pathname).path
    : "/comment";

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
      {location.state.pathname && (
        <Link
          to={location.state.pathname}
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <FaAngleLeft />
          back to {location.state.pathname.substring(1)}
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
              margin-bottom: 10px;
              font-weight: bold;
            `}
          >
            What brings you here today?
          </label>
          <Select
            name="Selection"
            defaultValue={formType}
            id="contact-type"
            onChange={handleChange}
          >
            {options.map(option => {
              return (
                <option key={option.path} value={option.path}>
                  {option.label}
                </option>
              );
            })}
          </Select>

          <TextArea
            rows={formType === "/quizzes" ? 8 : 3}
            name="comment"
            id="comment"
            required
            placeholder={placeholders[formType.substring(1)]}
            css={`
              z-index: 1000;
              background: white;
            `}
          />
          <AnimatePresence>
            {formType === "/quizzes" && (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                css={`
                  white-space: pre;
                  padding: 8px;
                  background: ${props => props.theme.gray1};
                  margin-top: 10px;
                  border-radius: 4px;
                  line-height: 1.6rem;
                  z-index: -10;
                  overflow: scroll;
                  font-size: 12px;
                `}
              >
                {quizQuestionTemplate}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </BaseForm>
    </Layout>
  );
};

export default Contact;
