import React from "react";
import { Link } from "gatsby";
import {
  Layout,
  TitleBox,
  BackToTop,
  Search,
  Heading,
} from "../components/common";
import useSearch from "../hooks/useSearch";

const BuzzWords = ({ pageContext }) => {
  const [buzzwords, setFilter] = useSearch(pageContext.buzzwords, [
    "Word",
    "Definition",
  ]);

  return (
    <Layout
      title="Dev Buzzwords"
      keywords={["buzzwords", "words", "definitions"]}
      description="A collection of coding and front end developer-related buzzwords and their definitions."
    >
      <BackToTop />
      <div
        css={`
          margin-bottom: 100px;
        `}
      >
        <TitleBox
          title="Dev Buzzwords"
          subTitle="A collection of coding and front end developer-related buzzwords and their definitions."
          lastUpdated={pageContext.lastModified}
        >
          <Link to="/contact" state={{ type: "buzzwords" }}>
            Suggest a Buzzword
          </Link>
        </TitleBox>

        <br />
        <Search onChange={e => setFilter(e)} />
        <small
          css={`
            padding-left: 10px;
          `}
        >
          Showing {buzzwords.length} of {pageContext.buzzwords.length}
        </small>
        <ul>
          {buzzwords.map(({ node }) => {
            return (
              <li
                key={node.data.Word}
                css={`
                  margin: 10px 0px;
                  padding: 8px;
                  border-radius: 10px;
                  border: 1px solid ${props => props.theme.gray2};
                  background: ${props => props.theme.gray1};
                `}
              >
                <Heading>{node.data.Word}</Heading>
                <dfn
                  css={`
                    margin: 0;
                    font-style: normal;
                    display: block;
                  `}
                >
                  {node.data.Definition}
                </dfn>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default BuzzWords;
