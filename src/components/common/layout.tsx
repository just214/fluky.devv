// import "./layout.css";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import Icon from "../Icon";
import SEO from "./seo";

const MainContainer = styled.main<{ maxWidth?: string }>`
  margin: 10px auto;
  max-width: ${props => props.maxWidth || "960px"};
  padding: 10px 20px;
`;

const theme = {
  powderblue: "#f0f6ff",
  darkblue: "#16202b",
  blue: "#0066B8",
  bluegray: "#086CA2",
  lightblue: "#2193b0",
  lightestblue: "#80b5ff",
  green: "#53c41a",
  lightgreen: "#9ded72",
  gray1: "#f5f5f5",
  gray2: "#efefef",
  gray3: "#dadada",
  gray4: "#666",
  gray5: "#333",
  red: "#f5222d",
  orange: "#f08b32",
  pink: "#f857a6",
};

interface LayoutProps {
  bg?: string;
  maxWidth?: string;
  title: string;
  titleTemplate?: string;
  keywords?: string[];
  description: string;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  bg,
  maxWidth,
  title,
  keywords,
  description,
  titleTemplate,
}) => {
  return (
    <>
      <SEO
        title={title}
        keywords={keywords}
        description={description}
        titleTemplate={titleTemplate}
      />
      <ThemeProvider theme={theme}>
        <div
          css={`
            width: 100%;
            max-width: 100%;
            height: 100%;
            min-height: 100vh;
            margin: 0;
            padding: 0;
            background: ${bg || "white"};
            padding-bottom: 100px;
          `}
        >
          <header
            css={`
              padding: 0px 20px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              background: inherit;
            `}
          >
            <Link
              to="/"
              css={`
                color: ${props => props.theme.pink};
                font-family: "Barriecito";
                margin: 0;
                margin-top: 20px;
                transform: rotate(3deg);
                font-size: 30px;
                border: 3px solid transparent;
                transition: border 0.5s;
                &:focus {
                  border: 3px solid yellow;
                }
                &:active {
                  border: 3px solid transparent;
                }
                &:hover {
                  color: ${props => props.theme.pink};
                }
                outline: none;
              `}
            >
              <span
                css={`
                  color: ${props => props.theme.bluegray};
                `}
              >
                FLUKY
              </span>
              <span
                css={`
                  color: orange;
                `}
              >
                .
              </span>
              <span>DEV</span>

              <Icon />
            </Link>
          </header>
          <MainContainer maxWidth={maxWidth}>{children}</MainContainer>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
