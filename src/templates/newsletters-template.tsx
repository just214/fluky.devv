import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/common/layout";
import {
  TitleBox,
  WebsiteLink,
  SearchBox,
  BackToTop,
  LastUpdated,
  Heading,
} from "../components/common";
import Divider from "antd/es/divider";
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
        <Link to="/contact" state={{ type: "newsletter" }}>
          Suggest a Newsletter
        </Link>
      </TitleBox>

      <br />
      <SearchBox onChange={value => setFilter(value.toLowerCase())} />

      <ul
        css={`
          margin-top: 20px;
        `}
      >
        {data.map(({ node }) => {
          const { Name, Description, Website, Tags } = node.data;
          return (
            <li key={Name}>
              <Heading color="blue">{Name}</Heading>

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
                <small
                  css={`
                    color: ${props => props.theme.pink};
                  `}
                >
                  <b>{Tags[0]}</b>
                </small>
                <div style={{ marginLeft: "10px" }}>
                  <WebsiteLink url={Website} />
                </div>
              </div>

              <Divider style={{ padding: 0, margin: "20px 0px 20px 0px" }} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default NewsLetters;
