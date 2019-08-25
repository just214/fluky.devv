import React from "react";
import BackToTop from "../components/back-to-top";
import Search from "../components/search";
import Heading from "../components/heading";
import ListLayout from "../components/list-layout";
import useSearch from "../hooks/useSearch";

const BuzzWords = ({ pageContext }) => {
  const [buzzwords, setFilter] = useSearch(pageContext.buzzwords, [
    "Word",
    "Definition",
  ]);

  return (
    <ListLayout
      title="Dev Buzzwords"
      keywords={["buzzwords", "words", "definitions"]}
      description="A collection of coding and front end developer-related buzzwords and their definitions."
      type="buzzword"
      lastUpdatedDate={pageContext.lastModifiedDate}
    >
      <BackToTop />
      <div>
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
                    margin-top: 10px;
                  `}
                >
                  {node.data.Definition}
                </dfn>
              </li>
            );
          })}
        </ul>
      </div>
    </ListLayout>
  );
};

export default BuzzWords;
