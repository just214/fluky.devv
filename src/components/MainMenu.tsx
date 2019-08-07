import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const MainMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Categories" } }
        sort: { order: DESC, fields: data___Name }
      ) {
        edges {
          node {
            data {
              Name
              Slug
              Thumbnail {
                url
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <div
        css={`
          display: flex;
        `}
      >
        {data.allAirtable.edges.map(({ node }) => {
          return (
            <Link
              key={node.data.Name}
              to={node.data.Slug}
              css={`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 10px;
                padding: 20px;
                text-decoration: none;
                color: ${props => props.theme.blue};
                transition: background-color 0.5s;
                &:hover {
                  background-color: #efefef;
                }
              `}
            >
              <img height={200} width={200} src={node.data.Thumbnail[0].url} />
              <h1>{node.data.Name}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Categories" } }
      sort: { order: DESC, fields: data___Name }
    ) {
      edges {
        node {
          data {
            Name
            Slug
            Thumbnail {
              url
            }
          }
        }
      }
    }
  }
`;

export default MainMenu;
