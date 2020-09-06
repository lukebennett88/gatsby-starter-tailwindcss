/**
 * Keep all static queries in this file.
 * Add new queries as necessary.
 * You add aliases if you need to access the same node more than once.
 * The `placeholderImage` is an example of an alias on the `file` node.
 *
 * Example of how to use this hook:
 * import { useGraphQL } from './src/hooks';
 *
 * const { site } = useGraphQL();
 *
 * return <h1>{site.siteMetadata.title}</h1>;
 */

import { graphql, useStaticQuery } from 'gatsby';

function useGraphQL() {
  const data = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return data;
}

export { useGraphQL };
