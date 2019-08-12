import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FaArrowAltCircleRight } from "react-icons/fa";
import MenuBlock from "./menu-block";
import SEO from "./seo";
import "./layout.css";

const Container = styled.div<{ maxWidth?: string }>`
  margin: 0 auto;
  max-width: ${props => props.maxWidth || "960px"};
  padding: 20px;
`;

const theme = {
  blue: "#0066B8",
  lightblue: "#329bf0",
  antgreen: "rgb(82, 196, 26)",
  lightgreen: "#93ff61",
  gray1: "#f5f5f5",
  gray2: "#efefef",
  gray3: "#dadada",
  gray4: "#666",
  gray5: "#333",
  red: "#e3005f",
  orange: "#f08b32",
};

interface LayoutProps {
  bg?: string;
  maxWidth?: string;
}
const Layout: React.FC<LayoutProps> = ({ children, bg, maxWidth }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <SEO
        title={data.site.siteMetadata.title}
        keywords={[`typescript`, `quiz`, `javascript`, `front end`]}
      />
      <ThemeProvider theme={theme}>
        <div
          css={`
            height: 100%;
            min-height: 100vh;
            width: 100%;
            background: ${bg || "white"};
          `}
        >
          <header
            css={`
              padding: 0px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              background: inherit;
            `}
          >
            <MenuBlock rotate={2} gradient={``}>
              <Link to="/">
                <div
                  css={`
                    color: ${props => props.theme.lightblue};
                    font-family: "Barriecito";
                    margin: 0;
                  `}
                >
                  <b>
                    DEV STUFF <FaArrowAltCircleRight size={22} color="#666" />
                  </b>
                </div>
              </Link>
            </MenuBlock>
          </header>
          <Container maxWidth={maxWidth}>
            <main>{children}</main>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
