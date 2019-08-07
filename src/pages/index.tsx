import React from "react";
import Layout from "../components/layout";
// TODO NEED SEO ON THIS PAGE!
import MainMenu from "../components/MainMenu";

const App = () => (
  <Layout fullWidth>
    <div
      css={`
        padding: 30px;
        padding-top: 100px;
      `}
    >
      <MainMenu />
    </div>
  </Layout>
);

export default App;
