import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
// TODO NEED SEO ON THIS PAGE!
import MainMenu from "../components/QuizMenu";

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
        <h1
          css={`
            color: ${props => props.theme.blue};
            font-weight: normal;
          `}
        >
          <b>Buzz</b>words
        </h1>
      </Link>
    </div>
  </Layout>
);

export default App;
