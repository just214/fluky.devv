import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import SEO from "./seo";
import "./layout.css";

const Container = styled.div<{ maxWidth?: string }>`
  margin: 0 auto;
  max-width: ${props => props.maxWidth || "960px"};
  padding: 20px;
`;

const theme = {
  blue: "#0066B8",
  green: "#93ff61",
};

interface LayoutProps {
  bg?: string;
  maxWidth?: string;
}
const Layout: React.FC<LayoutProps> = ({ children, bg, maxWidth }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `);

  // const { siteMetadata } = data.site;

  return (
    <>
      <SEO
        title="Quiz"
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
              height: 50px;
              display: flex;
              align-items: center;
              padding-left: 30px;
            `}
          >
            <Link to="/">
              {" "}
              <h2
                css={`
                  color: #333;
                `}
              >
                <b>dev</b>quiz
              </h2>
            </Link>
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
