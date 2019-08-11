import React from "react";
import Layout from "../components/layout";
// TODO NEED SEO ON THIS PAGE!
import QuizMenu from "../components/quiz-menu";
import MenuBlock from "../components/menu-block";

const App = () => (
  <Layout maxWidth="100%" bg="#333">
    <div
      css={`
        padding: 30px;
        padding-top: 30px;
      `}
    >
      <QuizMenu />
      <div
        css={`
          margin-top: 30px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        `}
      >
        <MenuBlock rotate={3} to="/buzzwords">
          <b>BUZZ</b>WORDS
        </MenuBlock>

        <MenuBlock rotate={-3} to="/podcasts">
          PODCASTS
        </MenuBlock>
        <MenuBlock rotate={3} to="/newsletters">
          NEWSLETTERS
        </MenuBlock>
        <MenuBlock rotate={3} to="/about-site">
          ABOUT THIS SITE
        </MenuBlock>
      </div>
    </div>
  </Layout>
);

export default App;
