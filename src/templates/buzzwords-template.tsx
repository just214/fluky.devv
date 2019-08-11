import React, { useState } from "react";
import Layout from "../components/layout";
import SearchBox from "../components/search-box";
import { Title } from "../components/common";

const BuzzWords = ({ pageContext }) => {
  console.log(pageContext);
  const [filter, setFilter] = useState("");
  const buzzwords = pageContext.buzzwords.filter(({ node }) => {
    return (
      node.data.Word.toLowerCase().includes(filter.toLowerCase()) ||
      node.data.Definition.toLowerCase().includes(filter.toLowerCase())
    );
  });
  return (
    <Layout maxWidth="800px">
      <div>
        <Title>Buzzwords</Title>

        <br />
        <SearchBox onChange={e => setFilter(e.target.value)} />

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
              <h1
                css={`
                  color: ${props => props.theme.blue};
                  margin: 0px;
                  padding: 0;
                  margin-top: 15px;
                  font-family: "Lalezar", sans-serif;
                `}
              >
                {node.data.Word}
              </h1>
              <p>{node.data.Definition}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default BuzzWords;
