import React from 'react';
import { graphql } from 'gatsby';

const Home = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map((edge) => ({
    id: edge.node.id,
    html: edge.node.html
  }));
  return (
    <>
      {nodes.map((node) => (
        <div key={node.id} dangerouslySetInnerHTML={{ __html: node.html }} />
      ))}
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`;

export default Home;
