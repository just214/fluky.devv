import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import SEO from "../components/seo";
import "./layout.css";

const Container = styled.div<{ fullWidth?: boolean }>`
  margin: 0 auto;
  max-width: ${props => (props.fullWidth ? "100%" : "960px")};
  padding: 20px;
`;

const theme = {
  blue: "#0066B8",
  green: "#93ff61",
};

interface LayoutProps {
  bg?: string;
  fullWidth?: boolean;
}
const Layout: React.FC<LayoutProps> = ({ children, bg, fullWidth }) => {
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
              background: #efefef;
              display: flex;
              align-items: center;
              padding-left: 30px;
            `}
          >
            <Link to="/">
              {" "}
              <h3
                css={`
                  color: #333;
                `}
              >
                devquiz
              </h3>
            </Link>
          </header>
          <Container fullWidth={fullWidth}>
            <main>{children}</main>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
