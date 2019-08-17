import React, { useState, useMemo } from "react";
import { RouterProps } from "@reach/router";
import { Link } from "gatsby";
import NewsletterSuggestionForm from "../components/forms/newsletter-suggestion-form";
import BuzzwordSuggestionForm from "../components/forms/buzzword-suggestion-form";
import PodcastSuggestionForm from "../components/forms/podcast-suggestion-form";
import GeneralCommentForm from "../components/forms/general-comment-form";
import WebsiteSuggestionForm from "../components/forms/website-suggestion-form";
import QuizSuggestionForm from "../components/forms/quiz-suggestion-form";
import BaseForm from "../components/forms/base-form";
import { Layout, TitleBox } from "../components/common";
import Select from "antd/es/select";
import { FaAngleLeft } from "react-icons/fa";

const { Option } = Select;

const options = [
  { label: "General Comment", value: "comment" },
  { label: "Suggest a Podcast", value: "podcasts" },
  { label: "Suggest a Newsletter", value: "newsletters" },
  { label: "Suggest a Buzzword", value: "buzzwords" },
  { label: "Suggest a Website", value: "websites" },
  { label: "Suggest a Quiz or Question", value: "quizzes" },
];

export type ContactProps = {};
export const Contact: React.FC<ContactProps & RouterProps> = ({ location }) => {
  const type =
    location.state && location.state.type ? location.state.type : "comment";

  const [formType, setFormType] = useState(type);

  const handleChange = value => {
    setFormType(value);
  };

  const components = [
    { title: "newsletters", Component: NewsletterSuggestionForm },
    { title: "buzzwords", Component: BuzzwordSuggestionForm },
    { title: "podcasts", Component: PodcastSuggestionForm },
    { title: "comment", Component: GeneralCommentForm },
    { title: "websites", Component: WebsiteSuggestionForm },
    { title: "quizzes", Component: QuizSuggestionForm },
  ];

  // const FormComponent = useMemo(() => {
  //   if (formType === "newsletters") {
  //     return NewsletterSuggestionForm;
  //   } else if (formType === "buzzwords") {
  //     return BuzzwordSuggestionForm;
  //   } else if (formType === "podcasts") {
  //     return PodcastSuggestionForm;
  //   } else if (formType === "comments") {
  //     return GeneralCommentForm;
  //   } else if (formType === "websites") {
  //     return WebsiteSuggestionForm;
  //   } else if (formType === "quizzes") {
  //     return QuizSuggestionForm;
  //   } else {
  //     return GeneralCommentForm;
  //   }
  // }, [formType]);

  return (
    <Layout
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
      <label
        htmlFor="contact-type"
        css={`
          font-size: 1rem;
          display: block;
          font-weight: bold;
        `}
      >
        Hi, what brings you here today?
      </label>

      <Select
        size="large"
        defaultValue={formType}
        id="contact-type"
        style={{ width: "100%", maxWidth: "300px", marginBottom: "20px" }}
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

      <BaseForm>
        {/* <FormComponent /> */}
        {components.map(({ title, Component }) => {
          return (
            <div
              key={title}
              css={`
                height: ${formType === title ? "auto" : 0};
                opacity: ${formType === title ? 1 : 0};
              `}
            >
              <Component />
            </div>
          );
        })}
      </BaseForm>
    </Layout>
  );
};

export default Contact;
