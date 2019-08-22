import React from "react";
import { Layout, MenuBlock } from "../components/common";
import { keyframes } from "styled-components";
import brain from "../brain.svg";
import {
  FaArrowAltCircleRight,
  FaHeartbeat,
  FaUsers,
  FaInbox,
  FaClipboardList as FaJournalWhills,
  FaMailBulk,
  FaPodcast,
} from "react-icons/fa";

const colorchange = keyframes`
 0% {
  color: #4d5f85;
}

20% {
  color: yellow;
}

40% {
  color: #1abc9c;
 
}

60% {
  color: #f857a6;
}

80% {
  color: #00a5d3;
}

100% {
  color: #f1800f;
}

`;

const menuItems = [
  {
    label: "QUIZZES",
    rotate: -3,
    to: "/quizzes",
    color: "white",
    gradient: `
    background: #f857a6; 
    background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  
    background: linear-gradient(to right, #ff5858, #f857a6); 
    `,
    icon: function BrainIcon() {
      return <img src={brain} alt="Brain icon" height={40} />;
    },
  },
  {
    label: "COMMUNITIES",
    rotate: -3,
    to: "/communities",
    color: "darkmagenta",
    gradient: `
    background: #2193b0;
    background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
    background: linear-gradient(to right, #6dd5ed, #2193b0); 
    `,
    icon: FaUsers,
  },
  {
    label: "NEWSLETTERS",
    to: "/newsletters",
    color: "#005075",
    gradient: `
    background: #ffb347;
    background: -webkit-linear-gradient(to right, #ffcc33, #ffb347);
    background: linear-gradient(to right, #ffcc33, #ffb347);
    `,
    icon: FaInbox,
  },
  {
    label: "PODCASTS",
    to: "/podcasts",
    color: "yellow",
    gradient: `
    background: #614385; 
    background: -webkit-linear-gradient(to right, #516395, #614385); 
    background: linear-gradient(to right, #516395, #614385); 
    `,
    icon: FaPodcast,
  },

  {
    label: "BUZZWORDS",
    to: "/buzzwords",
    color: "white",
    gradient: `
    background: #fe8c00; 
    background: -webkit-linear-gradient(to right, #f83600, #fe8c00); 
    background: linear-gradient(to right, #f83600, #fe8c00);
    `,
    icon: FaJournalWhills,
  },
  {
    label: "HEALTH",
    to: "/health",
    color: "yellow",
    gradient: `
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    
    `,
    icon: FaHeartbeat,
  },
  {
    label: "ABOUT",
    to: "/about-site",
    color: "brown",
    gradient: `
    background: #1D976C;  
    background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);  
    background: linear-gradient(to right, #93F9B9, #1D976C);`,

    icon: FaArrowAltCircleRight,
  },
  {
    label: "CONTACT",
    to: "/contact",
    color: "#ffcc33",
    gradient: `
    background: #000000;  
    background: -webkit-linear-gradient(to right, #434343, #000000); 
    background: linear-gradient(to right, #434343, #000000);
    `,
    icon: FaMailBulk,
  },
];

const App = () => (
  <Layout
    maxWidth="1200px"
    bg="#1c2229"
    title="Home"
    description="A collection of resources for front end developers. Coding quizzes, podcasts, newsletters,health, and more!"
  >
    <div
      css={`
        padding: 10px;
        text-align: center;
      `}
    >
      <div
        css={`
          padding: 4px;
          display: inline-block;
          margin-bottom: 40px;
        `}
      >
        <h1
          css={`
            color: #4d5f85;
            text-align: center;
            font-family: Barriecito;
            font-size: 2.2rem;
            line-height: 2.3rem;
          `}
        >
          Resources for{" "}
          <span
            css={`
              color: yellow;
              padding: 0px 3px;
              display: inline-block;
              font-weight: bold;
              animation: ${colorchange} 30s infinite alternate;
            `}
          >
            Front End Developers
          </span>
        </h1>
      </div>

      <div
        css={`
          margin: 0px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        `}
        role="navigation"
      >
        {menuItems.map(({ to, color, gradient, label, icon }, index) => {
          const rotateValue = index % 2 ? 3 : -3;
          return (
            <MenuBlock
              key={label}
              rotate={rotateValue}
              to={to}
              color={color}
              gradient={gradient}
              index={index}
              icon={icon}
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
