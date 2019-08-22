import React from "react";
import { Link } from "gatsby";
import Layout from "../components/common/layout";
import {
  TitleBox,
  WebsiteLink,
  Search,
  BackToTop,
  Heading,
  Tags,
  MarkdownBody,
  Divider,
} from "../components/common";
import useSearch from "../hooks/useSearch";

export const NewsLetters = ({ pageContext }) => {
  const [values, setFilter] = useSearch(pageContext.newsletters, [
    "Description",
    "Tags",
    "Name",
  ]);

  return (
    <Layout
      title="Dev Newsletters"
      keywords={["newsletters"]}
      description="A collection of the best newsletters for front end developers."
    >
      <BackToTop />
      <TitleBox
        title="Dev Newsletters"
        lastUpdated={pageContext.lastModified}
        subTitle="A collection of the best newsletters for front end developers."
      >
        <Link to="/contact" state={{ type: "newsletters" }}>
          Suggest a Newsletter
        </Link>
      </TitleBox>

      <br />
      <Search onChange={value => setFilter(value.toLowerCase())} />
      <small
        css={`
          padding-left: 10px;
        `}
      >
        Showing {values.length} of {pageContext.newsletters.length}
      </small>
      <ul
        css={`
          margin-top: 20px;
          padding: 0;
        `}
      >
        {values.map(({ node }) => {
          const { Name, Description, Website, Tags: itemTags } = node.data;
          return (
            <li key={Name}>
              <Heading>{Name}</Heading>
              <MarkdownBody md={Description} />

              <div
                css={`
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;
                `}
              >
                <Tags tags={itemTags} />

                <div style={{ marginLeft: "10px" }}>
                  <WebsiteLink url={Website} />
                </div>
              </div>

              <Divider />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default NewsLetters;
