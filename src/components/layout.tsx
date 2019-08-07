import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import SEO from "../components/seo";
import "./layout.css";

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
`;

const theme = {
  blue: "#0066B8",
  green: "#93ff61",
};

const Layout = ({ children }) => {
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

  const { siteMetadata } = data.site;

  console.log(siteMetadata);

  return (
    <>
      <SEO
        title="Quiz"
        keywords={[`typescript`, `quiz`, `javascript`, `front end`]}
      />
      <ThemeProvider theme={theme}>
        <>
          <header
            css={`
              height: 50px;
              background: #efefef;
              display: flex;
              align-items: center;
              padding-left: 15px;
            `}
          >
            <Link to="/">
              {" "}
              <h3>Front End Quiz</h3>
            </Link>
          </header>
          <Container>
            <main>{children}</main>
          </Container>
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
