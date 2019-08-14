import React, { useState } from "react";
import Layout from "../components/common/layout";
import {
  TitleBox,
  WebsiteLink,
  SearchBox,
  BackToTop,
  LastUpdated,
} from "../components/common";
import Divider from "antd/es/divider";
import NewsletterSuggestionForm from "../components/forms/newsletter-suggestion-form";
import Tag from "antd/es/tag";

export const NewsLetters = ({ pageContext }) => {
  const [filter, setFilter] = useState("");
  const data = pageContext.newsletters.filter(({ node }) => {
    const name = node.data.Name.toLowerCase();
    const description = node.data.Description.toLowerCase();
    const tags = node.data.Tags.join(",");

    if (name.includes(filter)) {
      return true;
    } else if (description.includes(filter)) {
      return true;
    } else if (tags.includes(filter)) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <Layout
      title="Dev Newsletters"
      keywords={[
        "newsletters",
        "dev",
        "frontend",
        "fluky",
        "fluky.dev",
        "developers",
        "coders",
        "javascript",
        "typescript",
        "quiz",
        "resources",
      ]}
      description="A collection of the best front end developer and coding newsletters."
    >
      <BackToTop />
      <TitleBox
        title="Newsletters"
        subTitle="A collection of the best front end developer and coding newsletters."
      >
        <LastUpdated date={pageContext.lastModified} />

        <NewsletterSuggestionForm />
      </TitleBox>

      <br />
      <SearchBox onChange={value => setFilter(value.toLowerCase())} />

      <div
        css={`
          margin-top: 20px;
        `}
      >
        {data.map(({ node }) => {
          const { Name, Description, Website, Tags } = node.data;
          return (
            <div key={Name}>
              <h1
                css={`
                  font-family: "Lalezar";
                  margin-bottom: 0px;
                  color: ${props => props.theme.blue};
                `}
              >
                {Name}
              </h1>

              <p
                css={`
                  margin: 0px;
                  margin-bottom: 8px;
                `}
              >
                {Description}
              </p>
              <div
                css={`
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;
                `}
              >
                <div style={{ marginRight: "20px" }}>
                  <WebsiteLink url={Website} />
                </div>

                {Tags.map(tag => (
                  <Tag
                    key={tag}
                    color="gold"
                    style={{ padding: "0px 3px", fontWeight: "bold" }}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>

              <Divider style={{ padding: 0, margin: "20px 0px 20px 0px" }} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default NewsLetters;
