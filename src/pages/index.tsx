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
        `}
      >
        <Link to="/buzzwords">
          <MenuBlock rotate={10}>
            <span>
              <b>Buzz</b>words
            </span>{" "}
            <FaArrowAltCircleRight />
          </MenuBlock>
        </Link>
      </div>
    </div>
  </Layout>
);

export default App;
