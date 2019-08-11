import React, { useState } from "react";
import Layout from "../components/layout";
import SearchBox from "../components/search-box";
import { Title } from "../components/common";

const BuzzWords = ({ pageContext }) => {
  const [filter, setFilter] = useState("");
  const buzzwords = pageContext.buzzwords.filter(({ node }) => {
    return (
      node.data.Word.toLowerCase().includes(filter.toLowerCase()) ||
      node.data.Definition.toLowerCase().includes(filter.toLowerCase())
    );
  });
  return (
    <Layout maxWidth="800px">
      <div
        css={`
          margin-bottom: 100px;
        `}
      >
        <Title>Buzzwords</Title>

        <h4>An ongoing collection of developer and coding buzzwords.</h4>

        <br />
        <SearchBox onChange={e => setFilter(e)} />

        {buzzwords.map(({ node }) => {
          return (
            <div
              key={node.data.Word}
              css={`
                margin: 10px 0px;
                padding: 8px;
                border-radius: 10px;
                border: 1px solid ${props => props.theme.gray2};
                background: ${props => props.theme.gray1};
              `}
            >
              <h2
                css={`
                  color: ${props => props.theme.blue};
                  margin: 0px;
                  padding: 0px;
                  font-family: "Lalezar", sans-serif;
                `}
              >
                {node.data.Word}
              </h2>
              <p
                css={`
                  margin: 0;
                `}
              >
                {node.data.Definition}
              </p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default BuzzWords;
