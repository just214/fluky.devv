import React from "react";
import Layout from "../components/layout";
import MenuBlock from "../components/menu-block";
import { keyframes } from "styled-components";
import brain from "../icons/brain.svg";
import {
  FaArrowAltCircleRight,
  FaHeartbeat,
  FaUsers,
  FaInbox,
  FaClipboardList,
  FaMailBulk,
  FaPodcast,
  FaYoutube,
} from "react-icons/fa";

const colorchange = keyframes`
  0% {
    color: #4d5f85;
  }

  20% {
    color: tomato;
  }

  80% {
    color: white;
  }
}
`;

const menuItems = [
  {
    label: "QUIZZES",
    to: "/quizzes",
    color: "white",
    gradient: ["#f80759", "#bc4e9c"],
    icon: function BrainIcon(): React.FC {
      return <img src={brain} alt="Brain icon" height={40} />;
    },
  },
  {
    label: "COMMUNITIES",
    to: "/communities",
    color: "yellow",
    gradient: ["#008080", "#2193b0"],
    icon: FaUsers,
  },
  {
    label: "NEWSLETTERS",
    to: "/newsletters",
    color: "#005075",
    gradient: ["#ffcc33", "#ffb347"],
    icon: FaInbox,
  },
  {
    label: "YOUTUBE",
    to: "/youtube",
    color: "white",
    gradient: ["red", "tomato"],
    icon: FaYoutube,
  },
  {
    label: "PODCASTS",
    to: "/podcasts",
    color: "yellow",
    gradient: ["#516395", "#614385"],
    icon: FaPodcast,
  },

  {
    label: "BUZZWORDS",
    to: "/buzzwords",
    color: "white",
    gradient: ["#f83600", "#fe8c00"],
    icon: FaClipboardList,
  },
  {
    label: "HEALTH",
    to: "/health",
    color: "orange",
    gradient: ["#3b5282", "#4b6cb7"],
    icon: FaHeartbeat,
  },
  {
    label: "ABOUT",
    to: "/about",
    color: "white",
    gradient: ["#1D976C", "#16ba81"],
    icon: FaArrowAltCircleRight,
  },
  {
    label: "CONTACT",
    to: "/contact",
    color: "white",
    gradient: ["#333", "#111"],
    icon: FaMailBulk,
  },
];

const App: React.FC = (): React.ReactElement => (
  <Layout
    maxWidth="1200px"
    bg="#16202b"
    title="Fluky.dev | Resources for front end developers."
    titleTemplate="%s"
    description="A collection of resources for front end developers. Coding quizzes, podcasts, newsletters, health, and more!"
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
            color: #dadada;
            text-align: center;
            font-family: Barriecito;
            font-size: 2.2rem;
            line-height: 2.3rem;
          `}
        >
          Resources for{" "}
          <span
            css={`
              color: white;
              padding: 0px 3px;
              display: inline-block;
              font-weight: bold;
              animation: ${colorchange} 8s;
            `}
          >
            Front End Developers
          </span>
        </h1>
      </div>

      <nav
        css={`
          margin: 0px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        `}
        role="navigation"
      >
        {menuItems.map(
          ({ to, color, gradient, label, icon }, index): React.ReactElement => {
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
          }
        )}
      </nav>
    </div>
  </Layout>
);

export default App;
