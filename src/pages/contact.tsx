import React, { useState, useMemo } from "react";
import { RouterProps } from "@reach/router";
import { Link } from "gatsby";
import NewsletterSuggestionForm from "../components/forms/newsletter-suggestion-form";
import BuzzwordSuggestionForm from "../components/forms/buzzword-suggestion-form";
import PodcastSuggestionForm from "../components/forms/podcast-suggestion-form";
import GeneralCommentForm from "../components/forms/general-comment-form";
import BaseForm from "../components/forms/base-form";
import { Layout, TitleBox } from "../components/common";
import Select from "antd/es/select";
import { FaAngleLeft } from "react-icons/fa";

const { Option } = Select;

const options = [
  { label: "General Comment", value: "comment" },
  { label: "Suggest a Podcast", value: "podcast" },
  { label: "Suggest a Newsletter", value: "newsletter" },
  { label: "Suggest a Buzzword", value: "buzzword" },
];

export type ContactProps = {};
export const Contact: React.FC<ContactProps & RouterProps> = ({ location }) => {
  const type =
    location.state && location.state.type ? location.state.type : "comment";

  const [formType, setFormType] = useState(type);

  const handleChange = value => {
    setFormType(value);
  };

  const FormComponent = useMemo(() => {
    if (formType === "newsletter") {
      return NewsletterSuggestionForm;
    } else if (formType === "buzzword") {
      return BuzzwordSuggestionForm;
    } else if (formType === "podcast") {
      return PodcastSuggestionForm;
    } else if (formType === "comment") {
      return GeneralCommentForm;
    } else {
      return GeneralCommentForm;
    }
  }, [formType]);

  return (
    <Layout
      bg="#f5f5f5"
      title="Contact Us"
      description="Make a suggestion, report an issue, or just say hi!"
      keywords={[
        "fluky",
        "fluky.dev",
        "dev",
        "developers",
        "coders",
        "javascript",
        "typescript",
        "html",
        "css",
        "quiz",
        "quizzes",
        "contact",
        "form",
      ]}
    >
      {location.state && location.state.type && (
        <Link
          to={`${location.state.type}s`}
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <FaAngleLeft style={{ color: "inherit" }} />
          <span>Back to {location.state.type}</span>s
        </Link>
      )}
      <TitleBox
        title="Contact Us"
        subTitle="Make a suggestion, report an issue, or just say hello."
      />
      <br />
      <label
        htmlFor="contact-type"
        css={`
          font-size: 1.5rem;
          display: block;
        `}
      >
        Hi, what brings you here today?
      </label>
      <br />
      <Select
        size="large"
        defaultValue={formType}
        id="contact-type"
        style={{ width: 300 }}
        onChange={handleChange}
      >
        {options.map(option => {
          return (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          );
        })}
      </Select>
      <div
        css={`
          margin-top: 20px;
        `}
      >
        <h3
          css={`
            color: ${props => props.theme.blue};
            margin: 10px 0px;
            font-weight: bold;
          `}
        >
          {options.find(o => o.value === formType).label}
        </h3>
        <BaseForm>
          <FormComponent />
        </BaseForm>
      </div>
    </Layout>
  );
};

export default Contact;
