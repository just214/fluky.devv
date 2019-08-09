import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
// TODO NEED SEO ON THIS PAGE!
import MainMenu from "../components/quiz-menu";
import MenuBlock from "../components/menu-block";
import { FaArrowAltCircleRight } from "react-icons/fa";

const App = () => (
  <Layout maxWidth="800px">
    <div
      css={`
        padding: 30px;
        padding-top: 100px;
      `}
    >
      <MainMenu />
      <div
        css={`
          margin-top: 100px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        `}
      >
        <MenuBlock rotate={10} to="/buzzwords">
          <b>BUZZ</b>WORDS
        </MenuBlock>

        <MenuBlock rotate={-10} to="/podcasts">
          PODCASTS
        </MenuBlock>
        <MenuBlock rotate={10} to="/newsletters">
          NEWSLETTERS
        </MenuBlock>
      </div>
    </div>
  </Layout>
);

export default App;
