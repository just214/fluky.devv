import React from "react";
import { Layout, MenuBlock } from "../components/common";
// TODO NEED SEO ON THIS PAGE!
import QuizMenu from "../components/quiz-menu";

const App = () => (
  <Layout maxWidth="100%" bg="#333">
    <div
      css={`
        padding: 20px;
      `}
    >
      <div
        css={`
          margin: 0px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        `}
      >
        <MenuBlock
          gradient={`background: #614385;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #516395, #614385);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #516395, #614385); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          `}
          rotate={-3}
          to="/buzzwords"
          color="yellow"
        >
          <b>BUZZ</b>WORDS
        </MenuBlock>

        <MenuBlock
          rotate={3}
          to="/podcasts"
          color="#333"
          gradient={`background: #1D976C;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #93F9B9, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          `}
        >
          PODCASTS
        </MenuBlock>
        <MenuBlock
          rotate={-3}
          color="#333"
          to="/newsletters"
          gradient={`background: #fceabb;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          `}
        >
          NEWSLETTERS
        </MenuBlock>
        <MenuBlock
          rotate={2}
          to="/about-site"
          color="#333"
          gradient={`background: #f2709c;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #ff9472, #f2709c);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #ff9472, #f2709c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          `}
        >
          ABOUT THIS SITE
        </MenuBlock>
      </div>
      <br />
      <QuizMenu />
    </div>
  </Layout>
);

export default App;
