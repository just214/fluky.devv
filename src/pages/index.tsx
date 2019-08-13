import React from "react";
import { Layout, MenuBlock } from "../components/common";
// TODO NEED SEO ON THIS PAGE!

const menuItems = [
  {
    label: "QUIZZES",
    rotate: -3,
    to: "/quiz",
    color: "#333",
    gradient: `
    background: #fc4a1a;
    background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
    background: linear-gradient(to right, #f7b733, #fc4a1a);`,
  },
  {
    label: "PODCASTS",
    rotate: 3,
    to: "/podcasts",
    color: "#333",
    gradient: `
    background: #1D976C;  
    background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);  
    background: linear-gradient(to right, #93F9B9, #1D976C);`,
  },
  {
    label: "NEWSLETTERS",
    rotate: -3,
    to: "/newsletters",
    color: "#333",
    gradient: `
    background: #fceabb; 
    background: -webkit-linear-gradient(to right, #f8b500, #fceabb); 
    background: linear-gradient(to right, #f8b500, #fceabb); 
    `,
  },
  {
    label: "BUZZWORDS",
    rotate: 3,
    to: "/buzzwords",
    color: "yellow",
    gradient: `
    background: #614385; 
    background: -webkit-linear-gradient(to right, #516395, #614385); 
    background: linear-gradient(to right, #516395, #614385); 
    `,
  },
  {
    label: "ABOUT THIS SITE",
    rotate: -3,
    to: "/about-site",
    color: "#333",
    gradient: `
    background: #f2709c; 
    background: -webkit-linear-gradient(to right, #ff9472, #f2709c);  
    background: linear-gradient(to right, #ff9472, #f2709c); 
    `,
  },
];

const App = () => (
  <Layout
    maxWidth="1200px"
    bg="#333"
    title="Home"
    keywords={[
      "fluky",
      "fluky.dev",
      "dev",
      "developers",
      "coders",
      "javascript",
      "typescript",
      "html",
      "css",
      "quiz",
      "quizzes",
      "resources",
      "tips",
    ]}
    description="A collection of resources for front end developers. Coding quizzes, podcasts, newsletters, and more!"
  >
    <div
      css={`
        padding: 20px;
      `}
    >
      <h1
        css={`
          color: white;
          text-align: center;
          font-family: Barriecito;
          font-size: 2rem;
          margin-bottom: 50px;
          line-height: 2rem;
        `}
      >
        Resources &amp; Quizzes for{" "}
        <span style={{ color: "yellow" }}>Front End Developers</span>
      </h1>
      <div
        css={`
          margin: 0px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        `}
        role="navigation"
      >
        {menuItems.map(({ rotate, to, color, gradient, label }) => {
          return (
            <MenuBlock
              key={label}
              rotate={rotate}
              to={to}
              color={color}
              gradient={gradient}
            >
              {label}
            </MenuBlock>
          );
        })}
      </div>
    </div>
  </Layout>
);

export default App;
