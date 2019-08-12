import React, { useState } from "react";
import Layout from "../components/common/layout";
import {
  TitleBox,
  WebsiteLink,
  SearchBox,
  BackToTop,
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
    <Layout>
      <BackToTop />
      <TitleBox
        title="Newsletters"
        subTitle="A collection of the best developer and coding newsletters."
      >
        <NewsletterSuggestionForm />
      </TitleBox>

      <br />
      <SearchBox onChange={value => setFilter(value.toLowerCase())} />

      <div
        css={`
          margin-top: 10px;
        `}
      >
        {data.map(({ node }) => {
          const { Name, Description, Website, Tags } = node.data;
          return (
            <div key={Name}>
              <h2
                css={`
                  font-family: "Lalezar";
                  margin-bottom: 0px;
                  color: ${props => props.theme.gray5};
                `}
              >
                {Name}
              </h2>
              {Tags.map(tag => (
                <Tag key={tag} color="magenta">
                  {tag}
                </Tag>
              ))}

              <p
                css={`
                  margin: 0px;
                  margin-bottom: 8px;
                `}
              >
                {Description}
              </p>

              <WebsiteLink url={Website} />
              <Divider />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default NewsLetters;
