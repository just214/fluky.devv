import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
// TODO NEED SEO ON THIS PAGE!
import MainMenu from "../components/quiz-menu";
import MenuBlock from "../components/menu-block";

const App = () => (
  <Layout maxWidth="800px">
    <div
      css={`
        padding: 30px;
        padding-top: 100px;
      `}
    >
      <MainMenu />

      <Link to="/buzzwords">
        <MenuBlock rotate={2}>
          <b>Buzz</b>words
        </MenuBlock>
      </Link>
    </div>
  </Layout>
);

export default App;
