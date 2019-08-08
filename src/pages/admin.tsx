import React from "react";
import Layout from "../components/layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Markdown from "../components/markdown";

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
        <TabList>
          {options.map(opt => (
            <Tab key={opt.title}>{opt.title}</Tab>
          ))}
          <Tab>Deploy</Tab>
        </TabList>

        {options.map(opt => (
          <TabPanel key={opt.title}>
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
          </TabPanel>
        ))}

        <TabPanel
          css={`
            text-align: center;
            margin-top: 40px;
          `}
        >
          <Markdown source="[![Netlify Status](https://api.netlify.com/api/v1/badges/dce92e50-d885-4800-829d-a5270d421378/deploy-status)](https://app.netlify.com/sites/devquiz/deploys)" />
          <button
            css={`
              height: 300px;
              width: 300px;
              color: #fff;
              border-radius: 400px;
              font-size: 60px;
              font-weight: bold;
              border: 8px solid #333;
              cursor: pointer;
              background: red;
            `}
            onClick={triggerDeploy}
          >
            PUSH
          </button>
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

export default Admin;
