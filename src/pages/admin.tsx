import React from "react";
import Layout from "../components/common/layout";
import Markdown from "../components/markdown";
import Tabs from "antd/es/tabs";
import Button from "antd/es/button";

const { TabPane } = Tabs;

export const Admin = () => {
  const triggerDeploy = () => {
    fetch("https://api.netlify.com/build_hooks/5d4c6fcfc1f2fe0e4f3af103", {
      method: "post",
    });
  };

  const options = [
    {
      title: "Questions",
      link: "https://airtable.com/embed/shrp5dKbAMhiJT13u?backgroundColor=cyan",
    },
    {
      title: "Category",
      link: "https://airtable.com/embed/shrB00gCQmsWpZEKt?backgroundColor=cyan",
    },
    {
      title: "Buzzword",
      link: "https://airtable.com/embed/shrxBO0psAUk2breH?backgroundColor=cyan",
    },
  ];
  return (
    <Layout>
      <h1>ADMIN</h1>

      <Tabs>
        {options.map(opt => (
          <TabPane tab={opt.title} key={opt.title}>
            <iframe
              className="airtable-embed"
              src={opt.link}
              frameBorder="0"
              width="100%"
              css={`
                background: transparent;
                border: 1px solid #ccc;
                min-height: 80vh;
                width: 100%;
              `}
            />
          </TabPane>
        ))}
        <TabPane tab="Deploy">
          <Markdown source="[![Netlify Status](https://api.netlify.com/api/v1/badges/dce92e50-d885-4800-829d-a5270d421378/deploy-status)](https://app.netlify.com/sites/devquiz/deploys)" />
          <Button type="primary" ghost onClick={triggerDeploy}>
            Trigger Deploy
          </Button>
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default Admin;
